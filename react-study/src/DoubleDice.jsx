export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 5) + 1;
  const num2 = Math.floor(Math.random() * 5) + 1;
  const isWinner = num1 === num2;
  const result = isWinner ? "이겼습니다" : "졌습니다. ";
  const styles = { color: isWinner ? "green" : "red" };
  return (
    <div>
      <p>{num1}</p>
      <p>{num2}</p>
      <p style={styles}>{result}</p>
    </div>
  );
}
