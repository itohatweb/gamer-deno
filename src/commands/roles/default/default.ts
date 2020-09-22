import type { sendMessage } from "../../../../deps.ts";
import type { createSubcommand } from "../../../utils/helpers.ts";
import type { PermissionLevels } from "../../../types/commands.ts";
import type { defaultRoleSetsDatabase } from "../../../database/schemas/defaultrolesets.ts";
import { botCache } from "../../../../mod.ts";

createSubcommand("roles", {
  name: "default",
  permissionLevels: [PermissionLevels.ADMIN],
  arguments: [{ name: "subcommand", type: "subcommand" }],
  guildOnly: true,
  vipServerOnly: true,
  execute: async (message) => {
    const sets = await defaultRoleSetsDatabase.find(
      { guildID: message.guildID },
    );
    if (!sets?.length) return botCache.helpers.reactError(message);

    sendMessage(
      message.channel,
      {
        content: sets.map((set) =>
          `**${set.name}**: [ <@&${set.defaultRoleID}> ] ${
            set.roleIDs.map((id) => `<@&${id}>`).join(" ")
          }`
        ).join("\n"),
        mentions: { parse: [] },
      },
    );
  },
});
