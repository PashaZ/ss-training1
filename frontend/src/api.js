export async function getProducts() {
  const productResponse = await (
    await fetch("http://localhost:8080/api/products/")
  ).json();
  return productResponse;
}

export const getFilterProducts = async (value) => {
  const productResponseFilter = await (
    await fetch(`http://localhost:8080/api/products/?statusValue=${value}`)
  ).json();
  return productResponseFilter;
};
