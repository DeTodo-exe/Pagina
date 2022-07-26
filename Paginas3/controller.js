import Model from "./model.js"
import ProductModel from "./productmodel.js"
export default class Controller{
  constructor(){
  this.model = new Model()
  this.fld = document.getElementById("searchfld")
  this.card = document.getElementsByClassName("card")[0]
  this.search = document.getElementById("main_search_button").addEventListener("click" , ()=> {
      const trigger = this.model.getProduct(this.fld.value)
      
    })
  
  }
  
}
