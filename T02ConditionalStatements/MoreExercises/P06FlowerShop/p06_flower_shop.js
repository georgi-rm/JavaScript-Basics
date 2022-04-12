function flowerShop(input) {
    const quantityMagnolias = Number(input[0]);
    const quantityHyacinth = Number(input[1]);
    const quantityRouses = Number(input[2]);
    const quantityCactus = Number(input[3]);
    const giftPrice = Number(input[4]);

    let money = quantityMagnolias * 3.25 + quantityHyacinth * 4 +
        quantityRouses * 3.50 + quantityCactus * 8;

    money *= 0.95;

    const moneyDifference = Math.abs(giftPrice - money);

    if (money >= giftPrice) {
        console.log(`She is left with ${Math.floor(moneyDifference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(moneyDifference)} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50]);

flowerShop([15, 7, 5, 10, 100]);