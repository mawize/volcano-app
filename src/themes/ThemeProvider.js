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

function resolveProperty(theme, path) {
  const parts = path.split('.');
  const last = parts[parts.length - 1];
  const secondToLast = parts[parts.length - 2];
  const states = ['Active', 'Slider', 'Focus', 'Pressed', 'Hover'];
  
  let components, state, property;
  
  if (parts.length >= 2 && states.includes(secondToLast)) {
    state = secondToLast;
    property = last;
    components = parts.slice(0, -2);
  } else {
    state = null;
    property = last;
    components = parts.slice(0, -1);
  }
  
  const compsReversed = components.slice().reverse();
  
  if (state) {
    for (let i = 0; i < compsReversed.length - 1; i++) {
      for (let j = i + 1; j <= compsReversed.length; j++) {
        const nestedPath = compsReversed.slice(i, j).reverse().join('.');
        let current = theme;
        for (const part of nestedPath.split('.')) {
          if (current[part]) {
            current = current[part];
          } else {
            current = null;
            break;
          }
        }
        if (current && current[state] && current[state][property] !== undefined) {
          return current[state][property];
        }
      }
    }
    
    for (const comp of compsReversed) {
      if (theme[comp] && theme[comp][state] && theme[comp][state][property] !== undefined) {
        return theme[comp][state][property];
      }
    }
    
    if (theme[state] && theme[state][property] !== undefined) {
      return theme[state][property];
    }
  }
  
  for (const comp of compsReversed) {
    if (theme[comp] && theme[comp][property] !== undefined) {
      return theme[comp][property];
    }
  }
  
  return theme[property];
}

export default function GetTheme(type) {
  const theme = resolveTheme(type);
  theme.get = (path) => resolveProperty(theme, path);
  return theme;
}