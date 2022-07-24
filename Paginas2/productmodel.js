export class ProductModel{
    
    constructor(id,name,price,discount,category,stock,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.category = category;
        this.stock = stock;
        this.description = description;
    }
    getId(){return this.id}
    getName(){return this.name}
    getPrice(){return this.price}
    getDiscount(){return this.discount}
    getCategory(){return this.category}
    getStock(){return this.stock}
    getDescription(){return this.description}
}
