export default function Clicker({ message, buttonText }) {
  const onMouseOver = () => {
    console.log("내 위에다가 마우스를 올려뒀군요!");
  };
  const onClick = () => {
    console.log("나를 클릭 했군요!");
  };
  const handleMessage = () => {
    alert(message);
  };
  return (
    <div>
      <p onMouseOver={onMouseOver}>Hello</p>
      <button onClick={onClick}>My name</button>
      <button onClick={handleMessage}>{buttonText}</button>
    </div>
  );
}
