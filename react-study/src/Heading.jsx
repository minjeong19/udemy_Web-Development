export default function Heading({ color = "olive", text, fontSize }) {
  return <div style={{ color: color, fontSize: fontSize }}>{text}</div>;
}
