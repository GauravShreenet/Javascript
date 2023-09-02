
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

const food1 = {
    name: "Beef",
    expireDate: "2023-09-15"
}

const food2 = {
    name: "Milk",
    expireDate: "2023-08-25"
}

const check = (food) => {
    const currentDate = new Date();
    const dateExpire = new Date(food.expireDate);
    const daysRemaining = Math.floor((dateExpire - currentDate) / (1000 * 60 * 60 * 24));
    console.log(daysRemaining);
    if (daysRemaining < 0) {
        const daysExpired = Math.abs(daysRemaining);
        return `${food.name} is expired ${daysExpired} days ago`
    }else{
        return `You have ${daysRemaining} days to use ${food.name}.`
    }
}

const data1 = check(food1);
const data2 = check(food2);

console.log(data1);
console.log(data2);
