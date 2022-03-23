function ExcellentResult(input) {
    let mark = Number(input[0]);
    if(mark >= 5.50) {
        console.log("Excellent!");
    }
}

ExcellentResult([5.49]);
ExcellentResult([5.50]);
ExcellentResult([5.51]);


ExcellentResult(["5.49"]);
ExcellentResult(["5.50"]);
ExcellentResult(["5.51"]);