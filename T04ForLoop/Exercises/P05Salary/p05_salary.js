function salary(input) {
    const countOfOpenTabs = Number(input[0]);
    const baseSalary = Number(input[1]);

    let currentSalary = baseSalary;

    for (numberOfTab = 0; numberOfTab < countOfOpenTabs; numberOfTab++) {
        const tabName = input[2 + numberOfTab];

        switch (tabName) {
            case "Facebook":
                currentSalary -= 150;
                break;
            case "Instagram":
                currentSalary -= 100;
                break;
            case "Reddit":
                currentSalary -= 50;
                break;
            default:
                break;
        }

        if (currentSalary <= 0) {
            break;
        }
    }

    if (currentSalary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(currentSalary.toFixed(0));
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
console.log("-------------------------");
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
console.log("-------------------------");
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);