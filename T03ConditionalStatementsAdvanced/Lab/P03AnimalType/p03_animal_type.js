function animalType(input) {

    const typeOfAnimal = input[0];

    let animalClass;

    switch (typeOfAnimal) {
        case "dog":
            animalClass = "mammal";
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            animalClass = "reptile";
            break;
        default:
            animalClass = "unknown";
            break;
    }

    console.log(animalClass);
}

animalType(["dog"]);
animalType(["snake"]);
animalType((["cat"]));