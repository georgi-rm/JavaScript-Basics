function matchTickets(input) {
    const budget = Number(input[0]);
    const ticketCategory = input[1];
    const numberOfPeopleInGroup = Number(input[2]);

    let priceForTicket;

    if (ticketCategory === "VIP") {
        priceForTicket = 499.99;
    } else {
        priceForTicket = 249.99;
    }

    let priceForTransport;

    if (numberOfPeopleInGroup <= 4) {
        priceForTransport = budget * 0.75;
    } else if (numberOfPeopleInGroup <= 9) {
        priceForTransport = budget * 0.60;
    } else if (numberOfPeopleInGroup <= 24) {
        priceForTransport = budget * 0.50;
    } else if (numberOfPeopleInGroup <= 49) {
        priceForTransport = budget * 0.40;
    } else {
        priceForTransport = budget * 0.25;
    }

    const totalPrice = priceForTransport + priceForTicket * numberOfPeopleInGroup;

    const moneyDifference = Math.abs(budget - totalPrice);

    if (totalPrice <= budget) {
        console.log(`Yes! You have ${moneyDifference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyDifference.toFixed(2)} leva.`);
    }

}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);
