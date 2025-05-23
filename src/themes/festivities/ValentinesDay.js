import { valentinesDayId } from "../../constants/themeIds";

const buttonBackgroundColor = "#ed5eb3";

const valentinesDay = {
  author: "Princess Ariel",
  themeId: valentinesDayId,
  Button: { 
    backgroundColor: buttonBackgroundColor,
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
    sliderBackgroundColorOn: "gray",
    sliderBorderColorOn: "#f8f9fa",
    onBackgroundColor: "#bb27ff",
    onBorderColor: "#bb27ff",
    onColor: "#fff",
    offBackgroundColor: "#8d1b93",
    offBorderColor: "#8d1b93",
    offColor: "#fff",
  },
};

export default valentinesDay;
