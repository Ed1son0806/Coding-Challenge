//Task 1 - Object Properties
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);


//Task 2 - Object Methods
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};
order.displayOrder();


//Task 3 - Array Manipulation (push, pop, shift, unshift)
let cartItems = ["Laptop", "Headphones", "Smartphone"];

cartItems.push("Tablet");
cartItems.pop();
cartItems.unshift("Smartwatch");
cartItems.shift();

console.log(cartItems);


//Task 4 - Map Method
let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);


//Task 5 - Filter Method
let inventory = [5, 0, 12, 8, 0];
let availableStock = inventory.filter(quantity => quantity > 0);

console.log(availableStock);


//Task 6 - Reduce Method
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

console.log(totalRevenue);


//Task 7 - find() Method
let customers = ["Alice", "Bob", "Charlie", "David"];
let foundCustomer = customers.find(customer => customer === "Charlie");

console.log(foundCustomer);


//Task 8 - Function Declaration
function calculateTax(amount, taxRate) {
    let tax = amount * (taxRate / 100);  
    console.log(`The tax on $${amount} at a rate of ${taxRate}% is $${tax.toFixed(2)}`);  
}

calculateTax(100, 10);


//Task 9 - Function Expression
const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * (discount / 100));  
    console.log(`The discounted price is $${discountedPrice.toFixed(2)}`);
    return discountedPrice;
};

applyDiscount(200, 15);


//Task 10 - Arrow Function
const calculatePoints = purchaseAmount => {
    let points = Math.floor(purchaseAmount / 10);  
    console.log(`You earned ${points} points for spending $${purchaseAmount}.`);
    return points;
};

calculatePoints(150);