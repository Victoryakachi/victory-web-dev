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
  },
  {
    id: 3,
    name: "Apple iPhone 14",
    category: "Electronics",
    brand: "Apple",
    price: 950000,
    quantity: 8,
    rating: 4.9,
    sold: 45,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Dell Inspiron Laptop",
    category: "Electronics",
    brand: "Dell",
    price: 580000,
    quantity: 15,
    rating: 4.4,
    sold: 25,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Sony Bluetooth Speaker",
    category: "Electronics",
    brand: "Sony",
    price: 85000,
    quantity: 30,
    rating: 4.6,
    sold: 85,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Nike Air Max Sneakers",
    category: "Fashion",
    brand: "Nike",
    price: 120000,
    quantity: 25,
    rating: 4.5,
    sold: 70,
    isAvailable: true,
  },
  {
    id: 7,
    name: "Adidas Running Shoes",
    category: "Fashion",
    brand: "Adidas",
    price: 95000,
    quantity: 18,
    rating: 4.3,
    sold: 55,
    isAvailable: true,
  },
  {
    id: 8,
    name: "Men's Leather Jacket",
    category: "Fashion",
    brand: "Zara",
    price: 78000,
    quantity: 10,
    rating: 4.2,
    sold: 30,
    isAvailable: true,
  },
  {
    id: 9,
    name: "Women's Handbag",
    category: "Fashion",
    brand: "Gucci",
    price: 250000,
    quantity: 6,
    rating: 4.8,
    sold: 15,
    isAvailable: true,
  },
  {
    id: 10,
    name: "Cotton T-Shirt",
    category: "Fashion",
    brand: "H&M",
    price: 15000,
    quantity: 50,
    rating: 4.1,
    sold: 120,
    isAvailable: true,
  },
  {
    id: 11,
    name: "LG Smart Television",
    category: "Home Appliances",
    brand: "LG",
    price: 720000,
    quantity: 7,
    rating: 4.7,
    sold: 22,
    isAvailable: true,
  },
  {
    id: 12,
    name: "Samsung Refrigerator",
    category: "Home Appliances",
    brand: "Samsung",
    price: 850000,
    quantity: 5,
    rating: 4.6,
    sold: 18,
    isAvailable: true,
  },
  {
    id: 13,
    name: "Hisense Washing Machine",
    category: "Home Appliances",
    brand: "Hisense",
    price: 450000,
    quantity: 9,
    rating: 4.4,
    sold: 27,
    isAvailable: true,
  },
  {
    id: 14,
    name: "Binatone Electric Blender",
    category: "Home Appliances",
    brand: "Binatone",
    price: 45000,
    quantity: 35,
    rating: 4.2,
    sold: 90,
    isAvailable: true,
  },
  {
    id: 15,
    name: "Panasonic Microwave",
    category: "Home Appliances",
    brand: "Panasonic",
    price: 180000,
    quantity: 0,
    rating: 4.5,
    sold: 40,
    isAvailable: false,
  },
  {
    id: 16,
    name: "Executive Office Chair",
    category: "Furniture",
    brand: "IKEA",
    price: 175000,
    quantity: 14,
    rating: 4.6,
    sold: 32,
    isAvailable: true,
  },
  {
    id: 17,
    name: "Wooden Study Table",
    category: "Furniture",
    brand: "IKEA",
    price: 95000,
    quantity: 11,
    rating: 4.3,
    sold: 28,
    isAvailable: true,
  },
  {
    id: 18,
    name: "Three-Seater Sofa",
    category: "Furniture",
    brand: "Ashley",
    price: 680000,
    quantity: 4,
    rating: 4.8,
    sold: 12,
    isAvailable: true,
  },
  {
    id: 19,
    name: "Bookshelf Cabinet",
    category: "Furniture",
    brand: "IKEA",
    price: 85000,
    quantity: 16,
    rating: 4.2,
    sold: 38,
    isAvailable: true,
  },
  {
    id: 20,
    name: "Dining Table Set",
    category: "Furniture",
    brand: "Ashley",
    price: 520000,
    quantity: 0,
    rating: 4.7,
    sold: 14,
    isAvailable: false,
  },
  {
    id: 21,
    name: "Golden Penny Spaghetti",
    category: "Groceries",
    brand: "Golden Penny",
    price: 1500,
    quantity: 120,
    rating: 4.4,
    sold: 350,
    isAvailable: true,
  },
  {
    id: 22,
    name: "Dangote Sugar 1kg",
    category: "Groceries",
    brand: "Dangote",
    price: 2500,
    quantity: 100,
    rating: 4.5,
    sold: 280,
    isAvailable: true,
  },
  {
    id: 23,
    name: "Peak Milk Powder",
    category: "Groceries",
    brand: "Peak",
    price: 6500,
    quantity: 80,
    rating: 4.6,
    sold: 220,
    isAvailable: true,
  },
  {
    id: 24,
    name: "Indomie Noodles Carton",
    category: "Groceries",
    brand: "Indomie",
    price: 12500,
    quantity: 65,
    rating: 4.7,
    sold: 310,
    isAvailable: true,
  },
  {
    id: 25,
    name: "Power Vegetable Oil 5L",
    category: "Groceries",
    brand: "Power Oil",
    price: 18000,
    quantity: 40,
    rating: 4.3,
    sold: 150,
    isAvailable: true,
  },
];
// console.table(products);

