async function getItems() {
  const res = await fetch("http://localhost:5000/items", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <a href={`/items/${item.id}`}>
            <h3>{item.name}</h3>
          </a>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
