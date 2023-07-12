import ShoppingList from "./ShoppingList";
import ColorList from "./ColorList";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";
import Slots from "./Slots";
import PropertryList from "./PropertryList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ColorBoxes from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 5, completed: false },
  { id: 3, item: "candy", quantity: 2, completed: true },
  { id: 4, item: "books", quantity: 8, completed: false },
  { id: 5, item: "coffee", quantity: 5, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = ["pink", "teal", "red", "yello", "green", "blue", "skyblue"];

function App() {
  return (
    <div>
      {/* <Greeter person="mj" from="kim" />
      <Greeter />
      <Die numSides={20} />
      <Die numSides={4} />
      <ListPicker values={["apple", 1, "blue"]} />
      <DoubleDice />
      <Heading color="teal" text="오늘하루 덥다" fontSize="50px" />
      <ColorList colors={["pink", "teal", "skyblue"]} />
      <ColorList colors={["olive", "magenta", "yellow"]} />
      <Slots val1="🎈" val2="🎈" val3="🎈" />
      <Slots val1="🎈" val2="🎈" val3="🎐" />
      <ShoppingList items={data} />
      <PropertryList properties={properties} />
      <Form />
      <Clicker message="안녕!!!!!" buttonText="날 클릭해줘!!" />
      <Clicker message="그만 클릭해!!!" buttonText="날 클릭하지 말아줘!!" />
      <Counter />
      <Toggler /> */}
      {/* <ColorBoxes colors={colors} /> */}
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
