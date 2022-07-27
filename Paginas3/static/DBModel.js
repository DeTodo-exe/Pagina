export default class DB {


  getProducts() {
  const products = [{name: "shadow seal", id: 1, price: 3500, discount: 0, category: "", stock: 10,routeImg: ".\templates\productsimg\shadow-seal.jpg", description: "larga duracion, a prueba de agua"},
  {name: "liquid brush", id: 2, price: 5000, discount: 0, category: "", stock: 4, routeImg: "", description: ""}]
  return products
}
}
