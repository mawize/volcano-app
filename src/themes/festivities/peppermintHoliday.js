import { christmasPeppermintHolidayId } from "../../constants/themeIds";

const christmas = {
  author: "Princess Ariel",
  themeId: christmasPeppermintHolidayId,
  Button: { 
    backgroundColor: "#9E1F15",
    Active: {
      textColor: "white",
      backgroundColor: "#3C8123",
      borderColor: "white",
    }
  },
  borderColor: "white",
  CurrentTemperatureDisplay: {
    textColor: "#9E1F15",
  },
  TargetTemperatureDisplay: { 
    textColor: "#3C8123",
  },
  textColor: "white",
  PlusMinusButton: {
    borderColor: "white",
    backgroundColor: "#9E1F15",
    textColor: "white",
  },
  backgroundColor: "black",
  iconColor: "#3C8123",
  StartScreen: {
    textColor: "#3C8123",
  },
  Navigation: { 
    textColor: "white", 
    borderColor: "#3C8123",
  },
  TemperatureRange: {
    background: `linear-gradient(
        -90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(224, 48, 46, 1) 20%,
        rgba(255, 255, 255, 1)30%,
        rgba(60, 129, 35, 1) 40%,
        rgba(224, 48, 46, 1)50%,
        rgba(255, 255, 255, 1) 60%,
        rgba(60, 129, 35, 1) 70%,
        rgba(224, 48, 46, 1) 80%,
        rgba(255, 255, 255, 1) 90%,
        rgba(60, 129, 35, 1) 100%`,
    Slider: {      
      background: "#9E1F15",
      borderColor: "white",
      borderRadius: "2rem",
      borderWidth: "4px",
    }
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "black",
    Active: { 
      backgroundColor: "#146B3A",
    }
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#3C8123",
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "#9E1F15",
      }
    },
    backgroundColor: "#BB2528",
    borderColor: "#3C8123",
    textColor: "#9E1F15",
    backgroundImage:  ` repeating-linear-gradient(    45deg,    transparent,    transparent 10px,    #3C8123 10px,    #3C8123 20px  ),  /* on "bottom" */  linear-gradient(    to bottom,    #eee,    #999  )`,
    backgroundBlendMode: "multiply",
    Active: {
      backgroundColor: "#3C8123",
      borderColor: "#BB2528",
      textColor: "#3C8123",
      backgroundImage: ` repeating-linear-gradient(    315deg,    transparent,    transparent 10px,    #E0302E 10px,    #E0302E 20px  ),  /* on "bottom" */  linear-gradient(    to bottom,    #eee,    #999  )`,
      backgroundBlendMode: "multiply",
    }
  },
};

export default christmas;
