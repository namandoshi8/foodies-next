import Link from "next/link";

export default function MealSlug({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Slug {slug}</h1>
      <Link href="/meals">Back to Meals</Link>
    </main>
  );
}
