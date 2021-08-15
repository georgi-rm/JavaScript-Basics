function projectsCreation(input) {
    let nameOfArchitect = input[0];
    let numberOfProjects = Number(input[1]);
    let neededHours = numberOfProjects * 3;

    console.log(`The architect ${nameOfArchitect} will need ${neededHours} hours to complete ${numberOfProjects} project/s.`);
}

projectsCreation(["George", "4"]);
projectsCreation(["Sanya", "9"]);