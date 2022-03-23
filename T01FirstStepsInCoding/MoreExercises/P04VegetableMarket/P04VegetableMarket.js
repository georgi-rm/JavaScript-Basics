function VegetableMarket(input) {
    let priceOfVegetables = Number(input[0]);
    let priceOfFruits = Number(input[1]);
    let quantityOfVegetables = Number(input[2]);
    let quantityOfFruits = Number(input[3]);

    let total = priceOfVegetables * quantityOfVegetables + priceOfFruits * quantityOfFruits;
    let totalInEuro = total / 1.94
    console.log(totalInEuro.toFixed(2));
}

VegetableMarket(["0.194", "19.4", "10", "10"])
VegetableMarket(["1.5", "2.5", "10", "10"])