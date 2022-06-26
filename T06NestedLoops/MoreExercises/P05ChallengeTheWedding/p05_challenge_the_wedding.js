function challengeTheWedding(input) {
    const countOfMaleClients = Number(input[0]);
    const countOfFemaleClients = Number(input[1]);
    const countTables = Number(input[2]);

    let output = "";

    let freeTables = countTables;

    for (let male = 1; male <= countOfMaleClients; male++) {
        for (let female = 1; female <= countOfFemaleClients; female++) {
            freeTables--;

            output += `(${male} <-> ${female}) `;

            if (freeTables == 0) {
                break;
            }
        }
        if (freeTables == 0) {
            break;
        }
    }

    console.log(output);
}

challengeTheWedding(["2", "2", "6"]);
console.log("-------------------------");
challengeTheWedding(["2", "2", "3"]);
console.log("-------------------------");
challengeTheWedding(["5", "8", "40"]);
