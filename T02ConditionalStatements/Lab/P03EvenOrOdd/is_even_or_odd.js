function isEvenOrOdd
(input) {
    let number = Number(input[0]);

    if(number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd")
    }
}

isEvenOrOdd(["2"])
isEvenOrOdd(["3"])
isEvenOrOdd(["25"])
isEvenOrOdd(["1024"])
isEvenOrOdd([1])
isEvenOrOdd([0])