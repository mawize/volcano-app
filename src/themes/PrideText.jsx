export default function PrideText(props) {
  return props.text;
}

export function PrideTextWithDiv(props) {
  return <div>{<PrideText {...props} />}</div>;
}
