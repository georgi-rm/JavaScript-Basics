function agencyProfit(input) {
    const companyName = input[0];
    const countTicketsAdults = Number(input[1]);
    const countTicketsKids = Number(input[2]);
    const priceAdultTicket = Number(input[3]);
    const serviceTax = Number(input[4]);

    const priceKidTicketWithTax = priceAdultTicket * 0.3 + serviceTax;
    const priceAdultTicketWithTax = priceAdultTicket + serviceTax;

    let total = countTicketsAdults * priceAdultTicketWithTax + countTicketsKids * priceKidTicketWithTax;

    total *= 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${total.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
console.log("-------------------------");
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);