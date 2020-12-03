import { botCache, cache, chooseRandom, Image } from "../../deps.ts";
import fonts from "../../fonts.ts";
import { db } from "../database/database.ts";
import { translate } from "../utils/i18next.ts";

const profileBuffers = {
  blueCircle: await Image.decode(
    Deno.readFileSync(
      new URL("./../../assets/profile/blue_circle.png", import.meta.url),
    ),
  ),
  whiteRectangle: await Image.decode(
    Deno.readFileSync(
      new URL(
        "./../../assets/profile/left_rectangle_white.png",
        import.meta.url,
      ),
    ),
  ),
  botLogo: await Image.decode(
    Deno.readFileSync(
      new URL("./../../assets/profile/gamer.png", import.meta.url),
    ),
  ),
};

botCache.helpers.makeProfileCanvas = async function makeCanvas(
  guildID,
  memberID,
  options,
) {
  const member = cache.members.get(memberID);
  if (!member) return;

  const [settings, xpSettings, userSettings, marriage] = await Promise.all([
    db.guilds.get(guildID),
    db.xp.get(`${guildID}-${memberID}`),
    db.users.get(memberID),
    db.marriages.get(memberID),
  ]);

  const spouse = cache.members.get(marriage?.spouseID!);
  // Select the background theme & id from their settings if no override options were provided
  const style = (options?.style) || userSettings?.theme || "white";
  // Default to a random background
  const backgroundID = (options?.backgroundID) || userSettings?.backgroundID;

  // Get background data OR If the background is invalid then set it to default values
  let bg = botCache.constants.backgrounds.find((b) => b.id === backgroundID) ||
    chooseRandom(botCache.constants.backgrounds);
  if (!bg) return;

  let bgURL = "";

  // VIP Guilds can prevent certain backgrounds
  if (botCache.vipGuildIDs.has(guildID)) {
    // VIP Users can override them still
    if (!botCache.vipUserIDs.has(memberID)) {
      if (settings && !settings.allowedBackgroundURLs.includes(String(bg.id))) {
        // User selected an invalid background
        bgURL = chooseRandom(settings.allowedBackgroundURLs);
      }
    }
  }

  // SERVER XP DATA
  const serverLevelDetails = botCache.constants.levels.find((lev) =>
    lev.xpNeeded > (xpSettings?.xp || 0)
  );
  const globalLevelDetails = botCache.constants.levels.find((lev) =>
    lev.xpNeeded > (userSettings?.xp || 0)
  );
  const previousServerLevelDetails =
    botCache.constants.levels.find((lev) =>
      lev.id === (serverLevelDetails?.id || 0) - 1
    ) || botCache.constants.levels.get(0);
  const previousGlobalLevelDetails =
    botCache.constants.levels.find((lev) =>
      lev.id === (globalLevelDetails?.id || 0) - 1
    ) || botCache.constants.levels.get(0);
  if (
    !serverLevelDetails || !globalLevelDetails || !previousServerLevelDetails ||
    !previousGlobalLevelDetails
  ) {
    return;
  }

  const memberLevel = serverLevelDetails.id;
  const totalMemberXP = xpSettings?.xp || 0;
  const globalLevel = globalLevelDetails.id;
  const totalGlobalXP = userSettings?.xp || 0;

  // Since XP is stored as TOTAL and is not reset per level we need to make a cleaner version
  // Create the cleaner xp based on the level of the member
  let memberXP = totalMemberXP;
  if (memberLevel >= 1) {
    const previousLevel = botCache.constants.levels.find((lev) =>
      lev.id === memberLevel - 1
    );
    if (!previousLevel) return;

    memberXP = totalMemberXP - previousLevel.xpNeeded;
  }

  // Create the cleaner xp based on the level of the user
  let globalXP = totalGlobalXP;
  if (globalLevel >= 1) {
    const previousLevel = botCache.constants.levels.find((lev) =>
      lev.id === globalLevel - 1
    );
    if (!previousLevel) return;
    globalXP = totalGlobalXP - previousLevel.xpNeeded;
  }

  // Calculate Progress
  const xpBarWidth = 360;

  // Marriage calculations
  const loveCount = marriage?.love
    ? (marriage.love > 100 ? 100 : marriage.love)
    : 0;
  const mRatio = loveCount / 100;
  const mProgress = xpBarWidth * mRatio;

  const sRatio = memberXP /
    (serverLevelDetails.xpNeeded - previousServerLevelDetails.xpNeeded ||
      serverLevelDetails.xpNeeded);
  const sProgress = xpBarWidth * sRatio;
  const gRatio = globalXP /
    (globalLevelDetails.xpNeeded - previousGlobalLevelDetails.xpNeeded);
  const gProgress = xpBarWidth * gRatio;

  // STYLES EVALUATION AND DATA
  const mode = botCache.constants.themes.get(style) ||
    botCache.constants.themes.get("white")!;
  const canvas = Image.new(852, 581);
  // .composite(botCache.constants.themes.get("white")!.rectangle, 2, 50)

  // VIP USERS BACKGROUNDS
  if (botCache.vipUserIDs.has(memberID)) {
    console.log("im in the if vip only");
    // CUSTOM DESCRIPTION
    const desc = userSettings?.description
      ? Image.renderText(
        fonts.LatoBold,
        16,
        userSettings.description,
        parseInt(mode.clanName, 16),
      )
      : undefined;
    if (desc) canvas.composite(desc, 600, 463);

    // CUSTOM BACKGROUND
    const backgroundURL = userSettings?.backgroundURL;
    if (backgroundURL) {
      const buffer = await fetch(backgroundURL).then((res) => res.arrayBuffer())
        .catch(() => undefined);
      // SET RIGHT IMAGE BACKGROUND
      if (buffer) {
        canvas.composite(await Image.decode(new Uint8Array(buffer)), 385, 50);
      } else canvas.composite(bg.blob.resize(40, 40), 385, 50);
    } else {
      canvas.composite(bg.blob.resize(500, 481), 345, 50)
        .composite(mode.rectangle, 2, 50);
    }
  } // SET LEFT COLOR BACKGROUND IF NOT DEFAULT WHITE
  else if (mode.id !== "white") {
    console.log("im in the else if ");
    canvas.composite(mode.rectangle, 2, 50);
    canvas.composite(bg.blob, 345, bg.vipNeeded ? 0 : 50);
  } else {
    console.log("im in the else");
    if (bgURL) {
      const buffer = await fetch(
        bgURL.replace(".gif", ".png").replace(".webp", ".png"),
      ).then((res) => res.arrayBuffer()).then((res) => new Uint8Array(res))
        .catch(() => undefined);
      if (buffer) {
        canvas.composite((await Image.decode(buffer)).cropCircle(), 345, 0);
      }
    } else {
      canvas.composite(bg.blob, 345, bg.vipNeeded ? 0 : 50);
    }
  }

  // CUSTOM BADGES FOR VIPS
  const badges = botCache.vipUserIDs.has(memberID)
    ? userSettings?.badges || []
    : [];
  if (badges.length) {
    for (let i = 0; i < 6; i++) {
      const badge = userSettings?.badges?.[i];
      if (!badge) continue;

      const buffer = await fetch(badge).then((res) => res.arrayBuffer()).catch(
        () => undefined,
      );
      if (!buffer) continue;

      // A custom badge is availble
      const x = i === 0
        ? 70
        : i === 1
        ? 145
        : i === 2
        ? 220
        : i === 3
        ? 295
        : i === 4
        ? 370
        : 445;
      canvas.composite((await Image.decode(buffer)).cropCircle(), x, 480);
    }
  } // NO BADGES DRAW EMPTY CIRCLES TO HINT USERS AT BADGES
  else {
    const badgeSpots = [70, 145, 220, 295, 370, 445];
    for (const spot of badgeSpots) {
      canvas.drawCircle(
        spot,
        480,
        27,
        parseInt(botCache.constants.themes.get("white")!.badgeFilling, 16),
      );
    }
  }

  // ADDS USER AVATAR
  const buffer = await fetch(
    member?.avatarURL.replace(".gif", ".png").replace(".webp", ".png"),
  ).then((res) => res.arrayBuffer()).then((res) => new Uint8Array(res))
    .catch(() => undefined);
  if (buffer) {
    canvas.composite(
      (await Image.decode(buffer)).resize(92, 92).cropCircle(),
      35,
      85,
    )
      .composite(profileBuffers.blueCircle, 30, 80);
  }

  // user name and discrimininator
  const username = member.tag.substring(0, member.tag.lastIndexOf("#"))
    .replace(
      /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
      ``,
    );
  const spouseUsername = spouse?.tag.replace(
    /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
    ``,
  );

  console.log(username, "username");
  // SET PROFILE USERNAME STUFF
  const name = Image.renderText(
    fonts.LatoBold,
    26,
    username,
    parseInt(`${mode.username}`, 16),
  );
  const discrim = Image.renderText(
    fonts.LatoBold,
    18,
    member.tag.substring(member.tag.lastIndexOf("#")),
    parseInt(`${mode.discriminator}`, 16),
  );
  const mlevel = Image.renderText(
    fonts.LatoHeavy,
    30,
    memberLevel.toString(),
    parseInt(`${mode.xpbarText}`, 16),
  );
  const glevel = Image.renderText(
    fonts.LatoHeavy,
    30,
    globalLevel.toString(),
    parseInt(`${mode.xpbarText}`, 16),
  );
  const mxp = Image.renderText(
    fonts.LatoBold,
    16,
    `${memberXP}/${serverLevelDetails.xpNeeded -
        previousServerLevelDetails?.xpNeeded || serverLevelDetails.xpNeeded}`,
    parseInt(
      `${sRatio > 0.6 ? mode.xpbarRatioUp : mode.xpbarRatioDown}`,
      16,
    ),
  );
  const gxpd = Image.renderText(
    fonts.LatoBold,
    16,
    `${globalXP}/${globalLevelDetails.xpNeeded -
      previousGlobalLevelDetails?.xpNeeded}`,
    parseInt(
      `${sRatio > 0.6 ? mode.xpbarRatioUp : mode.xpbarRatioDown}`,
      16,
    ),
  );

  canvas
    // DRAW XP BARS.
    .drawBox(45, 240, xpBarWidth, 30, parseInt(mode.xpbarFilling, 16))
    .drawBox(45, 310, xpBarWidth, 30, parseInt(mode.xpbarFilling, 16))
    .composite(mxp, 190, 245)
    .composite(gxpd, 190, 315)
    .drawBox(
      158,
      135,
      240,
      2,
      parseInt(botCache.constants.themes.get("white")!.userdivider, 16),
    );

  // DEFAULT STRINGS ARE PRE-CACHED if english and white color
  const xp = Image.renderText(
    fonts.LatoBold,
    20,
    translate(guildID, "strings:SERVER_XP"),
    parseInt(`${mode.xpbarText}`, 16),
  );
  const lvl = Image.renderText(
    fonts.LatoBold,
    20,
    translate(guildID, "strings:LEVEL"),
    parseInt(`${mode.xpbarText}`, 16),
  );
  const gxp = Image.renderText(
    fonts.LatoBold,
    20,
    translate(guildID, "strings:GLOBAL_XP"),
    parseInt(`${mode.xpbarText}`, 16),
  );

  canvas.composite(xp, 45, 205)
    .composite(lvl, 350, 215)
    .composite(gxp, 45, 280)
    .composite(lvl, 350, 280)
    .composite(profileBuffers.botLogo, 495, 410)
    .drawBox(
      590,
      425,
      250,
      90,
      useRGBA(botCache.constants.themes.get("white")!.clanRectFilling),
    );

  // IF MEMBER IS VIP FULL OVERRIDE
  let showMarriage = true;
  // VIP GUILDS CAN HIDE MARRIAGE
  if (botCache.vipGuildIDs.has(guildID) && settings?.hideMarriage) {
    showMarriage = false;
  }
  // VIP USERS SHOULD BE FULL OVVERIDE
  if (
    botCache.vipUserIDs.has(memberID) && userSettings?.showMarriage
  ) {
    showMarriage = true;
  }

  if (showMarriage) {
    const [spouseTxt, llvl] = await Promise.all([
      Image.renderText(
        fonts.LatoBold,
        20,
        translate(
          guildID,
          spouse ? "strings:MARRIED" : "strings:NOT_MARRIED",
          { username: spouseUsername || "" },
        ),
        parseInt(`${mode.xpbarText}`, 16),
      ),
      Image.renderText(
        fonts.LatoBold,
        16,
        `${loveCount}%`,
        parseInt(
          `${sRatio > 0.6 ? mode.xpbarRatioUp : mode.xpbarRatioDown}`,
          16,
        ),
      ),
    ]);

    // DRAW MARRIAGE BAR
    canvas
      .drawBox(45, 390, xpBarWidth, 30, parseInt(mode.xpbarFilling, 16))
      .composite(llvl, 190, 393)
      .composite(spouseTxt, 45, 365);
  }

  // // server xp bar filling
  // // The if checks solve a crucial bug in canvas DO NOT REMOVE.
  // // The global bar breaks and is always fill if u have server level 0 without the if checks
  // if (sProgress) {
  //   canvas
  //     .setShadowColor(`rgba(155, 222, 239, .5)`)
  //     .setShadowBlur(7)
  //     .printLinearGradient(45, 240, 45 + sProgress, 285, [
  //       { position: 0, color: `#5994f2` },
  //       { position: 0.25, color: `#8bccef` },
  //       { position: 0.5, color: `#9bdeef` },
  //       { position: 0.75, color: `#9befe7` }
  //     ])
  //     .addBeveledRect(45, 240, sProgress, 30, 25)
  // }
  

  // // global xp bar filling
  // if (gProgress) {
  //   canvas
  //     .setShadowColor(`rgba(155, 222, 239, .5)`)
  //     .setShadowBlur(7)
  //     .printLinearGradient(45, 310, 45 + gProgress, 395, [
  //       { position: 0, color: `#5994f2` },
  //       { position: 0.25, color: `#8bccef` },
  //       { position: 0.5, color: `#9bdeef` },
  //       { position: 0.75, color: `#9befe7` }
  //     ])
  //     .addBeveledRect(45, 310, gProgress, 30, 25)
  // }

  // // marriage love meter filling
  // if (mProgress) {
  //   canvas
  //     .printLinearGradient(45, 390, 45 + mProgress, 395, [
  //       { position: 0, color: `#ff9a8b` },
  //       { position: 0.25, color: `#ff8f88` },
  //       { position: 0.5, color: `#ff8386` },
  //       { position: 0.75, color: `#ff7786` }
  //     ])
  //     .addBeveledRect(45, 390, mProgress, 30, 25)
  // }

  canvas.composite(name, 160, 100)
    .composite(discrim, 160, 145)
    .composite(mlevel, 310, 205)
    .composite(glevel, 310, 270);
  return new Blob([await canvas.encode()], { type: "image/png" });
};

function rgba(r: number, g: number, b: number, a: number) {
  return (((r & 0xff) << 24) | ((g & 0xff) << 16) | ((b & 0xff) << 8) |
    (a & 0xff));
}

function useRGBA(rgbaString: string) {
  // @ts-ignore
  const { groups: { r, g, b, a } } =
    /rgba\((?<r>\d+),(?<g>\d+),(?<b>\d+),(?<a>\.?\d)\)/.exec(rgbaString);
  return rgba(+r, +g, +b, 255 * Number(a));
}
