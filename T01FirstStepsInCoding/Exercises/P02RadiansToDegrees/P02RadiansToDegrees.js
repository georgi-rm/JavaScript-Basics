function RadiansToDegrees(input) {
    let radians = Number(input[0]);
    let degree = radians * 180/ Math.PI;
    console.log(degree.toFixed(0));
}

RadiansToDegrees(["3.1416"]);
RadiansToDegrees(["6.2832"]);
RadiansToDegrees(["0.7854"]);
RadiansToDegrees(["0.5236"]);