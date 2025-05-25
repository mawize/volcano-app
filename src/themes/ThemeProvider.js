import * as themeIds from "../constants/themeIds";
import dark from "./dark";
import light from "./light";
import valentinesDay from "./festivities/ValentinesDay";
import flamingo from "./flamingo";
import base from "./base";
import merge from "lodash/merge";
import grayscale from "./grayScale";
import prideClassic from "./prideClassic";
import prideVibrant from "./prideVibrant";
import greenscale from "./greenScale";
import fun from "./fun";
import halloween from "./festivities/halloween";
import volcanicAsh from "./volcanicAsh";
import christmas from "./festivities/christmas";
import stPatricksDay from "./festivities/stPatricksDay/stPatricksDay";
import peppermintHoliday from "./festivities/peppermintHoliday";
import GetAutoThemeId from "../constants/themeDates";
import redscale from "./redScale";
import purplescale from "./purpleScale";
import autumnB from "./festivities/fall/autumnB";

const deepMergeWithBase = (theme) => merge(base(), { ...theme });

function resolveTheme(type) {
  switch (type) {
    case themeIds.darkThemeId:
      return deepMergeWithBase(dark);
    case themeIds.lightThemeId:
      return deepMergeWithBase(light);
    case themeIds.volcanicAshId:
      return deepMergeWithBase(volcanicAsh);
    case themeIds.valentinesDayId:
      return deepMergeWithBase(valentinesDay);
    case themeIds.flamingoId:
      return deepMergeWithBase(flamingo);
    case themeIds.grayscaleId:
      return deepMergeWithBase(grayscale);
    case themeIds.redScaleId:
      return deepMergeWithBase(redscale);
    case themeIds.purpleScaleId:
      return deepMergeWithBase(purplescale);
    case themeIds.greenscaleId:
      return deepMergeWithBase(greenscale);
    case themeIds.prideClassicId:
      return deepMergeWithBase(prideClassic);
    case themeIds.prideVibrantId:
      return deepMergeWithBase(prideVibrant);
    case themeIds.funId:
      return deepMergeWithBase(fun);
    case themeIds.halloweenId:
      return deepMergeWithBase(halloween);
    case themeIds.christmasId:
    case themeIds.christmasWithoutSnowId:
      return deepMergeWithBase(christmas);
    case themeIds.christmasPeppermintHolidayId:
      return deepMergeWithBase(peppermintHoliday);
    case themeIds.aSuperSpecialAutoThemeSettingsId:
      return GetTheme(GetAutoThemeId());
    case themeIds.feastOfSaintPatrickId:
      return deepMergeWithBase(stPatricksDay);
    case themeIds.autumnBId:
      return deepMergeWithBase(autumnB);
    default: {
      return GetTheme(GetAutoThemeId());
    }
  }
}

const states = ["Active"];
const secondary_components = ["Slider"];

function getNestedProperty(theme, path) {
  let current = theme;
  for (const part of path) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

function resolveProperty(theme, path) {
  const parts = path.split('.');
  if (parts.length === 1) {
    return theme[path];
  } else if (path === "") {
    return undefined;
  }

  const property = parts.pop();
  let state = null;
  let secondary_component = null;

  if (parts.length > 0 && states.includes(parts[parts.length - 1])) {
    state = parts.pop();
  }

  if (parts.length > 0 && secondary_components.includes(parts[parts.length - 1])) {
    secondary_component = parts.pop();
  }

  const components = parts;
  const keysToCheck = [];

  if (secondary_component && state) {
    for (let i = components.length - 1; i >= 0; i--) {
      keysToCheck.push([components[i], secondary_component, state, property]);
    }
    keysToCheck.push([secondary_component, state, property]);
  }

  if(secondary_component) {    
    for (let i = components.length - 1; i >= 0; i--) {
      keysToCheck.push([components[i], secondary_component, property]);
    }
    keysToCheck.push([secondary_component, property]);
  }

  if (state) {
    for (let i = components.length - 1; i >= 0; i--) {
      keysToCheck.push([components[i], state, property]);
    }
    keysToCheck.push([state, property]);
  }

  for (let i = components.length - 1; i >= 0; i--) {
    keysToCheck.push([components[i], property]);
  }
  keysToCheck.push([property]);

  for (const key of keysToCheck) {
    const value = getNestedProperty(theme, key);
    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
}

export default function GetTheme(type) {
  const theme = resolveTheme(type);
  theme.get = (path) => resolveProperty(theme, path);
  return theme;
}