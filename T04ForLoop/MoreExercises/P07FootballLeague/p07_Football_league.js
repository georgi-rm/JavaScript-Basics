function footballLeague(input) {
    const stadiumCapacity = Number(input[0]);
    const countOfAllFans = Number(input[1]);

    let countOfFansInSectorA = 0;
    let countOfFansInSectorB = 0;
    let countOfFansInSectorV = 0;
    let countOfFansInSectorG = 0;

    for (i = 0; i < countOfAllFans; i++) {
        const sectorLabel = input[2 + i];

        switch (sectorLabel) {
            case "A":
                countOfFansInSectorA++;
                break;
            case "B":
                countOfFansInSectorB++;
                break;
            case "V":
                countOfFansInSectorV++;
                break;
            case "G":
                countOfFansInSectorG++;
                break;
        }
    }

    const percentageOfFansInSectorA = countOfFansInSectorA / countOfAllFans * 100;
    const percentageOfFansInSectorB = countOfFansInSectorB / countOfAllFans * 100;
    const percentageOfFansInSectorV = countOfFansInSectorV / countOfAllFans * 100;
    const percentageOfFansInSectorG = countOfFansInSectorG / countOfAllFans * 100;
    const percentageOfAllFans = countOfAllFans / stadiumCapacity * 100;

    console.log(`${percentageOfFansInSectorA.toFixed(2)}%`);
    console.log(`${percentageOfFansInSectorB.toFixed(2)}%`);
    console.log(`${percentageOfFansInSectorV.toFixed(2)}%`);
    console.log(`${percentageOfFansInSectorG.toFixed(2)}%`);
    console.log(`${percentageOfAllFans.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
console.log("-------------------------");
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
console.log("-------------------------");
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);