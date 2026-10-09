class Product {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    if (newPrice < 0) {
      console.log("Price cannot be negative!");
      return;
    }
    this.#price = newPrice;
  }
}

class Cart {
  #items = []; 

  addProduct(product) {
    this.#items.push(product);
  }

  showItems() {
    let total = 0;

    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      console.log(`${i + 1}. ${item.getName()} - $${item.getPrice()}`);
      total += item.getPrice();
    }

    console.log(`Total: $${total}`);
  }
}

const cart = new Cart();

const pen = new Product("Pen", 10);
const notebook = new Product("Notebook", 20);
const bag = new Product("Bag", 50);

cart.addProduct(pen);
cart.addProduct(notebook);
cart.addProduct(bag);

pen.setPrice(-10); 
pen.setPrice(10);  

cart.showItems();
