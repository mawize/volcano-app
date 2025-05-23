const base = () => {
  return {
    author: "ImACoderImACoderImACoder",
    borderStyle: "solid",
    borderColor: "darkgray",
    SettingsButton: {
      borderRadius: "5px",
      borderWidth: "2px",
    },
    Button: { 
      borderRadius: "2rem",
      borderWidth: "0px", // 0.15rem
      backgroundColor: "black",
      Active: {
        textColor: "white",
        backgroundColor: "darkgray",
        borderColor: "antiquewhite",
      }
    },
    currentTemperatureColor: "antiquewhite",
    targetTemperatureColor: "antiquewhite",
    backgroundColor: "black",
    textColor: "antiquewhite",
    iconColor: "rebeccapurple",
    StartScreen: {
      textColor: "rebeccapurple",
    },
    Navigation: { 
      textColor: "rebeccapurple",
      borderColor: "rebeccapurple",
    },
    PlusMinusButton: {
      backgroundColor: "black",
      color: "inherit",
      borderColor: "inherit",
    },
    temperatureRange: {
      lowTemperatureColor: "#f53803",
      highTemperatureColor: "#f5d020",
      background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
      rangeBoxColor: "black",
      rangeBoxBorderColor: "orange",
      rangeBackground: undefined,
      rangeBoxBorderRadius: "0.25rem",
      rangeBoxBorderWidth: "3px",
    },
    workflowEditor: {
      accordianExpandedColor: "#D2D2D2",
    },
    ToggleButtons: {
      sliderColor: undefined,
      sliderBorderColor: "#f8f9fa",
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
      textColor: "#fff",
      Active: {
        sliderColor: "gray",
        backgroundColor: "#198754",
        borderColor: "#198754",
        textColor: "#fff",
      },
      backgroundImageOn: undefined,
      backgroundBlendModeOn: "unset",
      backgroundImageOff: undefined,
      backgroundBlendModeOff: "unset"
    },
  };
};

export default base;
