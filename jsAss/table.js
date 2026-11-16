const products = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    category: "Electronics",
    brand: "HP",
    price: 650000,
    quantity: 12,
    rating: 4.5,
    sold: 35,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy A55",
    category: "Electronics",
    brand: "Samsung",
    price: 420000,
    quantity: 20,
    rating: 4.7,
    sold: 60,
    isAvailable: true,
  }
];

const headers = ["ID", "Name", "Category", "Brand", "Price", "Quantity", "Rating", "Sold", "Available"];

const rows = products.map((p) => [
  String(p.id),
  p.name,
  p.category,
  p.brand,
  String(p.price),
  String(p.quantity),
  String(p.rating),
  String(p.sold),
  p.isAvailable ? "Yes" : "No"
]);

const widths = headers.map((header, i) =>
  Math.max(header.length, ...rows.map(row => row[i].length))
);

const formatRow = (row) =>
  row.map((cell, i) => String(cell).padEnd(widths[i], " ")).join(" | ");

console.log(formatRow(headers));
console.log(widths.map(w => "-".repeat(w)).join("-+-"));
rows.forEach((row) => console.log(formatRow(row)));