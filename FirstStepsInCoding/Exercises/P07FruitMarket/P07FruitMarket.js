function FruitMarket(input) {
    let priceOfStrawberies = Number(input[0]);
    let quantityOfBananas = Number(input[1]);
    let quantityOfOranges = Number(input[2]);
    let quantityOfRaspberies = Number(input[3]);
    let quantityOfStrawberies = Number(input[4]);

    let priceOfRaspberies = priceOfStrawberies / 2;
    let priceOfOranges = priceOfRaspberies * 0.6;
    let priceOfBananas = priceOfRaspberies * 0.2;

    let total = priceOfStrawberies * quantityOfStrawberies
        + priceOfRaspberies * quantityOfRaspberies
        + priceOfOranges * quantityOfOranges
        + priceOfBananas * quantityOfBananas;
    console.log(total);
}

FruitMarket(["48", "10", "3.3", "6.5", "1.7"])
FruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"])
