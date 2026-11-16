//An object in js is a collection of related info organized into key valued pairs, 
// allowing us to represent an entity and it's behaviours within a single structure.

// let firstName = "Victory";
// let lastName = "Udonachi";
// let age = 19;
// let gender = "Male";

//We can group all the above info into a single object called employee
// let employee = {
//     firstName: "Victory",
//     lastName: "Udonachi",
//     age: 19,
//     gender: "Male"
// };
// console.log(employee);
// you can also access the values of an object using dot notation or bracket notation
// console.log(employee.firstName);
// console.log(employee["lastName"]);

//you cannot have duplicate keys in an object, if you do, the last key will overwrite the previous key
//for example, if we have an object called person with the following keys and values
// let person = {
//     name: "John",
//     age: 30,
//     name: "Jane"
// };
// console.log(person.name); // this will output "Jane" because the last key overwrote the previous key
//you can only have one key with the same name in an object, but you can have multiple keys with different names and values


//create an object for automobile
// let automobile = {
//     products: ["Benz", "Lamborghini", "Masserati", "Toyota"],
//     models: {
//         BenzModels: ["C-Class", "G-Class", "S-Class"],
//         // LamborghiniModels: ["Aventador", "Huracan", "Urus"],
//         // MasseratiModels: ["Ghibli", "Levante", "Quattroporte"],
//         // ToyotaModels: ["Camry", "Corolla", "Highlander"]
//     },
//     prices: {
//         BenzPrices: [40000, 50000, 60000],
//         // LamborghiniPrices: [200000, 250000, 300000],
//         // MasseratiPrices: [50000, 60000, 70000],
//         // ToyotaPrices: [25000, 30000, 35000]
//     },
//     colors: {
//         BenzColors: ["Black", "White", "Silver"],
//         // LamborghiniColors: ["Yellow", "Orange", "Green"],   
//         // MasseratiColors: ["Red", "Blue", "White"],
//         // ToyotaColors: ["Black", "White", "Gray"]
//     },
//     yearOfManufacture: {
//         BenzYear: [2018, 2019, 2020],
//         // LamborghiniYear: [2020, 2021, 2022],
//         // MasseratiYear: [2019, 2020, 2021],
//         // ToyotaYear: [2017, 2018, 2019]
//     },
//     // bodyType: {
//         // BenzBodyType: ["Sedan", "SUV", "Coupe"],
//         // LamborghiniBodyType: ["Coupe", "Roadster", "SUV"],
//         // MasseratiBodyType: ["Sedan", "SUV", "Coupe"],
//         // ToyotaBodyType: ["Sedan", "SUV", "Hatchback"]
//     }
// }
// console.log(automobile);
// console.log(automobile.products[0]);
// console.log(automobile.models.LamborghiniModels[2]);
// console.log(automobile["prices"]["MasseratiPrices"][0]);

//to add a new key and value to an object, you can use dot notation or bracket notation
// automobile.fuelType = {
//     BenzFuelType: ["Petrol", "Diesel", "Hybrid"],
//     LamborghiniFuelType: ["Petrol", "Electric"],
// }
// console.log(automobile);


//create an array of objects for 15 ecommerce products

