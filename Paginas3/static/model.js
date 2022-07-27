import DB from "./DBModel.js"
import ProductModel from "./productmodel.js"
export default class Model{
    constructor(){
        this.db = new DB();
        this.prods = this.db.getProducts()
    }
    getProduct(name){
       const found = this.prods.find(e => e.name == name.toLowerCase())
       if (found){
         return 1
       }
       else{return 0}
    }
}
