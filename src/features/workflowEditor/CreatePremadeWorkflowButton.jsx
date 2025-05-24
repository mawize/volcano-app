import { Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import PrideText from "../../themes/PrideText";

const StyledDropdownButton = styled(Dropdown.Toggle)`
  background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.backgroundColor")};
  color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.textColor")};
  border-radius: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderRadius")};;
  border-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderColor")};
  min-height: 50px;
  border-style: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderSyle")};
  &:active {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
  }
  &:hover {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
  }
  &:focus {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
    border-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.borderColor")};
  }
`;

const StyledDropDownMenuItem = styled(Dropdown.Item)`
  background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.backgroundColor")};
  color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.textColor")};
  border-radius: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderRadius")};;
  border-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderColor")};
  border-style: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderStyle")};
  &:active {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
  }
  &:hover {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
  }
  &:focus {
    background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.backgroundColor")};
    color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.textColor")};
    border-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.Active.borderColor")};
  }
`;

const StyledDropDownMenu = styled(Dropdown.Menu)`
  background-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.backgroundColor")};
  color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.textColor")};
  border-radius: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderRadius")};;
  border-color: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderColor")};
  border-style: ${(props) => props.theme.get("Button.SettingsButton.WorkflowEditorButton.borderStyle")};
  }
`;

const StyledDropdownDivider = styled(Dropdown.Divider)`
  background-color: ${(props) => props.theme.textColor};
`;

export default function CreatePremadeWorkflowButton(props) {
  const onClick = (eventKey) => {
    const id = parseInt(eventKey);
    const newWorkflow = props.premadeWorkflows.filter(
      (item) => item.id === id
    )[0];
    props.onClick(newWorkflow);
  };

  return (
    <Dropdown onSelect={onClick}>
      <StyledDropdownButton
        variant="none"
        id="create-premade-workflows-dropdown"
      >
        <PrideText text="Premade Workflows" />
      </StyledDropdownButton>

      <StyledDropDownMenu>
        {props.premadeWorkflows.map((premadeWorkflow, index) => {
          return (
            <Fragment key={premadeWorkflow.id}>
              <StyledDropDownMenuItem
                key={premadeWorkflow.id}
                eventKey={premadeWorkflow.id}
              >
                {<PrideText text={premadeWorkflow.name} />}
              </StyledDropDownMenuItem>
              {props.premadeWorkflows.length - 1 !== index && (
                <StyledDropdownDivider />
              )}
            </Fragment>
          );
        })}
      </StyledDropDownMenu>
    </Dropdown>
  );
}
