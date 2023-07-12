import "./Pocemon.css";

export default function Pocemon() {
  const pokeNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
  console.log(typeof pokeNum);
  return (
    <div className="Pocemon">
      <h1>Pocemon #{pokeNum}</h1>
      <img src={url} alt="poceImg" />
      {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`}
        alt="poceImg"
      /> */}
    </div>
  );
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
