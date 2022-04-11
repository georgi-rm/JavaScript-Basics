function pets(input) {
    const numberOfDays = Number(input[0]);
    const totalFood = Number(input[1]);
    const dogFoodPerDay = Number(input[2]);
    const catFoodPerDay = Number(input[3]);
    const turtleFoodPerDay = Number(input[4]);

    const foodEaten = (dogFoodPerDay + catFoodPerDay + turtleFoodPerDay / 1000) * numberOfDays;

    const foodDifference = Math.abs(totalFood - foodEaten);

    if (foodEaten > totalFood) {
        console.log(`${Math.ceil(foodDifference)} more kilos of food are needed.`);
    } else {
        console.log(`${Math.floor(foodDifference)} kilos of food left.`);
    }
}

pets([2, 10, 1, 1, 1200]);

pets([5, 10, 2.1, 0.8, 321]);