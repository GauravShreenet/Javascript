
// const food = [ 
//     {
//         name: "Beef",
//         currentDate: "2023-08-25"
//     },
    
//     {
//         name: "Milk",
//         currentDate: "2023-09-15"
//     }

// ]

// const checkExpire = (foodArray) => {
//     const currentDate = new Date();

//     for(let i = 0; i < foodArray.length; i++){
//         const foodItem = foodArray[i];
//         const expireDate = new Date(foodItem.currentDate);
//         const daysRemaining = Math.floor((expireDate - currentDate) / (1000 * 60 * 60 * 24));

//         if (daysRemaining < 0) {
//             const daysExpired = Math.abs(daysRemaining);
//             console.log(`${foodItem.name} is expired ${daysExpired} days ago.`);
//         }else{
//             console.log(`You have ${daysRemaining} days to use ${foodItem.name}.`);
//         }
//     }
    

// }

// checkExpire(food);

// const food1 = {
//     name: "Beef",
//     expireDate: "2023-09-15"
// }

// const food2 = {
//     name: "Milk",
//     expireDate: "2023-08-25"
// }

// const check = (food) => {
//     const currentDate = new Date();
//     const dateExpire = new Date(food.expireDate);
//     const daysRemaining = Math.floor((dateExpire - currentDate) / (1000 * 60 * 60 * 24));
//     console.log(daysRemaining);
//     if (daysRemaining < 0) {
//         const daysExpired = Math.abs(daysRemaining);
//         return `${food.name} is expired ${daysExpired} days ago`
//     }else{
//         return `You have ${daysRemaining} days to use ${food.name}.`
//     }
// }

// const data1 = check(food1);
// const data2 = check(food2);

// console.log(data1);
// console.log(data2);

// find the greatest number in a arry of randomnumber

// const num = []

// for(let i = 0; i < 10; i++){
//     num.push(Math.floor(Math.random()* 100) + 1);
// }

// console.log(num);

// let greatestValue = num[0]; 
// for(const numValue of num){
//     if (numValue > greatestValue) {
//         greatestValue = numValue;
//     }
// }
// console.log("the greatest number is: ", greatestValue);


//Given an array of objects, write a function that counts how many objects have a specific property or key.

const person = [
    {
        name: "John Parker",
        address: "Sydney",
        number: 614253665
    },
    {
        name: "John Parker",
        address: "Sydney",
        number: 614253665
    },
    {
        name: "John Parker",
        address: "Sydney",
        number: 614253665
    }
]

const countObjects = (arr, propertyName) => {
    let count = 0;

  for (const obj of arr) {
    if (obj.hasOwnProperty(propertyName)) {
      count++;
    }
  }

  return count;
}

const propertyToCount = "city";
const numberOfObjectsWithProperty = countObjects(arrayOfObjects, propertyToCount);

console.log(`Number of objects with the property "${propertyToCount}": ${numberOfObjectsWithProperty}`);
