export class DB {
  costructor(){
  this.products = {name: "shadow seal", props: {id: 1, price: 3500, discount: 0, category: "", stock: 10, description: "larga duracion, a prueba de agua"},
                   name: "liquid brush", props: {id: 2, price: 5000, discount: 0, category: "", stock: 4, description: ""},
                   
        }
  
  }
  getProducts() {return this.products}
}
