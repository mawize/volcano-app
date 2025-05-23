import { volcanicAshId } from "../constants/themeIds";

const volcanicAsh = {
  themeId: volcanicAshId,
  author: "ImACoderImACoderImACoder",
  borderStyle: "solid",
  borderColor: "#FF6600",
  Button: { 
    backgroundColor: "#242526" ,
    Active: {
      textColor: "white",
      backgroundColor: "#FF6600",
      borderColor: "white",
    },
  },
  currentTemperatureColor: "#FF6600",
  targetTemperatureColor: "white",
  backgroundColor: "black",
  textColor: "white",
  iconColor: "#FF6600",
  Navigation: { 
    textColor: "white", 
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "white",
    borderColor: "FF6600",
  },
  workflowEditor: {
    accordianExpandedColor: "#FF6600",
  },
  temperatureRange: {
    lowTemperatureColor: "#f53803",
    highTemperatureColor: "#f5d020",
    background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
    rangeBoxColor: "black",
    rangeBoxBorderColor: "orange",
  },
  ToggleButtons: {
    sliderBackgroundColorOn: "#FF6600",
    sliderBackgroundColorOff: "#242526",
    sliderBorderColorOn: "#f8f9fa",
    onBackgroundColor: "#FF6600",
    onBorderColor: "white",
    onColor: "#fff",
    offBackgroundColor: "#242526",
    offBorderColor: "#FF6600",
    offColor: "#fff",
  },
};

export default volcanicAsh;
