import { redScaleId } from "../constants/themeIds";

const redscale = {
  author: "ImACoderImACoderImACoder/ayebizz",
  themeId: redScaleId,
  Button: { 
    backgroundColor: "#242526",
    Active: {
      textColor: "white",
      backgroundColor: "#b71c1c", // Darkened red for active state
      borderColor: "white",
    }
  },
  CurrentTemperatureDisplay: {
    textColor: "#d32f2f"
  },
  borderColor: "#C0C0C0",
  backgroundColor: "black",
  textColor: "#f44336", // Brighter red for better visibility
  iconColor: "#f44336",
  StartScreen: {
    textColor: "#f44336",
  }, // Updated to match primary font color
  Navigation: { 
    textColor: "#f44336", // Consistent with other icon colors 
    borderColor: "#f44336"
  },
  temperatureRange: {
    background: "linear-gradient(315deg, #d32f2f 0%, #e57373 74%)", // Updated gradient for smoother transition
    rangeBoxColor: "#d32f2f",
    rangeBoxBorderColor: "#C0C0C0",
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "#d32f2f",
    borderColor: "#C0C0C0",
  },
  workflowEditor: {
    accordianExpandedColor: "#d32f2f",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#B0B3B8",
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "#d32f2f",
      }
    },
    backgroundColor: "#242526",
    borderColor: "#C0C0C0",
    textColor: "#d32f2f",
    Active: {
      backgroundColor: "#d32f2f",
      borderColor: "white",
      textColor: "white",
    }
  },
};

export default redscale;
