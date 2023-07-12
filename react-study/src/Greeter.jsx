export default function Greeter({ person = "everyone", from = "kim" }) {
  console.log(person);
  return (
    <div>
      <h1>Hi there!, {person}</h1>
      <h2>{from}</h2>
    </div>
  );
}
