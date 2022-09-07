function bestPlayer(input) {
    let bestPlayerName = "";
    let bestPlayerGoals = Number.MIN_SAFE_INTEGER;

    let index = 0;

    while (input[index] !== "END") {
        const playerName = input[index++];
        const goals = Number(input[index++]);

        if (goals > bestPlayerGoals) {
            bestPlayerGoals = goals;
            bestPlayerName = playerName;
            if (bestPlayerGoals >= 10) {
                break;
            }
        }
    }

    console.log(`${bestPlayerName} is the best player!`);
    if (bestPlayerGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
console.log("-------------------------");
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
console.log("-------------------------");
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
console.log("-------------------------");
bestPlayer(["Petrov", "2", "Drogba", "11"]);
console.log("-------------------------");
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);