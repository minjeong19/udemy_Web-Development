export default function ListPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randElement = values[randIdx];

  return (
    <>
      <div>ListPicker = {values} </div>
      <p>{randElement}</p>
    </>
  );
}
