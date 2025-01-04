import Link from "next/link";

export default function Share() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share Meal</h1>
      <Link href="/meals">Back to Meals</Link>
    </main>
  );
}
