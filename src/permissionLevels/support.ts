import { botCache } from "../../mod.ts";
import type { PermissionLevels } from "../types/commands.ts";
import type { configs } from "../../configs.ts";

// The member using the command must be one of the bots support team
botCache.permissionLevels.set(
  PermissionLevels.BOT_SUPPORT,
  async (message) => configs.userIDs.botSupporters.includes(message.author.id),
);
