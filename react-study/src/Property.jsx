export default function Property({ id, name, rating, price }) {
  return (
    <div className="Property">
      <h1>{name}</h1>
      <h3>${price}</h3>
      <h3>{rating}✨</h3>
    </div>
  );
}
