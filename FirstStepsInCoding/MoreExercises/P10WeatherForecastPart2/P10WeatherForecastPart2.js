function WeatherForecastPart2(input) {
    let degree = Number(input[0]);

    if (degree < 5) {
        console.log("unknown");
    } else if (degree < 12) {
        console.log("Cold");
    } else if (degree < 15) {
        console.log("Cool");
    } else if (degree <= 20) {
        console.log("Mild");
    } else if (degree < 26) {
        console.log("Warm");
    } else if (degree <= 35) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}

WeatherForecastPart2(["16.5"]);
WeatherForecastPart2(["8"]);
WeatherForecastPart2(["22.4"]);
WeatherForecastPart2(["26"]);
WeatherForecastPart2(["0"]);
