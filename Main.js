
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Phone", true),
    new Product(2, "Samsung S24", 22000000, 5, "Phone", true),
    new Product(3, "MacBook Pro", 45000000, 3, "Laptop", true),
    new Product(4, "Dell XPS 13", 38000000, 0, "Laptop", false),
    new Product(5, "AirPods Pro", 6000000, 15, "Accessories", true),
    new Product(6, "Logitech Mouse", 800000, 20, "Accessories", true)
];
//Mảng chỉ chứa name và price
const namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("Câu 3:", namePriceList);
//Sản phẩm còn hàng
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);
//Có sản phẩm giá trên 30 triệu?
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);
//Tất cả Accessories có đang bán?
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6:", allAccessoriesAvailable);
// Tổng giá trị kho
const totalInventoryValue = products.reduce((sum, p) => {
    return sum + (p.price * p.quantity);
}, 0);
console.log("Câu 7: Tổng giá trị kho =", totalInventoryValue);

//In Tên, Danh mục, Trạng thái
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}
//In tên thuộc tính và giá trị của 1 sản phẩm
console.log("Câu 9:");
for (const key in products[0]) {
    console.log(`Thuộc tính: ${key} | Giá trị: ${products[0][key]}`);
}

//Danh sách tên sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10:", availableAndInStockNames);
