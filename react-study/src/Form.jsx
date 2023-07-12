export default function Form() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("제출했어용");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <button>submit</button>
    </form>
  );
}
