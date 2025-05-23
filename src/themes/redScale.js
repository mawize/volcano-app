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
  currentTemperatureColor: "#d32f2f",
  borderColor: "#C0C0C0",
  backgroundColor: "black",
  textColor: "#f44336", // Brighter red for better visibility
  iconColor: "#f44336", // Updated to match primary font color
  Navigation: { 
    textColor: "#f44336", // Consistent with other icon colors 
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
  ToggleButtons: {
    sliderBackgroundColorOn: "#d32f2f",
    sliderBackgroundColorOff: "#B0B3B8",
    sliderBorderColorOn: "#f8f9fa",
    onBackgroundColor: "#d32f2f",
    onBorderColor: "white",
    onColor: "white",
    offBackgroundColor: "#242526",
    offBorderColor: "#C0C0C0",
    offColor: "#d32f2f",
  },
};

export default redscale;
