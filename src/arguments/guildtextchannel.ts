import { botCache } from "../../cache.ts";
import { cache, ChannelTypes } from "../../deps.ts";

botCache.arguments.set("guildtextchannel", {
  name: "guildtextchannel",
  execute: async function (_argument, parameters, message) {
    const [id] = parameters;
    if (!id) return;

    const guild = cache.guilds.get(message.guildID);
    if (!guild) return;

    const channelIDOrName = id.startsWith("<#")
      ? id.substring(2, id.length - 1)
      : id.toLowerCase();

    const channel = guild.channels.get(channelIDOrName) ||
      guild.channels.find((channel) => channel.name === channelIDOrName);

    if (
      channel?.type !== ChannelTypes.GUILD_TEXT &&
      channel?.type !== ChannelTypes.GUILD_NEWS
    ) {
      return;
    }

    return channel;
  },
});
