import {
  addReaction,
  botCache,
  botHasChannelPermissions,
  cache,
  getMessage,
  ReactionPayload,
} from "../../../../deps.ts";
import { db } from "../../../database/database.ts";
import { PermissionLevels } from "../../../types/commands.ts";
import { createSubcommand } from "../../../utils/helpers.ts";

createSubcommand("roles-reactions", {
  name: "create",
  aliases: ["c"],
  permissionLevels: [PermissionLevels.ADMIN],
  guildOnly: true,
  arguments: [
    { name: "name", type: "string", lowercase: true },
    { name: "channel", type: "guildtextchannel", required: false },
    { name: "messageID", type: "snowflake" },
    { name: "emoji", type: "emoji" },
    { name: "roles", type: "...roles" },
  ] as const,
  execute: async function (message, args, guild) {
    if (!guild) return;

    const hasPermissions = await botHasChannelPermissions(message.channelID, [
      "ADD_REACTIONS",
      "USE_EXTERNAL_EMOJIS",
      "READ_MESSAGE_HISTORY",
    ]);
    if (!hasPermissions) return botCache.helpers.reactError(message);

    const channel = args.channel || cache.channels.get(message.channelID);
    if (!channel) return;

    const messageToUse = cache.messages.get(args.messageID) ||
      (await getMessage(channel.id, args.messageID).catch(() => undefined));
    if (!messageToUse) return botCache.helpers.reactError(message);

    const reactionRole = await db.reactionroles.findOne((value) =>
      value.messageID === args.messageID ||
      (message.guildID === value.guildID && value.name === args.name)
    );
    if (reactionRole) return botCache.helpers.reactError(message);

    const reaction = typeof args.emoji === "string"
      ? args.emoji
      : botCache.helpers.emojiUnicode(args.emoji as ReactionPayload);

    db.reactionroles.create(message.id, {
      name: args.name,
      reactions: [
        {
          reaction,
          roleIDs: args.roles.map((r) => r.id),
        },
      ],
      messageID: messageToUse.id,
      channelID: messageToUse.channelID,
      guildID: message.guildID,
      authorID: message.author.id,
    });

    await addReaction(messageToUse.channelID, messageToUse.id, reaction);
    await botCache.helpers.reactSuccess(message);
  },
});
