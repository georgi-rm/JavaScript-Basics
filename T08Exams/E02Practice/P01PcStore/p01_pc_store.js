function pcStore(input) {
    const priceProcessorUsd = Number(input[0]);
    const priceVideoCardUsd = Number(input[1]);
    const priceRamUsd = Number(input[2]);
    const countOfRam = Number(input[3]);
    const percentageDiscount = Number(input[4]);

    let total = priceProcessorUsd + priceVideoCardUsd;
    total = total - (total * percentageDiscount);
    total += priceRamUsd * countOfRam;
    total *= 1.57;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}

pcStore(["500", "200", "80", "2", "0.05"]);
console.log("-------------------------");
pcStore(["1200", "850", "120", "4", "0.1"]);
console.log("-------------------------");
pcStore(["200", "100", "80", "1", "0.01"]);
