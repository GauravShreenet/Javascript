
const food = [ 
    {
        name: "Beef",
        currentDate: "2023-08-25"
    },
    
    {
        name: "Milk",
        currentDate: "2023-09-15"
    }

]

const checkExpire = (foodArray) => {
    const currentDate = new Date();

    for(let i = 0; i < foodArray.length; i++){
        const foodItem = foodArray[i];
        const expireDate = new Date(foodItem.currentDate);
        const daysRemaining = Math.floor((expireDate - currentDate) / (1000 * 60 * 60 * 24));

        if (daysRemaining < 0) {
            const daysExpired = Math.abs(daysRemaining);
            console.log(`${foodItem.name} is expired ${daysExpired} days ago.`);
        }else{
            console.log(`You have ${daysRemaining} days to use ${foodItem.name}.`);
        }
    }
    

}

checkExpire(food);


// console.log('hello world');
