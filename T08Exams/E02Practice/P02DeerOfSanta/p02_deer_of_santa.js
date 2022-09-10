function deerOfSanta(input) {
    const daysMissing = Number(input[0]);
    const quantityOfFood = Number(input[1]);
    const foodDeerOne = Number(input[2]);
    const foodDeerTwo = Number(input[3]);
    const foodDeerThree = Number(input[4]);

    const foodNeeded = (foodDeerOne + foodDeerTwo + foodDeerThree) * daysMissing;

    let foodDifference = quantityOfFood - foodNeeded;
    if (foodDifference >= 0) {
        console.log(`${Math.floor(foodDifference)} kilos of food left.`);
    } else {
        foodDifference = Math.abs(foodDifference);
        console.log(`${Math.ceil(foodDifference)} more kilos of food are needed.`);
    }
}

deerOfSanta(["2", "10", "1", "1", "2"]);
console.log("-------------------------");
deerOfSanta(["5", "10", "2.1", "0.8", "11"]);
