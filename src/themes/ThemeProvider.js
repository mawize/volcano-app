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
  const property = parts.pop(); // Last part is the property
  const hasState = parts[parts.length - 1] === 'Active'; // Check for state (assuming 'Active' is the only state per hints)
  let components, state;

  if (hasState) {
    state = parts.pop(); // Remove state from components
    components = parts;
  } else {
    components = parts;
    state = null;
  }

  const checks = [];

  if (state) {
    // With state: Check from most specific to least specific, including secondary component if present
    if (components.length >= 2 && components[components.length - 1] === 'Slider') {
      // Handle secondary component (e.g., Slider)
      const secondary = components.pop();
      const mainComponent = components.pop();
      checks.push([mainComponent, secondary, state, property]); // e.g., ToggleButton.Slider.Active.borderColor
      if (components.length > 0) {
        checks.push([components[0], secondary, state, property]); // e.g., Button.Slider.Active.borderColor
      }
      checks.push([secondary, state, property]); // e.g., Slider.Active.borderColor
      checks.push([mainComponent, state, property]); // e.g., ToggleButton.Active.borderColor
      for (let i = components.length - 1; i >= 0; i--) {
        checks.push([components[i], state, property]); // Parent components with state
      }
      checks.push([state, property]); // State alone
      checks.push([mainComponent, secondary, property]); // With secondary, no state
      if (components.length > 0) {
        checks.push([components[0], secondary, property]);
      }
      checks.push([secondary, property]);
      checks.push([mainComponent, property]);
    } else {
      // No secondary component
      for (let i = components.length - 1; i >= 0; i--) {
        checks.push([components[i], state, property]); // e.g., PlusButton.Active.backgroundColor
      }
      checks.push([state, property]); // e.g., Active.backgroundColor
    }
    // Without state
    for (let i = components.length - 1; i >= 0; i--) {
      checks.push([components[i], property]);
    }
  } else {
    // No state: Check from most specific to least specific
    if (components.length >= 2 && components[components.length - 1] === 'Slider') {
      // Handle secondary component
      const secondary = components.pop();
      const mainComponent = components.pop();
      checks.push([mainComponent, secondary, property]); // e.g., ToggleButton.Slider.borderColor
      if (components.length > 0) {
        checks.push([components[0], secondary, property]); // e.g., Button.Slider.borderColor
      }
      checks.push([secondary, property]); // e.g., Slider.borderColor
      checks.push([mainComponent, property]); // e.g., ToggleButton.borderColor
    } else {
      // No secondary component
      for (let i = components.length - 1; i >= 0; i--) {
        checks.push([components[i], property]); // e.g., MinusButton.backgroundColor
      }
    }
  }
  checks.push([property]); // Final fallback

  // Perform checks
  for (const checkPath of checks) {
    const value = getNestedProperty(theme, checkPath);
    if (value !== undefined) {
      return value;
    }
  }
  return undefined; // If nothing is found
}

export default function GetTheme(type) {
  const theme = resolveTheme(type);
  theme.get = (path) => resolveProperty(theme, path);
  return theme;
}