function oscars(input) {
    const nameOfActor = input[0];
    const pointsFromAcademy = Number(input[1]);
    const countOfJouryMembers = Number(input[2]);

    let totalPoints = pointsFromAcademy;

    for (numberOfJouryMember = 0; numberOfJouryMember < countOfJouryMembers; numberOfJouryMember++) {
        const nameOfJouryMember = input[3 + numberOfJouryMember * 2];
        const pointsFromJouryMember = Number(input[3 + numberOfJouryMember * 2 + 1]);

        totalPoints += nameOfJouryMember.length * pointsFromJouryMember / 2;

        if (totalPoints > 1250.5) {
            break;
        }
    }

    const pointsDifference = 1250.5 - totalPoints;

    if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameOfActor} you need ${pointsDifference.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
console.log("-------------------------");
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
console.log("-------------------------");