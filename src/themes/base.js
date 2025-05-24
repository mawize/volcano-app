const base = () => {
  return {
    author: "ImACoderImACoderImACoder",
    borderStyle: "solid",
    borderColor: "darkgray",
    backgroundColor: "black",
    textColor: "antiquewhite",
    iconColor: "rebeccapurple",
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
    TemperatureDisplay: { 
      textColor: "antiquewhite",
    },
    StartScreen: {
      textColor: "rebeccapurple",
    },
    Navigation: { 
      textColor: "rebeccapurple",
      borderColor: "rebeccapurple",
    },
    PlusMinusButton: {
      backgroundColor: "black",
      textColor: "inherit",
      borderColor: "inherit",
    },
    TemperatureRange: {
      background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
      Slider: {
        background: "black",
        borderColor: "orange",
        borderRadius: "0.25rem",
        borderWidth: "3px",
      }
    },
    WorkflowEditorButton: {      
      borderRadius: "5px", 
      borderWidth: "2px",
    },
    WorkflowEditorAccordionButton: {
      backgroundColor: "black",
      Active: { 
        backgroundColor: "#D2D2D2",
      }
    },
    ToggleButton: {
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
      textColor: "#fff",
      backgroundImage: undefined,
      backgroundBlendMode: "unset",
      Slider: {
        backgroundColor: undefined,
        borderColor: "#f8f9fa",
        Active: {
          backgroundColor: "gray",
        }
      },
      Active: {
        backgroundColor: "#198754",
        borderColor: "#198754",
        textColor: "#fff",
        backgroundImage: undefined,
        backgroundBlendMode: "unset",
      }
    }
  };
};

export default base;
