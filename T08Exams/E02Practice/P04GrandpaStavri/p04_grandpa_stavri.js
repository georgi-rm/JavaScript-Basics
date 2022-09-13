function grandpaStavri(input) {
    const days = Number(input[0]);

    let totalLiters = 0;
    let sumDegreeForOneLitter = 0;

    for (let i = 0; i < days; i++) {
        const quantityAlcohol = Number(input[1 + i * 2]);
        const degreeOfStrength = Number(input[2 + i * 2]);

        totalLiters += quantityAlcohol;
        sumDegreeForOneLitter += quantityAlcohol * degreeOfStrength;
    }
    const averageDegree = sumDegreeForOneLitter / totalLiters;
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegree.toFixed(2)}`);
    if (averageDegree < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegree <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
console.log("-------------------------");
grandpaStavri(["2", "200", "43", "200", "40"]);

