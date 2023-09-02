
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

const checkExpire = () => {
    const expireDate = new Date();
    const daysRemaining = Math.floor(expireDate - currentDate) / (1000 * 60 * 60 * 24);

    if (daysRemaining < 0) {
        const daysExpired = Math.abs(daysRemaining);
        return `${foodItem.name} is expired ${daysExpired} days ago.`;
    }else{
        return `You have ${daysUntilExpiration} days to use ${foodItem.name}.`;
    }

}



