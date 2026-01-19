"use client";

export default function AddItem() {
  const addItem = async () => {
    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now().toString(),
        name: "New Product",
        description: "Product description",
        price: 50,
      }),
    });

    alert("Item added successfully!");
  };

  return (
    <div>
      <h1>Add Item</h1>
      <button onClick={addItem}>Add</button>
    </div>
  );
}
