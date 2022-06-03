function tennisRanklist(input) {
    const countOfTournaments = Number(input[0]);
    const startingPoints = Number(input[1]);

    let countOfWins = 0;
    let totalPoints = startingPoints;

    for (i = 0; i < countOfTournaments; i++) {
        const reachedTournamentStage = input[2 + i];

        switch (reachedTournamentStage) {
            case "W":
                countOfWins++;
                totalPoints += 2000;
                break;
            case "F":
                totalPoints += 1200;
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
    }

    const avaragePoints = Math.floor((totalPoints - startingPoints) / countOfTournaments);
    const percentageOfWins = countOfWins / countOfTournaments * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avaragePoints}`);
    console.log(`${percentageOfWins.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
console.log("-------------------------");
tennisRanklist(["4", "750", "SF", "W", "SF", "W"])
console.log("-------------------------");
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])