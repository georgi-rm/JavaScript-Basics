function dishwasher(input) {
    let index = 0;
    const countOfDetergentBottles = Number(input[index++]);

    const volumeOfDetergent = countOfDetergentBottles * 750;
    let detergentUsed = 0;
    let isDetergentFinished = false;

    let quantityOfPlates = 0;
    let quantityOfPots = 0;

    let command = input[index++];

    let countOfLoads = 0;

    while (command !== "End") {
        countOfLoads++;
        const quantityOfDishes = Number(command);

        if (countOfLoads % 3 == 0) {
            detergentUsed += quantityOfDishes * 15;
            quantityOfPots += quantityOfDishes;
        } else {
            detergentUsed += quantityOfDishes * 5;
            quantityOfPlates += quantityOfDishes;
        }

        if (detergentUsed > volumeOfDetergent) {
            isDetergentFinished = true;
            break;
        }
        command = input[index++];
    }

    const detergentDifference = Math.abs(volumeOfDetergent - detergentUsed);

    if (isDetergentFinished) {
        console.log(`Not enough detergent, ${detergentDifference} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!\n${quantityOfPlates} dishes and ${quantityOfPots} pots were washed.\nLeftover detergent ${detergentDifference} ml.`);
    }
}

dishwasher(["2", "53", "65", "55", "End"]);
console.log("-------------------------");
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);