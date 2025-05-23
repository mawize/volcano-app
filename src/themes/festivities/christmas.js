import { christmasId } from "../../constants/themeIds";

const christmas = {
  author: "ImACoderImACoderImACoder",
  themeId: christmasId,
  Button: { 
    backgroundColor: "#146B3A",
    Active: {
      textColor: "white",
      backgroundColor: "#BB2528",
      borderColor: "white",
    }
  },
  borderColor: "#BB2528",
  currentTemperatureColor: "#BB2528",
  targetTemperatureColor: "#146B3A",
  textColor: "white",
  PlusMinusButton: {
    borderColor: "#BB2528",
    backgroundColor: "#146B3A",
    textColor: "white",
  },
  backgroundColor: "black",
  iconColor: "#165B33",
  StartScreen: {
    textColor: "#165B33",
  },
  Navigation: { 
    textColor: "white", 
    borderColor: "#165B33",
  },
  temperatureRange: {
    background: `linear-gradient(
        -90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(187, 37, 40, 1) 20%,
        rgba(255, 255, 255, 1)30%,
        rgba(20, 107, 58, 1) 40%,
        rgba(187, 37, 40, 1) 50%,
        rgba(255, 255, 255, 1) 60%,
        rgba(20, 107, 58, 1) 70%,
        rgba(187, 37, 40, 1) 80%,
        rgba(255, 255, 255, 1) 90%,
        rgba(20, 107, 58, 1) 100%`,
    rangeBoxColor: "#146B3A",
    rangeBoxBorderColor: "#BB2528",
  },
  workflowEditor: {
    accordianExpandedColor: "#146B3A",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#146B3A",
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "beige",
      }
    },
    backgroundColor: "#BB2528",
    borderColor: "#146B3A",
    textColor: "white",
    Active: {
      backgroundColor: "#146B3A",
      borderColor: "#BB2528",
      textColor: "white",
    },
    backgroundImageOff:
      "repeating-linear-gradient(45deg, black,black 5px, crimson 5px, crimson 25px,forestgreen 25px,forestgreen 30px),repeating-linear-gradient(-45deg,black,black 5px,black 5px,black 35px,forestgreen 35px,forestgreen 42px);",
    backgroundImageColorOff: undefined,
    backgroundImageColorOn: undefined,
    backgroundImageOn: `
    repeating-linear-gradient(
		to top left,
		wheat 0,
		wheat 20px,
		transparent 20px,
		transparent 40px,
		forestgreen 40px,
		forestgreen 60px
	),
	repeating-linear-gradient(
		to left,
		crimson 0,
		crimson 20px,
		wheat 20px,
		wheat 40px,
		forestgreen 40px,
		forestgreen 60px
	)`,
    backgroundBlendModeOff: "screen",
    backgroundBlendModeOn: "multiply",
  },
};

export default christmas;
