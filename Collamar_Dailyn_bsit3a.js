let storeName = "QuickMart";
let discountRate = 0.1;
let taxRate = 0.08;
let cartTotal = 0;
let itemCount = 0;
let isMember = true;
let currentDate = "11-10-2027";
let greeting = "Welcome";
let statusMessage = "";
let finalTotal = 0;

const storeLocation = "ALMAGRO";
const currency = "PHP";
const products = [
  { name: "Notebook", price: 50, qty: 3, category: "office" },
  { name: "Pen", price: 15, qty: 10, category: "office" },
  { name: "Laptop", price: 35000, qty: 1, category: "electronics" },
  { name: "Mouse", price: 300, qty: 2, category: "electronics" },
  { name: "Chair", price: 1200, qty: 1, category: "furniture" },
];
const memberInfo = { name: "Arrianha", tier: "gold", contact: { phone: "09923764206" } };
const guestInfo = { name: "Dailyn", tier: "guest", contact: null };
const numbersA = [10, 20, 30];
const numbersB = [40, 50, 60];
const extraItem = { name: "Gift Wrap", price: 20, qty: 1, category: "service" };
const taxLabel = "VAT";

const formatCurrency = (amount) => `${currency} ${amount.toFixed(2)}`;
const applyDiscount = (amount, rate) => amount - amount * rate;
const isExpensive = (product) => product.price > 1000;
const getSubtotal = (product) => product.price * product.qty;
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const allProducts = [...products, extraItem];
const combinedNumbers = [...numbersA, ...numbersB];

const memberWithDiscount = { ...memberInfo, discount: discountRate };
const guestWithDiscount = { ...guestInfo, discount: 0 };

const [firstNum, secondNum, thirdNum] = combinedNumbers;
const [firstProduct, secondProduct] = allProducts;
const [a, b, ...restNumbers] = numbersB;

const { name: memberName, tier, discount } = memberWithDiscount;
const { name: productName, price, qty } = allProducts[2];
const { contact: { phone } = {} } = memberInfo;

const productNames = allProducts.map((p) => capitalize(p.name));
const subtotals = allProducts.map((p) => getSubtotal(p));

const officeItems = allProducts.filter((p) => p.category === "office");
const expensiveItems = allProducts.filter((p) => isExpensive(p));

const memberPhone = memberInfo?.contact?.phone ?? "No phone on file";
const guestPhone = guestInfo?.contact?.phone ?? "No phone on file";

itemCount = allProducts.length;
cartTotal = subtotals.reduce((sum, s) => sum + s, 0);
finalTotal = isMember ? applyDiscount(cartTotal, discountRate) : cartTotal;
finalTotal = finalTotal + finalTotal * taxRate;
statusMessage = isMember ? "Member discount applied" : "No discount";

console.log(`${greeting} to ${storeName}, ${storeLocation}!`);
console.log(`Today's date: ${currentDate}`);
console.log(`Total items in cart: ${itemCount}`);
console.log(`Product list: ${productNames.join(", ")}`);
console.log(`Subtotals: ${subtotals.join(", ")}`);
console.log(`Office items: ${officeItems.map((p) => p.name).join(", ")}`);
console.log(`Expensive items: ${expensiveItems.map((p) => p.name).join(", ")}`);
console.log(`First 3 combined numbers: ${firstNum}, ${secondNum}, ${thirdNum}`);
console.log(`Rest of numbersB after destructure: ${restNumbers.join(", ")}`);
console.log(`${memberName} (${tier}) gets a discount of ${discount * 100}%`);
console.log(`Member phone: ${memberPhone}`);
console.log(`Guest phone: ${guestPhone}`);
console.log(`${statusMessage}. Cart total before tax/discount: ${formatCurrency(cartTotal)}`);
console.log(`Final total (with ${taxLabel} + discount applied): ${formatCurrency(finalTotal)}`);
console.log(`Sample product destructured: ${productName} - Qty: ${qty} - Price: ${formatCurrency(price)}`);
console.log(`First and second product in catalog: ${firstProduct.name}, ${secondProduct.name}`);