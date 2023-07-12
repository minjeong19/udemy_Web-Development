import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((i) => (
          <ShoppingListItem
            key={i.id}
            // item={i.item}
            // quantity={i.quantity}
            // completed={i.completed}
            {...i} // 한번에 가져올 수 있음
          />
        ))}
      </ul>
    </div>
  );
}
