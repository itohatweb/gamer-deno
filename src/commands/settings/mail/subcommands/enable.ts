import { botCache } from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { PermissionLevels } from "../../../../types/commands.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("settings-mails", {
  name: "enable",
  aliases: ["on"],
  permissionLevels: [PermissionLevels.ADMIN],
  guildOnly: true,
  execute: async function (message) {
    db.guilds.update(message.guildID, {
      mailsEnabled: true,
    });

    await botCache.helpers.reactSuccess(message);
  },
});
