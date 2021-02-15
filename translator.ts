const data = Deno.readTextFileSync("./translated.txt");

const keys = [
  "CREATE_INSTANT_INVITE",
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "ADMINISTRATOR",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "ADD_REACTIONS",
  "VIEW_AUDIT_LOG",
  "VIEW_CHANNEL",
  "SEND_MESSAGES",
  "SEND_TTS_MESSAGES",
  "MANAGE_MESSAGES",
  "EMBED_LINKS",
  "ATTACH_FILES",
  "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE",
  "USE_EXTERNAL_EMOJIS",
  "CONNECT",
  "SPEAK",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MOVE_MEMBERS",
  "USE_VAD",
  "PRIORITY_SPEAKER",
  "STREAM",
  "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES",
  "MANAGE_ROLES",
  "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS",
  "TRUE",
  "FALSE",
  "ON",
  "OFF",
  "MESSAGE_ID",
  "CHANNEL",
  "XP_LOST",
  "AUTOMOD_NAUGHTY",
  "AUTOMOD_CAPITALS",
  "AUTOMOD_URLS",
  "CAPITAL_SPAM",
  "PROFANITY",
  "LINK_POSTED",
  "AUTOMOD_DELETE_REASON",
  "TOO_MUCH_WRONG",
  "LIST_PROFANITY",
  "ROLE_TO_ALL_PATIENCE",
  "ROLE_TO_ALL_SUCCESS",
  "ROLE_TO_ALL_REASON",
  "ANALYTICS_DAILY",
  "ANALYTICS_WEEKLY",
  "ANALYTICS_MONTHLY",
  "ANALYTICS_MESSAGE_COUNT",
  "ANALYTICS_MEMBERS_JOINED",
  "ANALYTICS_MEMBERS_LEFT",
  "ANALYTICS_MEMBERS_NET",
  "ANALYTICS_CHANNELS",
  "ANALYTICS_EMOJIS",
  "ANALYTICS_UNUSED",
  "NEED_HELP_ERROR",
  "NEED_VIP",
  "NOT_AVAILABLE",
  "OWNER",
  "ROLES",
  "CHANNELS",
  "MEMBERS",
  "EMOJIS",
  "LANGUAGE",
  "BOOSTS",
  "SHARD_ID",
  "USER_ID",
  "JOINED_ON",
  "CREATED_ON",
  "NOW",
  "PERMISSIONS",
  "ADMIN",
  "CLEAR_SPAM",
  "TENOR",
  "DOWNLOAD_LINK",
  "COMMAND",
  "USAGE",
  "ALIASES",
  "ENABLED",
  "DISABLED",
  "HELP_DESCRIPTION",
  "PING_DESCRIPTION",
  "NSFW_CHANNEL_REQUIRED",
  "LACKS_PERM_LEVEL",
  "BOT_SERVER_PERMS",
  "BOT_CHANNEL_PERMS",
  "USER_SERVER_PERMS",
  "USER_CHANNEL_PERMS",
  "NONE",
  "HELP_ALL",
  "HELP_SPECIFIC",
  "HELP_WIKI",
  "PING_TIME",
  "INVITE_DESCRIPTION",
  "INVITE_BOT",
  "NEED_SUPPORT",
  "AVATAR_DESCRIPTION",
  "AVATAR_USAGE",
  "SERVER_DESCRIPTION",
  "MEMBERS_IN_VOICE",
  "SERVER_FEATURES",
  "BOT_STATS",
  "SERVERS",
  "CACHED_MEMBERS",
  "MESSAGES",
  "DENO_VERSION",
  "UPTIME",
  "COMMANDS",
  "USER_DESCRIPTION",
  "USER_USAGE",
  "LAST_ACTIVE",
  "ADVICE_DESCRIPTION",
  "ADVICE_QUOTES",
  "AUTOEMBED_DESCRIPTION",
  "AUTOEMBED_USAGE",
  "AUTOEMBED_EMBED_ENABLED",
  "AUTOEMBED_DELETE_REASON",
  "8BALL_DESCRIPTION",
  "8BALL_USAGE",
  "8BALL_NEED_ARGS",
  "8BALL_QUOTES",
  "ROLE_INFO_DESCRIPTION",
  "ROLE_NAME",
  "ROLE_ID",
  "ROLE_COLOR",
  "SHOW_SEPARATELY",
  "MENTIONABLE",
  "POSITION",
  "CREATED_AT",
  "FUNGIFS_NEKO_DESCRIPTION",
  "FUNGIFS_DESCRIPTION",
  "COUNTING_DESCRIPTION",
  "COUNTING_BAD_COUNT",
  "COUNTING_ONLY_ONCE",
  "COUNTING_CATEGORY_NAME",
  "COUNTING_TEAM_ONE_ROLE",
  "COUNTING_TEAM_TWO_ROLE",
  "COUNTING_LOSERS_ROLE",
  "COUNTING_HOW_TO_PLAY",
  "COUNTING_TEAM_SELECT",
  "COUNTING_COUNTING_GLOBAL",
  "COUNTING_TEAM_ONE",
  "COUNTING_TEAM_TWO",
  "COUNTING_BUFFS",
  "COUNTING_DEBUFFS",
  "COUNTING_DOUBLE_TIME_ON",
  "COUNTING_IMMUNITY_ON",
  "COUNTING_STEAL_ON",
  "COUNTING_SLOWMODE_ON",
  "COUNTING_THIEF_ON",
  "COUNTING_QUICK_THINKING_ON",
  "COUNTING_DOUBLE_TIME",
  "COUNTING_IMMUNITY",
  "COUNTING_CLEANUP",
  "COUNTING_SOLO_LEVELING",
  "COUNTING_STEAL",
  "COUNTING_SLOWMODE",
  "COUNTING_HIRE_THIEF",
  "COUNTING_QUICK_THINKING",
  "COUNTING_DOUBLE_TIME_OFF",
  "COUNTING_SOLO_LEVELING_OFF",
  "COUNTING_SLOWMODE_OFF",
  "COUNTING_QUICK_THINKING_OFF",
  "COUNTING_QUICK_THINKING_FAILED",
  "COUNTING_DISABLED",
  "COUNTING_ENABLED",
  "COUNTING_ALREADY_ACTIVE",
  "COUNTING_NEW_COUNT",
  "COUNTING_QUICK_SAVE",
  "COUNTING_SAVED",
  "COUNTING_RESET",
  "COUNTING_HOW_TO_PLAY_1",
  "COUNTING_HOW_TO_PLAY_2",
  "COUNTING_HOW_TO_PLAY_3",
  "COUNTING_HOW_TO_PLAY_4",
  "COUNTING_HOW_TO_PLAY_5",
  "COUNTING_HOW_TO_PLAY_6",
  "COUNTING_HOW_TO_PLAY_7",
  "COUNTING_HOW_TO_PLAY_8",
  "COUNTING_HOW_TO_PLAY_9",
  "COUNTING_HOW_TO_PLAY_10",
  "COUNTING_HOW_TO_PLAY_11",
  "COUNTING_HOW_TO_PLAY_12",
  "COUNTING_HOW_TO_PLAY_13",
  "COUNTING_HOW_TO_PLAY_14",
  "COUNTING_HOW_TO_PLAY_15",
  "COUNTING_PICK_YOUR_TEAM",
  "COUNTING_DOUBLE_TIME_START",
  "CONFESS_CHANNEL_NAME_1",
  "CONFESS_CHANNEL_NAME_2",
  "REACTION_ROLE_REMOVED",
  "REACTION_ROLE_ADDED",
  "LINK_TO_MESSAGE",
  "GACHA_FIRST_1",
  "GACHA_FIRST_2",
  "GACHA_FIRST_3",
  "GACHA_FIRST_4",
  "IDLE_DESCRIPTION",
  "IDLE_PROFILE_EXISTS",
  "IDLE_CREATE_DESCRIPTION",
  "IDLE_CREATE_1",
  "IDLE_CREATE_2",
  "IDLE_CREATE_3",
  "IDLE_CREATE_4",
  "IDLE_GET_RICH",
  "IDLE_NEED_CASH",
  "IDLE_MORE_CASH",
  "IDLE_UPGRADE_DESCRIPTION",
  "IDLE_NITRO",
  "IDLE_UPGRADED_1",
  "IDLE_UPGRADED_2",
  "IDLE_UPGRADED_3",
  "IDLE_CACHE",
  "IDLE_DELETE_DESCRIPTION",
  "IDLE_LEADERBOARD",
  "IDLE_PROFILE_DESCRIPTION",
  "HEY_THERE",
  "CONGRATS",
  "LONG_LIVE",
  "UPGRADING_FRIENDS",
  "UPGRADING_SERVERS",
  "UPGRADING_CHANNELS",
  "UPGRADING_ROLES",
  "UPGRADING_PERMS",
  "UPGRADING_MESSAGES",
  "UPGRADING_INVITES",
  "UPGRADING_BOTS",
  "UPGRADING_HYPESQUADS",
  "UPGRADING_NITRO",
  "FRIENDS_1_TITLE",
  "FRIENDS_1_NOTE",
  "FRIENDS_25_TITLE",
  "FRIENDS_25_NOTE",
  "FRIENDS_25_NOTE_2",
  "FRIENDS_50_TITLE",
  "FRIENDS_50_NOTE",
  "FRIENDS_50_NOTE_2",
  "FRIENDS_75_TITLE",
  "FRIENDS_75_NOTE",
  "FRIENDS_100_TITLE",
  "FRIENDS_100_NOTE",
  "FRIENDS_150_TITLE",
  "FRIENDS_150_NOTE",
  "FRIENDS_200_TITLE",
  "FRIENDS_200_NOTE",
  "FRIENDS_300_TITLE",
  "FRIENDS_300_NOTE",
  "FRIENDS_400_TITLE",
  "FRIENDS_400_NOTE",
  "FRIENDS_500_TITLE",
  "FRIENDS_500_NOTE",
  "FRIENDS_600_TITLE",
  "FRIENDS_600_NOTE",
  "FRIENDS_700_TITLE",
  "FRIENDS_700_NOTE",
  "FRIENDS_800_TITLE",
  "FRIENDS_800_NOTE",
  "FRIENDS_900_TITLE",
  "FRIENDS_900_NOTE",
  "FRIENDS_1000_TITLE",
  "FRIENDS_1000_NOTE",
  "FRIENDS_1250_TITLE",
  "FRIENDS_1250_NOTE",
  "FRIENDS_1500_TITLE",
  "FRIENDS_1500_NOTE",
  "FRIENDS_2000_TITLE",
  "FRIENDS_2000_NOTE",
  "SERVERS_1_TITLE",
  "SERVERS_1_NOTE",
  "SERVERS_25_TITLE",
  "SERVERS_25_NOTE",
  "SERVERS_25_NOTE_2",
  "SERVERS_50_TITLE",
  "SERVERS_50_NOTE",
  "SERVERS_75_TITLE",
  "SERVERS_100_TITLE",
  "SERVERS_100_NOTE",
  "SERVERS_150_TITLE",
  "SERVERS_150_NOTE",
  "SERVERS_200_TITLE",
  "SERVERS_300_TITLE",
  "SERVERS_400_TITLE",
  "SERVERS_500_TITLE",
  "SERVERS_600_TITLE",
  "SERVERS_700_TITLE",
  "SERVERS_800_TITLE",
  "SERVERS_900_TITLE",
  "SERVERS_1000_TITLE",
  "SERVERS_1000_NOTE",
  "SERVERS_1250_TITLE",
  "SERVERS_1500_TITLE",
  "SERVERS_2000_TITLE",
  "CHANNELS_1_TITLE",
  "CHANNELS_1_NOTE",
  "CHANNELS_25_TITLE",
  "CHANNELS_25_NOTE",
  "CHANNELS_25_NOTE_2",
  "CHANNELS_50_TITLE",
  "CHANNELS_50_NOTE",
  "CHANNELS_75_TITLE",
  "CHANNELS_100_TITLE",
  "CHANNELS_150_TITLE",
  "CHANNELS_200_TITLE",
  "CHANNELS_300_TITLE",
  "CHANNELS_400_TITLE",
  "CHANNELS_500_TITLE",
  "CHANNELS_600_TITLE",
  "CHANNELS_700_TITLE",
  "CHANNELS_800_TITLE",
  "CHANNELS_900_TITLE",
  "CHANNELS_1000_TITLE",
  "CHANNELS_1250_TITLE",
  "CHANNELS_1500_TITLE",
  "CHANNELS_2000_TITLE",
  "ROLES_1_TITLE",
  "ROLES_1_NOTE",
  "ROLES_25_TITLE",
  "ROLES_25_NOTE",
  "ROLES_25_NOTE_2",
  "ROLES_50_TITLE",
  "ROLES_75_TITLE",
  "ROLES_100_TITLE",
  "ROLES_150_TITLE",
  "ROLES_200_TITLE",
  "ROLES_300_TITLE",
  "ROLES_400_TITLE",
  "ROLES_500_TITLE",
  "ROLES_600_TITLE",
  "ROLES_700_TITLE",
  "ROLES_800_TITLE",
  "ROLES_900_TITLE",
  "ROLES_1000_TITLE",
  "ROLES_1250_TITLE",
  "ROLES_1500_TITLE",
  "ROLES_2000_TITLE",
  "PERMS_1_TITLE",
  "PERMS_25_TITLE",
  "PERMS_25_NOTE",
  "PERMS_50_TITLE",
  "PERMS_75_TITLE",
  "PERMS_100_TITLE",
  "PERMS_150_TITLE",
  "PERMS_200_TITLE",
  "PERMS_300_TITLE",
  "PERMS_400_TITLE",
  "PERMS_500_TITLE",
  "PERMS_600_TITLE",
  "PERMS_700_TITLE",
  "PERMS_800_TITLE",
  "PERMS_900_TITLE",
  "PERMS_1000_TITLE",
  "PERMS_1250_TITLE",
  "PERMS_1500_TITLE",
  "PERMS_2000_TITLE",
  "MESSAGES_1_TITLE",
  "MESSAGES_1_NOTE",
  "MESSAGES_25_TITLE",
  "MESSAGES_25_NOTE",
  "MESSAGES_25_NOTE_2",
  "MESSAGES_50_TITLE",
  "MESSAGES_50_NOTE",
  "MESSAGES_75_TITLE",
  "MESSAGES_75_NOTE",
  "MESSAGES_100_TITLE",
  "MESSAGES_150_TITLE",
  "MESSAGES_200_TITLE",
  "MESSAGES_300_TITLE",
  "MESSAGES_400_TITLE",
  "MESSAGES_500_TITLE",
  "MESSAGES_600_TITLE",
  "MESSAGES_700_TITLE",
  "MESSAGES_800_TITLE",
  "MESSAGES_900_TITLE",
  "MESSAGES_1000_TITLE",
  "MESSAGES_1250_TITLE",
  "MESSAGES_1500_TITLE",
  "MESSAGES_2000_TITLE",
  "INVITES_1_TITLE",
  "INVITES_1_NOTE",
  "INVITES_25_TITLE",
  "INVITES_25_NOTE",
  "INVITES_50_TITLE",
  "INVITES_75_TITLE",
  "INVITES_100_TITLE",
  "INVITES_150_TITLE",
  "INVITES_200_TITLE",
  "INVITES_300_TITLE",
  "INVITES_400_TITLE",
  "INVITES_500_TITLE",
  "INVITES_600_TITLE",
  "INVITES_700_TITLE",
  "INVITES_800_TITLE",
  "INVITES_900_TITLE",
  "INVITES_1000_TITLE",
  "INVITES_1250_TITLE",
  "INVITES_1500_TITLE",
  "INVITES_2000_TITLE",
  "BOTS_1_TITLE",
  "BOTS_1_NOTE",
  "BOTS_25_TITLE",
  "BOTS_25_NOTE",
  "BOTS_50_TITLE",
  "BOTS_75_TITLE",
  "BOTS_100_TITLE",
  "BOTS_150_TITLE",
  "BOTS_200_TITLE",
  "BOTS_300_TITLE",
  "BOTS_400_TITLE",
  "BOTS_500_TITLE",
  "BOTS_600_TITLE",
  "BOTS_700_TITLE",
  "BOTS_800_TITLE",
  "BOTS_900_TITLE",
  "BOTS_1000_TITLE",
  "BOTS_1250_TITLE",
  "BOTS_1500_TITLE",
  "BOTS_2000_TITLE",
  "HYPESQUADS_1_TITLE",
  "HYPESQUADS_1_NOTE",
  "HYPESQUADS_25_TITLE",
  "HYPESQUADS_25_NOTE",
  "HYPESQUADS_25_NOTE_2",
  "HYPESQUADS_50_TITLE",
  "HYPESQUADS_50_NOTE",
  "HYPESQUADS_75_TITLE",
  "HYPESQUADS_75_NOTE",
  "HYPESQUADS_100_TITLE",
  "HYPESQUADS_100_NOTE",
  "HYPESQUADS_150_TITLE",
  "HYPESQUADS_200_TITLE",
  "HYPESQUADS_300_TITLE",
  "HYPESQUADS_400_TITLE",
  "HYPESQUADS_500_TITLE",
  "HYPESQUADS_600_TITLE",
  "HYPESQUADS_700_TITLE",
  "HYPESQUADS_800_TITLE",
  "HYPESQUADS_900_TITLE",
  "HYPESQUADS_1000_TITLE",
  "HYPESQUADS_1250_TITLE",
  "HYPESQUADS_1250_NOTE",
  "HYPESQUADS_1500_TITLE",
  "HYPESQUADS_1500_NOTE",
  "HYPESQUADS_2000_TITLE",
  "HYPESQUADS_2000_NOTE",
  "NITRO_1_TITLE",
  "NITRO_1_NOTE",
  "NITRO_25_TITLE",
  "NITRO_50_TITLE",
  "NITRO_75_TITLE",
  "NITRO_100_TITLE",
  "NITRO_150_TITLE",
  "NITRO_200_TITLE",
  "NITRO_300_TITLE",
  "NITRO_400_TITLE",
  "NITRO_500_TITLE",
  "NITRO_600_TITLE",
  "NITRO_700_TITLE",
  "NITRO_800_TITLE",
  "NITRO_900_TITLE",
  "NITRO_1000_TITLE",
  "NITRO_1250_TITLE",
  "NITRO_1500_TITLE",
  "NITRO_2000_TITLE",
  "NITRO_2000_NOTE",
  "SLOTS_DESCRIPTION",
  "SLOTS_NOT_ENOUGH_CURRENCY",
  "SLOTS_LOSER",
  "SLOTS_LOSER_MULTI",
  "SLOTS_FREEBIE",
  "SLOTS_WINNER_PARTIAL",
  "SLOTS_WINNER_FULL",
  "SLOTS_WINNER_MULTIPLE",
  "SLOTS_WINNER_LUCKY",
  "SLOTS_WINNER_COMPLETE",
  "SLOTS_DOUBLE_REWARD",
  "MARRY_DESCRIPTION",
  "MARRY_USAGE",
  "MARRY_NOT_SELF",
  "MARRY_NOT_BOT",
  "MARRY_PROPOSE_1",
  "MARRY_PROPOSE_2",
  "MARRY_PROPOSE_3",
  "MARRY_PROPOSE_4",
  "MARRY_PROPOSE_5",
  "MARRY_PROPOSAL",
  "MARRY_HOW_TO_ACCEPT",
  "MARRY_THOUGHT_ONLY_1",
  "MARRY_THOUGHT_ONLY_2",
  "MARRY_TIME_TO_SHOP",
  "MARRY_MARRIED_IN_THOUGHT_1",
  "MARRY_MARRIED_IN_THOUGHT_2",
  "MARRY_YOU_ARE_MARRIED",
  "MARRY_SHOPPING_LEFT",
  "SHOP_WEDDING_DESCRIPTION",
  "SHOP_WEDDING_NOT_MARRIED",
  "SHOP_WEDDING_COMPLETE",
  "SHOP_WEDDING_CONGRATS_1",
  "SHOP_WEDDING_CONGRATS_2",
  "SHOP_WEDDING_CONGRATS_3",
  "SHOP_WEDDING_NEED_COINS",
  "SHOP_WEDDING_SHOPPING_LIST",
  "LIFE_DESCRIPTION",
  "LIFE_NOT_MARRIED",
  "LIFE_COMPLETE",
  "LIFE_CONGRATS",
  "LIFE_CONGRATS_1",
  "LIFE_CONGRATS_2",
  "LIFE_CONGRATS_3",
  "LIFE_NEED_COINS",
  "LIFE_SHOPPING_LIST",
  "DIVORCE_DESCRIPTION",
  "DIVORCED",
  "EVENTS_DEFAULT_TITLE",
  "EVENTS_DEFAULT_DESCRIPTION",
  "EVENTS_DEFAULT_PLATFORM",
  "EVENTS_DEFAULT_GAME",
  "EVENTS_DEFAULT_ACTIVITY",
  "EVENTS_HELPER_1",
  "EVENTS_HELPER_2",
  "EVENTS_HELPER_3",
  "EVENTS_HELPER_4",
  "EVENTS_HELPER_5",
  "EVENTS_HELPER_6",
  "EVENTS_HELPER_7",
  "EVENTS_HELPER_8",
  "EVENTS_HELPER_9",
  "EVENTS_HELPER_10",
  "EVENTS_HELPER_11",
  "EVENTS_HELPER_12",
  "EVENTS_HELPER_13",
  "EVENTS_HELPER_14",
  "EVENTS_HELPER_15",
  "EVENTS_HELPER_16",
  "EVENTS_HELPER_17",
  "EVENTS_HELPER_18",
  "EVENTS_SHOW_DESCRIPTION",
  "EVENTS_SHOW_EXTENDED",
  "EVENTS_SHOW_USAGE",
  "EVENTS_SHOW_ALIASES",
  "EVENTS_SHOW_BASIC",
  "EVENTS_SHOW_BASIC_1",
  "EVENTS_SHOW_BASIC_2",
  "EVENTS_SHOW_BASIC_3",
  "EVENTS_SHOW_TIME_1",
  "EVENTS_SHOW_TIME_2",
  "EVENTS_SHOW_TIME_3",
  "EVENTS_SHOW_TIME_4",
  "EVENTS_SHOW_TIME_5",
  "EVENTS_SHOW_RSVP_1",
  "EVENTS_SHOW_RSVP_2",
  "EVENTS_SHOW_RSVP_3",
  "EVENTS_SHOW_RSVP_4",
  "EVENTS_SHOW_RSVP_5",
  "EVENTS_SHOW_RSVP_6",
  "EVENTS_SHOW_RSVP_7",
  "EVENTS_SHOW_POSITIONS",
  "EVENTS_SHOW_GAMING_1",
  "EVENTS_SHOW_GAMING_2",
  "EVENTS_SHOW_GAMING_3",
  "EVENTS_SHOW_STARTS_AT",
  "EVENTS_SHOW_BASIC_EMOJI",
  "EVENTS_SHOW_TIME_EMOJI",
  "EVENTS_SHOW_RSVP_EMOJI",
  "EVENTS_SHOW_GAMING_EMOJI",
  "MISSIONS_ADVICE",
  "MISSIONS_AFK",
  "MISSIONS_BACKGROUND",
  "MISSIONS_BAKA",
  "MISSIONS_COMPLIMENT",
  "MISSIONS_HUG",
  "MISSIONS_PROFILE",
  "MISSIONS_ROLE",
  "MISSIONS_USER",
  "MISSIONS_WISDOM",
  "MISSIONS_VOTEFEEDBACK",
  "MISSIONS_VOICE10MIN",
  "MISSIONS_AVATAR",
  "MISSIONS_CUDDLE",
  "MISSIONS_KISS",
  "MISSIONS_POKE",
  "MISSIONS_TICKLE",
  "MISSIONS_PONY",
  "MISSIONS_8BALL",
  "MISSIONS_GUILDADDED",
  "MISSIONS_MINES",
  "MISSIONS_LMAO",
  "MISSIONS_SLOTS",
  "MISSIONS_WALLPOST",
  "MISSIONS_BITE",
  "SERVER_XP",
  "LEVEL",
  "GLOBAL_XP",
  "NOT_MARRIED",
  "MARRIED",
  "NEW_IN",
  "LEADERBOARD_SERVER",
  "LEADERBOARD_GLOBAL",
  "LEADERBOARD_VOICE",
  "LEADERBOARD_COINS",
  "LEADERBOARD_RANK",
  "LEADERBOARD_CURRENT_XP",
  "LEADERBOARD_CURRENT_COINS",
  "LEADERBOARD_NAME",
  "LEADERBOARD_LEVEL",
  "LEADERBOARD_EXP",
  "COINS",
  "LEADERBOARD_PRIZE",
  "POLLS_DESCRIPTION",
  "POLLS_NEED_OPTION",
  "POLLS_NEED_2_OPTIONS",
  "POLLS_OPTION_ADDED",
  "POLLS_NEED_DURATION",
  "POLLS_VOTE_COUNT",
  "POLLS_REQUIRE_ROLES",
  "POLLS_CREATED",
  "POLLS_POLL_ID",
  "CHANNEL_TYPE_0",
  "CHANNEL_TYPE_2",
  "CHANNEL_TYPE_4",
  "CHANNEL_TYPE_5",
  "LOGS_CHANNEL_CREATED",
  "LOGS_CHANNEL_DELETED",
  "LOGS_CHANNEL_UPDATED",
  "CHANNEL_ID",
  "TOTAL_CHANNELS",
  "TYPE",
  "CATEGORY",
  "LOGS_POSITION",
  "LOGS_CREATED_ON",
  "USER_BANNED",
  "USER_UNBANNED",
  "USER",
  "TOTAL_USERS",
  "REASON",
  "MEMBER_JOINED",
  "MEMBER_REMOVED",
  "MEMBER_NAME",
  "ACCOUNT_AGE",
  "ROLE_CREATED",
  "ROLE_DELETED",
  "TOTAL_ROLES",
  "HOISTED",
  "LOGS_MENTIONABLE",
  "VERIFY_SETUP_THANKS",
  "VERIFY_SETUP_UNLOCK",
  "VERIFY_SETUP_THRILLED",
  "VERIFY_SETUP_WELCOME",
  "VERIFY_SETUP_AMAZING",
  "VERIFY_SETUP_PROCESS",
  "VERIFY_SETUP_HELP",
  "VERIFY_SETUP_REASON",
  "VERIFY_USE_THIS",
  "VERIFY_CATEGORY_NAME",
  "VERIFY_CHANNEL_NAME",
  "REMIND_DESCRIPTION",
  "REMIND_USAGE",
  "COINFLIP_DESCRIPTION",
  "COINFLIP_USAGE",
  "BALANCE_DESCRIPTION",
  "SETTINGS_DESCRIPTION",
  "SETTINGS_USAGE",
  "SETTINGS_PREFIX_DESCRIPTION",
  "SETTINGS_PREFIX_USAGE",
  "PAY_DESCRIPTION",
  "PAY_USAGE",
  "BOTS_DESCRIPTION",
  "ROLES_DESCRIPTION",
  "ROLES_USAGE",
  "ROLES_LIST_DESCRIPTION",
  "ROLES_MEMBERS_DESCRIPTION",
  "ROLES_MEMBERS_USAGE",
  "ROLES_INFO_DESCRIPTION",
  "ROLES_INFO_USAGE",
  "ROLES_GIVE_DESCRIPTION",
  "ROLES_GIVE_USAGE",
  "ROLES_TAKE_DESCRIPTION",
  "ROLES_TAKE_USAGE",
  "ROLES_ALL_DESCRIPTION",
  "ROLES_ALL_USAGE",
  "ROLES_DEFAULT_DESCRIPTION",
  "ROLES_DEFAULT_USAGE",
  "ROLES_DEFAULT_CREATE_DESCRIPTION",
  "ROLES_DEFAULT_CREATE_USAGE",
  "ROLES_DEFAULT_DELETE_DESCRIPTION",
  "ROLES_DEFAULT_DELETE_USAGE",
  "ROLES_DEFAULT_ADD_DESCRIPTION",
  "ROLES_DEFAULT_ADD_USAGE",
  "ROLES_DEFAULT_REMOVE_DESCRIPTION",
  "ROLES_DEFAULT_REMOVE_USAGE",
  "ROLES_GROUPED_DESCRIPTION",
  "ROLES_GROUPED_USAGE",
  "ROLES_GROUPED_CREATE_DESCRIPTION",
  "ROLES_GROUPED_CREATE_USAGE",
  "ROLES_GROUPED_DELETE_DESCRIPTION",
  "ROLES_GROUPED_DELETE_USAGE",
  "ROLES_GROUPED_ADD_DESCRIPTION",
  "ROLES_GROUPED_ADD_USAGE",
  "ROLES_GROUPED_REMOVE_DESCRIPTION",
  "ROLES_GROUPED_REMOVE_USAGE",
  "ROLES_REQUIRED_DESCRIPTION",
  "ROLES_REQUIRED_USAGE",
  "ROLES_REQUIRED_CREATE_DESCRIPTION",
  "ROLES_REQUIRED_CREATE_USAGE",
  "ROLES_REQUIRED_DELETE_DESCRIPTION",
  "ROLES_REQUIRED_DELETE_USAGE",
  "ROLES_REQUIRED_ADD_DESCRIPTION",
  "ROLES_REQUIRED_ADD_USAGE",
  "ROLES_REQUIRED_REMOVE_DESCRIPTION",
  "ROLES_REQUIRED_REMOVE_USAGE",
  "ROLES_UNIQUE_DESCRIPTION",
  "ROLES_UNIQUE_USAGE",
  "ROLES_UNIQUE_CREATE_DESCRIPTION",
  "ROLES_UNIQUE_CREATE_USAGE",
  "ROLES_UNIQUE_DELETE_DESCRIPTION",
  "ROLES_UNIQUE_DELETE_USAGE",
  "ROLES_UNIQUE_ADD_DESCRIPTION",
  "ROLES_UNIQUE_ADD_USAGE",
  "ROLES_UNIQUE_REMOVE_DESCRIPTION",
  "ROLES_UNIQUE_REMOVE_USAGE",
  "ROLES_REACTIONS_DESCRIPTION",
  "ROLES_REACTIONS_USAGE",
  "ROLES_REACTIONS_ADD_DESCRIPTION",
  "ROLES_REACTIONS_ADD_USAGE",
  "ROLES_REACTIONS_CREATE_DESCRIPTION",
  "ROLES_REACTIONS_CREATE_USAGE",
  "ROLES_REACTIONS_DELETE_DESCRIPTION",
  "ROLES_REACTIONS_DELETE_USAGE",
  "ROLES_REACTIONS_REMOVE_DESCRIPTION",
  "ROLES_REACTIONS_REMOVE_USAGE",
  "ROLES_REACTIONS_SETUP_DESCRIPTION",
  "ROLES_REACTIONS_SETUP_USAGE",
  "ROLES_MESSAGES_DESCRIPTION",
  "ROLES_MESSAGES_USAGE",
  "ROLES_MESSAGES_CREATE_DESCRIPTION",
  "ROLES_MESSAGES_CREATE_USAGE",
  "ROLES_MESSAGES_DELETE_DESCRIPTION",
  "ROLES_MESSAGES_DELETE_USAGE",
  "SELF_ASSIGN",
  "SELF_REMOVE",
  "PATIENCE",
  "FEEDBACK_CATEGORY_NAME",
  "IDEA_FROM",
  "BUGS_FROM",
  "IDEA_CHANNEL_NAME",
  "BUGS_CHANNEL_NAME",
  "FEEDBACK_IDEA_QUESTION_1_TEXT",
  "FEEDBACK_IDEA_QUESTION_1_NAME",
  "ADD_FEATURE",
  "REMOVE_FEATURE",
  "COMPLAINT",
  "GENERAL",
  "TWEAKS",
  "FEEDBACK_IDEA_QUESTION_2_TEXT",
  "FEEDBACK_IDEA_QUESTION_2_NAME",
  "FEEDBACK_IDEA_QUESTION_3_TEXT",
  "FEEDBACK_IDEA_QUESTION_3_NAME",
  "FEEDBACK_BUGS_QUESTION_1_TEXT",
  "FEEDBACK_BUGS_QUESTION_1_NAME",
  "FEEDBACK_BUGS_QUESTION_2_TEXT",
  "FEEDBACK_BUGS_QUESTION_2_NAME",
  "FEEDBACK_BUGS_QUESTION_3_TEXT",
  "FEEDBACK_BUGS_QUESTION_3_NAME",
  "FEEDBACK_BUGS_QUESTION_4_TEXT",
  "FEEDBACK_BUGS_QUESTION_4_NAME",
  "MULTIPLAYER",
  "BATTLE_ROYALE",
  "FEEDBACK_BUGS_QUESTION_5_TEXT",
  "FEEDBACK_BUGS_QUESTION_5_NAME",
  "FACEBOOK",
  "GUEST",
  "FEEDBACK_BUGS_QUESTION_6_TEXT",
  "FEEDBACK_BUGS_QUESTION_6_NAME",
  "FEEDBACK_BUGS_QUESTION_7_TEXT",
  "FEEDBACK_BUGS_QUESTION_7_NAME",
  "FEEDBACK_BUGS_QUESTION_8_TEXT",
  "FEEDBACK_BUGS_QUESTION_8_NAME",
  "FEEDBACK_BUGS_QUESTION_9_TEXT",
  "FEEDBACK_BUGS_QUESTION_9_NAME",
  "FEEDBACK_BUGS_QUESTION_10_TEXT",
  "FEEDBACK_BUGS_QUESTION_10_NAME",
  "MOVE_DESCRIPTION",
  "MOVE_USAGE",
  "NO_REASON",
  "BAN_DESCRIPTION",
  "BAN_USAGE",
  "KICK_DESCRIPTION",
  "NICK_DESCRIPTION",
  "NICK_USAGE",
  "SPY_DESCRIPTION",
  "SPY_USAGE",
  "SPY_TRIGGER_FOUND",
  "NOTE_DESCRIPTION",
  "NOTE_USAGE",
  "MODLOG_DESCRIPTION",
  "MODLOG_MODERATOR",
  "MODLOG_MEMBER",
  "MODLOG_DURATION",
  "MODLOG_TIME",
  "MODLOG_CASE",
  "MODLOG_BAN",
  "MODLOG_UNBAN",
  "MODLOG_MUTE",
  "MODLOG_UNMUTE",
  "MODLOG_WARN",
  "MODLOG_KICK",
  "MODLOG_NOTE",
  "MODLOG_UNKNOWN_USER",
  "MODLOG_DETAILS",
  "MODLOG_USER_HISTORY",
  "MODLOG_CASE_INFO",
  "MODLOG_CLEAR_DESCRIPTION",
  "MODLOG_CLEAR_USAGE",
  "MODLOG_EDIT_DESCRIPTION",
  "MODLOG_EDIT_USAGE",
  "MODLOG_REMOVE_DESCRIPTION",
  "MODLOG_REMOVE_USAGE",
  "UNBAN_DESCRIPTION",
  "UNBAN_USAGE",
  "WARN_DESCRIPTION",
  "WARN_USAGE",
  "MUTE_DESCRIPTION",
  "MUTE_USAGE",
  "MUTE_TITLE",
  "UNMUTE_DESCRIPTION",
  "UNMUTE_USAGE",
  "UNMUTE_TITLE",
  "PURGE_DESCRIPTION",
  "PURGE_USAGE",
  "MIRRORS_DESCRIPTION",
  "MIRRORS_USAGE",
  "MIRRORS_EDIT_DESCRIPTION",
  "MIRRORS_EDIT_USAGE",
  "MIRRORS_CREATE_DESCRIPTION",
  "MIRRORS_CREATE_USAGE",
  "MIRRORS_DELETE_DESCRIPTION",
  "MIRRORS_DELETE_USAGE",
  "MIRRORS_SETUP_DESCRIPTION",
  "MIRRORS_SETUP_USAGE",
  "SETTINGS_MAILS_DESCRIPTION",
  "SETTINGS_MAILS_USAGE",
  "SETTINGS_MAILS_SETUP_DESCRIPTION",
  "SETTINGS_MAILS_SETUP_USAGE",
  "SETTINGS_MAILS_ROLES_DESCRIPTION",
  "SETTINGS_MAILS_ROLES_USAGE",
  "SETTINGS_MAILS_LOGS_DESCRIPTION",
  "SETTINGS_MAILS_LOGS_USAGE",
  "SETTINGS_MAILS_ENABLE_DESCRIPTION",
  "SETTINGS_MAILS_ENABLE_USAGE",
  "SETTINGS_MAILS_DISABLE_DESCRIPTION",
  "SETTINGS_MAILS_DISABLE_USAGE",
  "SETTINGS_MAILS_AUTORESPONSE_DESCRIPTION",
  "SETTINGS_MAILS_AUTORESPONSE_USAGE",
  "SETTINGS_MAILS_QUESTIONS_DESCRIPTION",
  "SETTINGS_MAILS_QUESTIONS_USAGE",
  "SETTINGS_MAILS_QUESTIONS_ADD_DESCRIPTION",
  "SETTINGS_MAILS_QUESTIONS_ADD_USAGE",
  "SETTINGS_MAILS_QUESTIONS_REMOVE_DESCRIPTION",
  "SETTINGS_MAILS_QUESTIONS_REMOVE_USAGE",
  "SETTINGS_FEEDBACK_DESCRIPTION",
  "SETTINGS_FEEDBACK_USAGE",
  "SETTINGS_FEEDBACK_APPROVALCHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_APPROVALCHANNEL_USAGE",
  "SETTINGS_FEEDBACK_LOGCHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_LOGCHANNEL_USAGE",
  "SETTINGS_FEEDBACK_REJECTEDCHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_REJECTEDCHANNEL_USAGE",
  "SETTINGS_FEEDBACK_REJECTEDMESSAGE_DESCRIPTION",
  "SETTINGS_FEEDBACK_REJECTEDMESSAGE_USAGE",
  "SETTINGS_FEEDBACK_SOLVEDCHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_SOLVEDCHANNEL_USAGE",
  "SETTINGS_FEEDBACK_SOLVEDMESSAGE_DESCRIPTION",
  "SETTINGS_FEEDBACK_SOLVEDMESSAGE_USAGE",
  "SETTINGS_FEEDBACK_SETUP_DESCRIPTION",
  "SETTINGS_FEEDBACK_SETUP_USAGE",
  "SETTINGS_FEEDBACK_BUGS_DESCRIPTION",
  "SETTINGS_FEEDBACK_BUGS_USAGE",
  "SETTINGS_FEEDBACK_BUGS_CHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_BUGS_CHANNEL_USAGE",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_DESCRIPTION",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_USAGE",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_ADD_DESCRIPTION",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_ADD_USAGE",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_REMOVE_DESCRIPTION",
  "SETTINGS_FEEDBACK_BUGS_QUESTIONS_REMOVE_USAGE",
  "SETTINGS_FEEDBACK_IDEA_DESCRIPTION",
  "SETTINGS_FEEDBACK_IDEA_USAGE",
  "SETTINGS_FEEDBACK_IDEA_CHANNEL_DESCRIPTION",
  "SETTINGS_FEEDBACK_IDEA_CHANNEL_USAGE",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_DESCRIPTION",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_USAGE",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_ADD_DESCRIPTION",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_ADD_USAGE",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_REMOVE_DESCRIPTION",
  "SETTINGS_FEEDBACK_IDEA_QUESTIONS_REMOVE_USAGE",
  "SETTINGS_STAFF_DESCRIPTION",
  "SETTINGS_STAFF_USAGE",
  "ADMIN_ROLE",
  "MOD_ROLES",
  "SETTINGS_STAFF_ADMINS_DESCRIPTION",
  "SETTINGS_STAFF_ADMINS_USAGE",
  "SETTINGS_STAFF_MODS_DESCRIPTION",
  "SETTINGS_STAFF_MODS_USAGE",
  "SETTINGS_STAFF_MODS_ADD_DESCRIPTION",
  "SETTINGS_STAFF_MODS_ADD_USAGE",
  "SETTINGS_STAFF_MODS_REMOVE_DESCRIPTION",
  "SETTINGS_STAFF_MODS_REMOVE_USAGE",
  "SETTINGS_MUTE_DESCRIPTION",
  "SETTINGS_MUTE_USAGE",
  "SETTINGS_MUTE_ROLE_DESCRIPTION",
  "SETTINGS_MUTE_ROLE_USAGE",
  "SETTINGS_AUTOMOD_DESCRIPTION",
  "SETTINGS_AUTOMOD_USAGE",
  "SETTINGS_AUTOMOD_CAPITALS_DESCRIPTION",
  "SETTINGS_AUTOMOD_CAPITALS_USAGE",
  "SETTINGS_AUTOMOD_LINKS_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_USAGE",
  "SETTINGS_AUTOMOD_LINKS_CHANNELS_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_CHANNELS_USAGE",
  "SETTINGS_AUTOMOD_LINKS_DISABLE_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_DISABLE_USAGE",
  "SETTINGS_AUTOMOD_LINKS_ENABLE_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_ENABLE_USAGE",
  "SETTINGS_AUTOMOD_LINKS_RESTRICTED_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_RESTRICTED_USAGE",
  "SETTINGS_AUTOMOD_LINKS_ROLE_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_ROLE_USAGE",
  "SETTINGS_AUTOMOD_LINKS_URLS_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_URLS_USAGE",
  "SETTINGS_AUTOMOD_LINKS_USER_DESCRIPTION",
  "SETTINGS_AUTOMOD_LINKS_USER_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_ENABLE_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_ENABLE_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_DISABLE_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_DISABLE_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_PHRASES_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_PHRASES_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_SETUP_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_SETUP_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_SOFT_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_SOFT_USAGE",
  "SETTINGS_AUTOMOD_PROFANITY_STRICT_DESCRIPTION",
  "SETTINGS_AUTOMOD_PROFANITY_STRICT_USAGE",
  "MAIL_DESCRIPTION",
  "MAIL_USAGE",
  "MAIL_CLOSED",
  "MAIL_RATING",
  "MAIL_VOTE_NOW",
  "MAIL_VOTE",
  "MAIL_TAG_SENT_BY",
  "MAIL_SILENT_CLOSE",
  "MAIL_CATEGORY_NAME",
  "MAIL_EXAMPLE_MAIL",
  "MAIL_NEW_MAIL_IN_DM",
  "MAIL_NEED_MAIL_ID",
  "MAIL_REPLY_SENT_SUPPORT",
  "MAIL_DEFAULT_AUTO_RESPONSE",
  "MAIL_GREAT",
  "MAIL_OK",
  "MAIL_NOT_GOOD",
  "MAIL_BAD",
  "MAIL_CLOSE_DESCRIPTION",
  "MAIL_CLOSE_USAGE",
  "MAIL_REPLY_DESCRIPTION",
  "MAIL_REPLY_USAGE",
  "MAIL_SILENT_DESCRIPTION",
  "MAIL_SILENT_USAGE",
  "LABELS_DESCRIPTION",
  "LABELS_USAGE",
  "LABELS_CREATE_DESCRIPTION",
  "LABELS_CREATE_USAGE",
  "LABELS_DELETE_DESCRIPTION",
  "LABELS_DELETE_USAGE",
  "LABELS_SET_DESCRIPTION",
  "LABELS_SET_USAGE",
  "EMBED_DESCRIPTION",
  "EMBED_USAGE",
  "EMBED_EDIT_DESCRIPTION",
  "EMBED_EDIT_USAGE",
  "EMBED_SHOW_DESCRIPTION",
  "EMBED_SHOW_USAGE",
  "TAG_DESCRIPTION",
  "TAG_USAGE",
  "TAG_CREATE_DESCRIPTION",
  "TAG_CREATE_USAGE",
  "TAG_DELETE_DESCRIPTION",
  "TAG_DELETE_USAGE",
  "TAG_INSTALL_DESCRIPTION",
  "TAG_INSTALL_USAGE",
  "TAG_PUBLIC_DESCRIPTION",
  "TAG_PUBLIC_USAGE",
  "TAG_SHOW_DESCRIPTION",
  "TAG_SHOW_USAGE",
  "TAG_UNINSTALL_DESCRIPTION",
  "TAG_UNINSTALL_USAGE",
  "SETUP_DESCRIPTION",
  "SETUP_PREPARING",
  "SETUP_BEGIN",
  "SETUP_SUBSCRIBE_QUESTION",
  "SETUP_NEED_CHANNEL",
  "SETUP_CANCELLED",
  "SETUP_COUNTING_SETUP",
  "SETUP_CONFESSIONALS_SETUP",
  "SETUP_VERIFICATION_SETUP",
  "SETUP_URLFILTER_SETUP",
  "SETUP_PROFANITY_SETUP",
  "SETUP_CAPITALS_SETUP",
  "SETUP_FEEDBACK_SETUP",
  "SETUP_MUTE_SETUP",
  "SETUP_TODO_SETUP",
  "SURVEYS_DESCRIPTION",
  "SURVEYS_CREATED",
  "SURVEYS_NEED_OPTIONS",
  "TODO_DESCRIPTION",
  "TODO_PRIORITY",
  "TODO_POINTS",
  "TODO_LABEL",
  "NEED_VALID_ROLE",
  "POSSIBLE_ROLES",
  "REPLY",
  "REPLY_ANON",
  "CLOSE",
  "CLOSE_SILENTLY",
  "CANCEL_OPTIONS",
  "SKIP_OPTIONS",
];

const array = data.split("\n");

const obj = {};
let cancel = 0;

for (const key of keys) {
  const [item] = array;
  if (!item.startsWith("[")) {
    // @ts-ignore
    obj[key] = item.replace("\t", "").substring(1, item.length - 2);
    array.shift();
    continue;
  }

  array.shift();
  const arr = [];
  for (const i of array) {
    if (i !== "]," && i !== "]") {
      arr.push(i.replace("\t", "").substring(1, i.length - (i.endsWith(",") ? 2 : 1)));
      continue;
    }

    break;
  }

  for (const a of arr) {
    array.shift();
  }
  array.shift();

  // @ts-ignore
  obj[key] = arr;
  // if (cancel === 140) break;
  // else cancel++;
}

console.log(obj);

Deno.writeTextFileSync("strings.json", JSON.stringify(obj, undefined, " "));
