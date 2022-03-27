function areaOfFigures(input) {
    let shape = input[0];

    let result = 0;

    if (shape === "square") {
        let a = input[1];
        result = a * a;
    } else if (shape === "rectangle") {
        let a = input[1];
        let b = input[2];

        result = a * b;
    } else if (shape === "circle") {
        let r = input[1];

        result = Math.PI * Math.pow(r, 2);
    } else if (shape === "triangle") {
        let a = input[1];
        let h = input[2];

        result = a * h / 2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);