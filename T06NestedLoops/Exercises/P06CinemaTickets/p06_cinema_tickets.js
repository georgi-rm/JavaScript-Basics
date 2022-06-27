function cinemaTickets(input) {

    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidsTickets = 0;

    let index = 0;

    while (input[index] !== "Finish") {
        const movieTitle = input[index++];
        const allSeats = Number(input[index++]);

        let takenSeats = 0;

        while (takenSeats < allSeats) {
            const typeOfTicket = input[index++];
            if (typeOfTicket == "End") {
                break;
            } else if (typeOfTicket == "student") {
                totalStudentTickets++;
            }
            else if (typeOfTicket == "standard") {
                totalStandardTickets++;
            }
            else if (typeOfTicket == "kid") {
                totalKidsTickets++;
            }

            takenSeats++;
        }

        const movieFillPercentage = 100 * takenSeats / allSeats;

        console.log(`${movieTitle} - ${movieFillPercentage.toFixed(2)}% full.`);
    }

    const totalTickets = totalStudentTickets + totalStandardTickets + totalKidsTickets;
    const percentageOfStudentTickets = 100 * totalStudentTickets / totalTickets;
    const percentageOfStandardTickets = 100 * totalStandardTickets / totalTickets;
    const percentageOfKidsTickets = 100 * totalKidsTickets / totalTickets;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageOfStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentageOfStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentageOfKidsTickets.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
console.log("-------------------------");
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);