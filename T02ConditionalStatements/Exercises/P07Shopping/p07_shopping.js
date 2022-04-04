function shopping(input) {
    const budget = Number(input[0])
    const numberOfVideoCards = Number(input[1])
    const numberOfProcessors = Number(input[2])
    const numberOfRamMemories = Number(input[3])

    const priceOfVideoCard = 250;

    const sumOfVideoCards = numberOfVideoCards * priceOfVideoCard;

    const priceOfProcessors = 0.35 * sumOfVideoCards;
    const priceOfRamMemories = 0.1 * sumOfVideoCards;

    const sumOfProcessors = numberOfProcessors * priceOfProcessors;
    const sumOfRamMemories = numberOfRamMemories * priceOfRamMemories;

    let total = sumOfVideoCards + sumOfProcessors + sumOfRamMemories;

    if (numberOfVideoCards > numberOfProcessors) {
        total *= 0.85;
    }

    let moneyDifference = budget - total;

    if (moneyDifference >= 0) {
        console.log(`You have ${moneyDifference.toFixed(2)} leva left!`);
    } else {
        moneyDifference = Math.abs(moneyDifference);
        console.log(`Not enough money! You need ${moneyDifference.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1", "1"])