class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    getDetails(){
        return `name: ${this.name} and price ${this.price}`
    }
    applyDiscount(discount){
        return this.price - (this.price *(discount/100))
    }
}

let milk = new Product('Vanilla', 1000)
console.log(milk.getDetails())
console.log(milk.applyDiscount(20))