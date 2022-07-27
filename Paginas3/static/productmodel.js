export default class ProductModel{
    
    constructor(id,name,price,discount,category,stock,routeImg,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.category = category;
        this.stock = stock;
        this.routeImg = routeImg;
        this.description = description;
    }
    getId(){return this.id}
    getName(){return this.name}
    getPrice(){return this.price}
    getDiscount(){return this.discount}
    getCategory(){return this.category}
    getStock(){return this.stock}
    getRoute(){return this.routeImg}
    getDescription(){return this.description}
}
