function summerOutfit(input) {
    const temperature = Number(input[0]);
    const partOfDay = input[1];

    let outfit;
    let shoes;

    switch (partOfDay) {
        case "Morning":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }

    console.log(`It's ${temperature.toFixed(0)} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);