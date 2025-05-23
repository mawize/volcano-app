import { autumnBId } from "../../../constants/themeIds";

const primaryColor = "#D35400";
const primaryLight = "#E59866";
const primaryDark = "#A04000";
const background = "#190808";
const autumnB = {
  author: "ImACoderImACoderImACoder/Autumn B.",
  themeId: autumnBId,
  Button: { 
    backgroundColor: primaryDark,
    Active: {
      textColor: primaryDark,
      backgroundColor: primaryLight,
    }
  },
  currentTemperatureColor: primaryLight,
  targetTemperatureColor: primaryDark,
  textColor: primaryLight,
  PlusMinusButton: {
    backgroundColor: primaryDark,
    textColor: primaryLight,
  },
  backgroundColor: background,
  iconColor: primaryColor,
  StartScreen: {
    textColor: primaryColor,
  },
  Navigation: { 
    textColor: primaryLight, 
    borderColor: primaryColor,
  },
  temperatureRange: {
    background: `linear-gradient(90deg, rgba(211,84,0,1) 20%, rgba(229,152,102,1) 57%, rgba(255,102,0,1) 87%, rgba(160,64,0,1) 100%)`,

    rangeBackground: `linear-gradient(45deg, #D35400, #E59866, #A04000)`,
    rangeBoxBorderColor: primaryLight,
  },
  workflowEditor: {
    accordianExpandedColor: "#146B3A",
  },
  ToggleButtons: {
    sliderBackgroundColorOn: primaryLight,
    sliderBackgroundColorOff: primaryDark,
    sliderBorderColorOff: primaryLight,
    sliderBorderColorOn: "#FFF",
    onBackgroundColor: primaryLight,
    onBorderColor: primaryLight,
    onColor: primaryDark,
    offBackgroundColor: primaryDark,
    offBorderColor: primaryLight,
    offColor: primaryLight,
  },
};

export default autumnB;
