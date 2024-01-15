export default async function getData(id) {
    const result = await fetch(
        `https://dummyjson.com/products/${id}`
    );

    return result.json();
}