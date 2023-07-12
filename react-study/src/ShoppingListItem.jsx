export default function ShoppingListItem({ id, item, quantity, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <div>
      <li key={id} style={styles}>
        {item} - {quantity}
      </li>
    </div>
  );
}
