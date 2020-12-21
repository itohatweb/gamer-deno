import {
  addReaction,
  botCache,
  ReactionPayload,
  Role,
} from "../../../../deps.ts";
import { db } from "../../../database/database.ts";
import { PermissionLevels } from "../../../types/commands.ts";
import { createSubcommand } from "../../../utils/helpers.ts";

createSubcommand("roles-reactions", {
  name: "add",
  aliases: ["a"],
  permissionLevels: [PermissionLevels.ADMIN],
  guildOnly: true,
  arguments: [
    { name: "name", type: "string", lowercase: true },
    { name: "emoji", type: "emoji" },
    { name: "roles", type: "...roles" },
  ] as const,
  execute: async function (message, args) {
    const reactionRole = await db.reactionroles.findOne(
      { guildID: message.guildID, name: args.name },
    );
    if (!reactionRole) return botCache.helpers.reactError(message);

    const emoji = typeof args.emoji === "string"
      ? args.emoji
      : botCache.helpers.emojiUnicode(args.emoji as ReactionPayload);

    db.reactionroles.update(reactionRole.id, {
      reactions: [
        ...reactionRole.reactions,
        { reaction: emoji, roleIDs: args.roles.map((r) => r.id) },
      ],
    });

    addReaction(reactionRole.channelID, reactionRole.messageID, emoji);
    botCache.helpers.reactSuccess(message);
  },
});
