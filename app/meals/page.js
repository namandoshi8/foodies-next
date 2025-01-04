import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals</h1>
      <Link href="/meals/share">Share Meal</Link>
    </main>
  );
}
