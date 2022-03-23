function Fishland(input) {
    let priceOfSkumria = Number(input[0]);
    let priceOfCaca = Number(input[1]);
    let quantityOfPalamud = Number(input[2]);
    let quantityOfSafrid = Number(input[3]);
    let quantityOfSchells = Number(input[4]);

    let priceOfPalamud = 1.6 * priceOfSkumria;
    let priceOfSafrid = 1.8 * priceOfCaca;
    let priceOfSchells = 7.5;

    let total = priceOfPalamud * quantityOfPalamud + priceOfSafrid * quantityOfSafrid + priceOfSchells * quantityOfSchells;
    console.log(total.toFixed(2));
}

Fishland(["6.90", "4.20", "1.5", "2.5", "1"])
Fishland(["5.55", "3.57", "4.3", "3.6", "7"])
Fishland(["7.79", "5.35", "9.3", "0", "0"])