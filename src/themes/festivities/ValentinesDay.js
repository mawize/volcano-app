import { valentinesDayId } from "../../constants/themeIds";

const buttonbackgroundColor = "#ed5eb3";

const valentinesDay = {
  author: "Princess Ariel",
  themeId: valentinesDayId,
  Button: { 
    backgroundColor: buttonbackgroundColor,
    Active: {
      textColor: "white",
      backgroundColor: "#7D1641",
      borderColor: "white",
    }
  },
  borderColor: "#ea379d",
  currentTemperatureColor: "#ed75b3",
  targetTemperatureColor: "#ed75b3",
  textColor: "white",
  PlusMinusButton: {
    backgroundColor: "#7D1641",
    textColor: "#ed75b3",
  },
  backgroundColor: "black",
  iconColor: "#671168",
  StartScreen: {
    textColor: "#671168",
  },
  Navigation: { 
    textColor: "#ed75b3", 
    borderColor: "#671168",
  },
  temperatureRange: {
    background: "linear-gradient(315deg, red 0%, #ff5d7a 74%)",
    rangeBoxColor: "#ea379d",
    rangeBoxBorderColor: "white",
  },
  workflowEditor: {
    accordianExpandedColor: "#ea379d",
  },
  ToggleButtons: {
    sliderColor: "gray",
    sliderBorderColor: "#f8f9fa",
    backgroundColor: "#8d1b93",
    borderColor: "#8d1b93",
    textColor: "#fff",
    Active: {
      backgroundColor: "#bb27ff",
      borderColor: "#bb27ff",
      textColor: "#fff",
    }
  },
};

export default valentinesDay;
