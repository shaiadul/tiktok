export default async function getAllData() {
  const result = await fetch(
    "https://dummyjson.com/products"
  );

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }

  return result.json();
}
