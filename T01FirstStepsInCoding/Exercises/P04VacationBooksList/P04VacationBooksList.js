function VacationBooksList(input) {
    let numberOfPagesInTheBook = Number(input[0]);
    let pagesPerOneHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let hoursToReadTheBook = numberOfPagesInTheBook / pagesPerOneHour;
    let hoursToReadEachDay = hoursToReadTheBook / numberOfDays;
    console.log(hoursToReadEachDay);
}

VacationBooksList(["212", "20", "2"]);
VacationBooksList(["432", "15", "4"]);