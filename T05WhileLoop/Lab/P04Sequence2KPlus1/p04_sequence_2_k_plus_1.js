function sequence2KPlus1(input) {
    const n = Number(input[0]);

    let counter = 1;

    while (counter <= n) {
        console.log(counter);

        counter = counter * 2 + 1;
    }
}

sequence2KPlus1(["3"])
console.log("-------------------------");
sequence2KPlus1(["8"])
console.log("-------------------------");
sequence2KPlus1(["17"])
console.log("-------------------------");
sequence2KPlus1(["31"])