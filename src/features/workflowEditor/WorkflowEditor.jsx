import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import WorkflowItemEditor from "./WorkflowItemEditor";
import CreateWorkflowButton from "./CreateWorkflowButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteWorkflowButton from "./DeleteWorkflowButton";
import CreateWorkflowItemButton from "./CreateWorkflowItemButton";
import WorkflowNameEditor from "./WorkflowNameEditor";
import Div from "../shared/styledComponents/RootNonAppOutletDiv";
import WorkflowConfigEdtior from "./WorkflowConfigEditor.jsx/WorkflowConfigEditor";
import AppendWorkflowConfigJson from "./WorkflowConfigEditor.jsx/AppendWorkflowConfigJson";
import Drag from "./DND/Drag";
import WorkflowDrop from "./DND/WorkflowDrop";
import WorkflowTips from "./WorkflowTips";
import PrideText from "../../themes/PrideText";
import Container from "react-bootstrap/Container";
import CreatePremadeWorkflowButtonContainer from "./CreatePremadeWorkflowButtonContainer";

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const WorkflowDiv = styled.div``;

const StyledAccordionHeader = styled(Accordion.Header)`
  .accordion-button {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
  .accordion-button:not(.collapsed) {
    color: ${(props) => props.theme.buttonActive.color};
    background-color: ${(props) =>
      props.theme.workflowEditor.accordianExpandedColor};
    border-color: ${(props) => props.theme.buttonActive.borderColor};
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${(
      props
    ) =>
      props.theme.backgroundColor.replace(
        "#",
        "%23"
      )}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  }

  .accordion-button::after {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${(
      props
    ) =>
      props.theme.iconColor.replace(
        "#",
        "%23"
      )}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  }
`;

const WorkflowButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AccordionItemWrapper = styled(Accordion.Item)`
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
`;

export default function WorkflowEditor() {
  const [currentAccordionId, setCurrentAccordionId] = useState("0");

  const workflows = useSelector(
    (state) => state.settings.config.workflows.items
  );
  const currentWorkflow = useSelector(
    (state) => state.workflow.currentWorkflow
  );
  const currentWorkflowStepId = useSelector(
    (state) => state.workflow.currentWorkflowStepId
  );
  let currentWorkflowProgress = parseInt(
    (currentWorkflowStepId / currentWorkflow?.payload.length) * 100
  );

  if (isNaN(currentWorkflowProgress)) {
    currentWorkflowProgress = 0;
  }

  const workflowTestData = [...workflows];
  const onClick = (e) => {
    if (e === currentAccordionId) {
      setCurrentAccordionId(0);
    } else {
      setCurrentAccordionId(e);
    }
  };
  const onCreateWorkflow = (id) => {
    setCurrentAccordionId(`${id}`);
  };

  const workflowAccordions = workflowTestData.map((item, index) => {
    return (
      <div key={item.id}>
        <AccordionItemWrapper eventKey={`${item.id}`}>
          <StyledAccordionHeader onClick={() => onClick(`${item.id}`)}>
            <Drag
              onDrag={() => currentAccordionId > 0 && setCurrentAccordionId(0)}
              isSelected={item.id.toString() === currentAccordionId}
              key={item.id + index + item.name}
              itemId={item.id}
              itemName={item.name}
            >
              {<PrideText text={item.name} />}
            </Drag>
          </StyledAccordionHeader>
          <StyledAccordionBody>
            <WorkflowDiv>
              <WorkflowNameEditor workflowId={item.id} name={item.name} />
            </WorkflowDiv>
            {item.payload.map((workflowItem, index) => {
              return (
                <WorkflowDiv key={index}>
                  <WorkflowItemEditor
                    key={`${workflowItem.id}${index}`}
                    item={workflowItem}
                    workflowId={item.id}
                    itemIndex={index}
                    addDropZoneToTop={index === 0}
                  />
                </WorkflowDiv>
              );
            })}
            <WorkflowButtonsDiv>
              <CreateWorkflowItemButton id={item.id} />
              <DeleteWorkflowButton id={item.id} name={item.name} />
            </WorkflowButtonsDiv>
          </StyledAccordionBody>
        </AccordionItemWrapper>
        <WorkflowDrop key={item.id} itemId={item.id} />
      </div>
    );
  });

  return (
    <Div>
      <h1>
        <PrideText text="Workflow Editor" />
      </h1>
      <div style={{ display: "flex" }}>
        <WorkflowDrop itemId={0} />
      </div>
      <Accordion activeKey={currentAccordionId}>{workflowAccordions}</Accordion>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <CreateWorkflowButton onClick={onCreateWorkflow} />
        <CreatePremadeWorkflowButtonContainer />
      </div>
      <Container></Container>
      <div style={{ marginTop: "20px" }}>
        <WorkflowTips />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          <PrideText text="Config Editor" />
        </h2>
        {
          "Use this to backup existing workflows. Just save the text somewhere and you can paste it back in anytime. You can also add someone else's workflows to your workflows by pasting in the append workflow JSON modal"
        }
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <WorkflowConfigEdtior />
          <AppendWorkflowConfigJson />
        </div>
      </div>
    </Div>
  );
}
