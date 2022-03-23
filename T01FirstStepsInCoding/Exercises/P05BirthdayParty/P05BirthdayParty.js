function BirthdayParty(input) {
    let rentForTheHall = Number(input[0]);
    let priceOfTheCake = rentForTheHall * 0.2;
    let priceOfTheDrinks = priceOfTheCake * 0.55;
    let priceForAnimator = rentForTheHall / 3;

    let budget = rentForTheHall + priceOfTheCake + priceOfTheDrinks + priceForAnimator;
    console.log(budget);
}

BirthdayParty(["2250"])
BirthdayParty(["3720"])