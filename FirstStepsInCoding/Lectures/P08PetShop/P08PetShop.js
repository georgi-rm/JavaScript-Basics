function petShop(input) {
    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);
    let totalPrice = dogs * 2.50 + otherAnimals * 4;
    console.log(totalPrice + " lv.");
}

petShop(["5", "4"]);
petShop(["13", "9"]);