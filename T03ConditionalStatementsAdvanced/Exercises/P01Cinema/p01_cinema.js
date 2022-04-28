function cinema(input) {
    const projectionType = input[0];
    const numberOfRows = Number(input[1]);
    const numberOfColumns = Number(input[2]);

    let price = 0;

    switch (projectionType) {
        case "Premiere":
            price = 12;
            break;
        case "Normal":
            price = 7.50;
            break;
        case "Discount":
            price = 5;
            break;
    }

    const income = price * numberOfRows * numberOfColumns;

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);