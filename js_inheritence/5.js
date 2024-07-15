function Product(name, type, price, category) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.category = category;
}

function Inventory() {
    this.products = [];
}

Inventory.prototype.addProduct = function(product) {
    this.products.push(product);
    console.log(`Added ${product.name} to the inventory`);
    console.log(this.products); // Log the products array
}

Inventory.prototype.deleteProduct = function(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
        console.log(`Deleted ${this.products[index].name} from the inventory`);
        this.products.splice(index, 1);
    } else {
        console.log(`Product ${productName} not found in the inventory`);
    }
    console.log(this.products); // Log the products array
}

const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10); // Use the correct capitalization
const product2 = new Product('Book', 'Books', 20, 50); // Use the correct capitalization

inventory.addProduct(product1); // Added Laptop to the inventory.
inventory.addProduct(product2); // Added Book to the inventory.

inventory.deleteProduct('Laptop'); // Deleted Laptop from the inventory.
