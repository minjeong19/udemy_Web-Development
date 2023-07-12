// export default function Die({ numSides = 6 }) { 가져오는 값이 없으면 기본적으로 채워줌

export default function Die({ numSides }) {
  console.log(numSides);
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <h1>
      {numSides}-sided die Roll : {roll}
    </h1>
  );
}
