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
  TargetTemperatureDisplay: {
    textColor: primaryDark,
  },
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
  TemperatureRange: {
    background: `linear-gradient(90deg, rgba(211,84,0,1) 20%, rgba(229,152,102,1) 57%, rgba(255,102,0,1) 87%, rgba(160,64,0,1) 100%)`,
    Slider: {
      background: `linear-gradient(45deg, #D35400, #E59866, #A04000)`,
      borderColor: primaryLight,
    }
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: background,
    Active: { 
      backgroundColor: "#146B3A",
    }
  },
  ToggleButton: {
    Slider: {
      backgroundColor: primaryDark,
      borderorderColor: primaryLight,
      Active: {
        backgroundColor: primaryLight,
        borderColor: "#FFF",
      }
    },
    backgroundColor: primaryDark,
    borderColor: primaryLight,
    textColor: primaryLight,
    Active: {
      backgroundColor: primaryLight,
      borderColor: primaryLight,
      textColor: primaryDark,
    }
  },
};

export default autumnB;
