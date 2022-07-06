function oldBooks(input) {
    const favoriteBook = input[0];

    let index = 1;
    let isFound = false;
    let foundBook = input[index++];
    let countOfCheckedBooks = 0;

    while (foundBook !== "No More Books") {

        if (foundBook === favoriteBook) {
            isFound = true;
            break;
        }
        countOfCheckedBooks++;

        foundBook = input[index++];
    }

    if (isFound) {
        console.log(`You checked ${countOfCheckedBooks} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${countOfCheckedBooks} books.`);
    }

}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
console.log("-------------------------");
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
console.log("-------------------------");
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);