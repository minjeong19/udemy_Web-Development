import EmojiClcker from "./EmojiClcker";
import ScoreKeeper from "./ScoreKeeper";
import ScoreKeeper2 from "./ScoreKeeper2";

function App() {
  return (
    <div>
      {/* <ScoreKeeper />
      <EmojiClcker /> */}
      <ScoreKeeper2 numPlayers={10} target={5} />
    </div>
  );
}

export default App;