// console.log("ID | Name | Category | Brand | Price | Quantity | Rating | Sold | Available");

// for (let i = 0; i < products.length; i++) {
//   const p = products[i];
//   console.log(
//     `${p.id} | ${p.name} | ${p.category} | ${p.brand} | ${p.price} | ${p.quantity} | ${p.rating} | ${p.sold} | ${p.isAvailable}`
//   );
// }

// const person = {
//     name: 'Victory',
//     age: 12,
//     gender: 'male',
//     skills: ["HTML5", "CSS3", "JS"],
// }

// to check if an object exists in an key
// console.log("age" in person)

// to write out the keys in an object
// console.log(Object.keys(person))

// console.log(Object.values(person)[3][0])
// console.log(Object.entries(person)) //this converts objects to array
// const result = Object.entries(person) //this converts objects to array
// console.log(result)
// let newResult = Object.fromEntries(result) //this converts array to object
// console.log(newResult)

// //to add new objects to array
// const additionalDetails = {
//     salary: 500,
//     car: `tesla`,
// }
// Object.assign(person, additionalDetails);
// // console.log(person)

// Object.freeze(person); //you can use this to freeze
// person.address = 'plaza';
// person.email = 'vic@gmail.com';
// person.password = "pass123";
// console.log(Object.isFrozen(person)) //to check if a key is frozen
// console.log(person)
// console.log(Object.hasOwn(person, "firstName")) //to check if a key has an object

//Destructuring
// const {email, password} = person;
// console.log(email)
// console.log(password)

//find the top five best selling products

const topFiveBestSellingProducts = () =>{
  const results = products.sort((a,b) => b.sold - a.sold);
  const outcomes = results.slice(0,5);

  outcomes.forEach((outcome, index) => {
    // console.log(`${index + 1}. ${outcome.name} - ${outcome.sold} units`);
  });
};

topFiveBestSellingProducts();

//find a product that belongs to a particular category;
const findProductByCategory = (category)=>{
	return products.filter((product) =>{
		return product.category.toLowerCase() === category.toLowerCase();
	});
};

// console.log(findProductByCategory("Fashion"));

const findProductByPriceRange = (minPrice, maxPrice, category) => {
	return products.filter((product) => {
		return product.price >= minPrice && product.price <= maxPrice && product.category === category;
	});
};

console.log(findProductByPriceRange(50000, 10000000, "Home Appliances"));