let ecommerceProducts = [
    {
        productCategory: "Electronics",
        productType: "Smartphone",
        productName: "iPhone 17pro",
        productBrand: "Apple",
        productCondition: "New",
        productOs: "iOS",
        productColor: "Silver",
        productManufactureYear: 2025,
        productRating: 4.5,
        productStock: 100,
    },
    {
        productCategory: "Fashion",
        productType: "Sneakers",
        productName: "Nike Air Max",
        productBrand: "Nike",
        productCondition: "New",
        productOs: "None",
        productColor: "White",
        productManufactureYear: 2025,
        productRating: 4.7,
        productStock: 200,
    },
    {
        productCategory: "Home",
        productType: "Chair",
        productName: "Ergo Office Chair",
        productBrand: "Ikea",
        productCondition: "New",
        productOs: "None",
        productColor: "Black",
        productManufactureYear: 2024,
        productRating: 4.6,
        productStock: 75,
    },
    {
        productCategory: "Beauty",
        productType: "Perfume",
        productName: "Floral Essence",
        productBrand: "Dior",
        productCondition: "New",
        productOs: "None",
        productColor: "Rose Gold",
        productManufactureYear: 2025,
        productRating: 4.8,
        productStock: 150,
    },
    {
        productCategory: "Groceries",
        productType: "Rice",
        productName: "Royal Basmati Rice",
        productBrand: "Royal",
        productCondition: "Fresh",
        productOs: "None",
        productColor: "White",
        productManufactureYear: 2025,
        productRating: 4.5,
        productStock: 180,
    },
    {
        productCategory: "Sports",
        productType: "Football",
        productName: "Premier League Match Ball",
        productBrand: "Adidas",
        productCondition: "New",
        productOs: "None",
        productColor: "Black",
        productManufactureYear: 2025,
        productRating: 4.4,
        productStock: 90,
    },
    {
        productCategory: "Furniture",
        productType: "Bed",
        productName: "Queen Size Wooden Bed",
        productBrand: "Ashley",
        productCondition: "New",
        productOs: "None",
        productColor: "Walnut",
        productManufactureYear: 2024,
        productRating: 4.7,
        productStock: 40,
    },
    {
        productCategory: "Electronics",
        productType: "Laptop",
        productName: "Dell XPS 15",
        productBrand: "Dell",
        productCondition: "New",
        productOs: "Windows 11",
        productColor: "Silver",
        productManufactureYear: 2025,
        productRating: 4.7,
        productStock: 70,
    },
    {
        productCategory: "Fashion",
        productType: "Dress",
        productName: "Evening Silk Dress",
        productBrand: "H&M",
        productCondition: "New",
        productOs: "None",
        productColor: "Navy",
        productManufactureYear: 2025,
        productRating: 4.5,
        productStock: 120,
    },
    {
        productCategory: "Home",
        productType: "Lamp",
        productName: "Modern Table Lamp",
        productBrand: "Philips",
        productCondition: "New",
        productOs: "None",
        productColor: "Gold",
        productManufactureYear: 2024,
        productRating: 4.6,
        productStock: 110,
    },
    {
        productCategory: "Beauty",
        productType: "Skincare",
        productName: "Hydrating Face Serum",
        productBrand: "Neutrogena",
        productCondition: "New",
        productOs: "None",
        productColor: "Clear",
        productManufactureYear: 2025,
        productRating: 4.8,
        productStock: 170,
    },
    {
        productCategory: "Groceries",
        productType: "Coffee",
        productName: "Arabica Ground Coffee",
        productBrand: "Starbucks",
        productCondition: "Fresh",
        productOs: "None",
        productColor: "Brown",
        productManufactureYear: 2025,
        productRating: 4.6,
        productStock: 190,
    },
    {
        productCategory: "Sports",
        productType: "Yoga Mat",
        productName: "Premium Fitness Mat",
        productBrand: "Lululemon",
        productCondition: "New",
        productOs: "None",
        productColor: "Purple",
        productManufactureYear: 2025,
        productRating: 4.7,
        productStock: 130,
    },
    {
        productCategory: "Furniture",
        productType: "Sofa",
        productName: "3-Seater Velvet Sofa",
        productBrand: "IKEA",
        productCondition: "New",
        productOs: "None",
        productColor: "Gray",
        productManufactureYear: 2024,
        productRating: 4.8,
        productStock: 35,
    },
    {
        productCategory: "Electronics",
        productType: "Smartwatch",
        productName: "Apple Watch Series 10",
        productBrand: "Apple",
        productCondition: "New",
        productOs: "watchOS",
        productColor: "Graphite",
        productManufactureYear: 2025,
        productRating: 4.6,
        productStock: 80,
    }
];

console.log(ecommerceProducts[0]);