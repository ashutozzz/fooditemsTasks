const jsonData = [
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
  
  ];

  function listAllItems(){
    const foodItems = jsonData.map(item => item.foodname);
  
    // Logging the food items
    console.log(foodItems);
  }


  function listFoodItemsByCategory() {
    const vegetableItems = jsonData.filter(item => item.category === "Vegetable");
  
  // Extract food names from vegetable items and create a new array
  const vegetableFoodItems = vegetableItems.map(item => item.foodname);
  
  // Logging the vegetable food items
  console.log(vegetableFoodItems);
  }

  function listFruitFood(){
    const fruitItems = jsonData.filter(item => item.category === "Fruit");
  
    // Extract food names from fruit items and create a new array
    const fruitFoodItems = fruitItems.map(item => item.foodname);
    
    // Logging the fruit food items
    console.log(fruitFoodItems);
  }

  function listProteinFood(){

    const proteinItems = jsonData.filter(item => item.category === "Protein");
  
    // Extract food names from protein items and create a new array
    const proteinFoodItems = proteinItems.map(item => item.foodname);
    
    // Logging the protein food items
    console.log(proteinFoodItems);
    
  }

  function listNutsItems(){
    const nutItems = jsonData.filter(item => item.category === "Nuts");
  
    // Extract food names from nut items and create a new array
    const nutFoodItems = nutItems.map(item => item.foodname);
    
    // Logging the nut food items
    console.log(nutFoodItems);
  }

  function listGrainItems(){

    const grainItems = jsonData.filter(item => item.category === "Grain");
  
    // Extract food names from grain items and create a new array
    const grainFoodItems = grainItems.map(item => item.foodname);
    
    // Logging the grain food items
    console.log(grainFoodItems);
  }


  function listDairyItems(){
     // Filter the JSON data based on the category "Dairy"
  const dairyItems = jsonData.filter(item => item.category === "Dairy");
  
  // Extract food names from dairy items and create a new array
  const dairyFoodItems = dairyItems.map(item => item.foodname);
  
  // Logging the dairy food items
  console.log(dairyFoodItems);
  
  }


  function calorieAbove(){
    const highCalorieItems = jsonData.filter(item => item.calorie > 100);
  
  // Extract food names from high calorie items and create a new array
  const highCalorieFoodItems = highCalorieItems.map(item => item.foodname);
  
  // Logging the high calorie food items
  console.log(highCalorieFoodItems);
  }

  function calorieBelow(){
    const lowCalorieItems = jsonData.filter(item => item.calorie < 100);
  
    // Extract food names from low calorie items and create a new array
    const lowCalorieFoodItems = lowCalorieItems.map(item => item.foodname);
    
    // Logging the low calorie food items
    console.log(lowCalorieFoodItems);
    
  }


  function listSortedProtein(){
     // Sort the JSON data based on protein content in descending order
  const sortedByProtein = jsonData.sort((a, b) => b.protiens - a.protiens);
  
  // Extract food names from sorted data and create a new array
  const foodItemsByProtein = sortedByProtein.map(item => item.foodname);
  
  // Logging the food items by protein content
  console.log(foodItemsByProtein);
  
  }


  function listSortedCarbs(){

    // Sort the JSON data based on carbohydrate content in ascending order
  const sortedByCarbohydrate = jsonData.sort((a, b) => a.cab - b.cab);
  
  // Extract food names from sorted data and create a new array
  const foodItemsByCarbohydrate = sortedByCarbohydrate.map(item => item.foodname);
  
  // Logging the food items by carbohydrate content
  console.log(foodItemsByCarbohydrate);
  }

console.log('1. list all the food items')
console.log('2. list all the food items with category vegetables')
console.log('3. list all the food items with category fruit')
console.log('4. list all the food items with category protien')
console.log('5. list all the food items with category nuts')  
console.log('6. list all the food items with category grains')
console.log('7. list all the food items with category dairy')
console.log('8. list all the food items with calorie above 100')
console.log('9. list all the food items with calorie below 100')
console.log('10. list all the food items with highest protien content to lowest')
console.log('11. list all the food items with lowest cab content to highest \n');

const prompt = require("prompt-sync")();
let choice = prompt('enter your choice in numbers.');

switch(choice){
    case '1':
        listAllItems();
        break;
    
    case '2':
        listFoodItemsByCategory();
        break;

    case '3':
        listFruitFood();
        break;

    case '4':
        listProteinFood();
        break;

    case '5':
        listNutsItems();
        break;

    case '6':
        listGrainItems();
        break;

    case '7':
        listDairyItems();
        break;

    case '8':
        calorieAbove();
        break;

    case '9':
        calorieBelow();
        break;

    case '10':
        listSortedProtein();
        break;

    case '11':
        listSortedCarbs();
        break;

    default:
        console.log("Choice is not available");

}




