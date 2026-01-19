import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">CatalogX</Link> |{" "}
      <Link href="/items">Items</Link> |{" "}
      <Link href="/add-item">Add Item</Link> |{" "}
      <Link href="/login">Login</Link>
    </nav>
  );
}
