export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export async function getProductById(PRODUCT_ID) {
  const response = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const data = await response.json();
  console.log(data);
  return data;
}