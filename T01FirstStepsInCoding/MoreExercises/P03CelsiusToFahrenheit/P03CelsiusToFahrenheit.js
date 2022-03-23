function CelsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}

CelsiusToFahrenheit(["25"])
CelsiusToFahrenheit(["0"])
CelsiusToFahrenheit(["-5.5"])
CelsiusToFahrenheit(["32.3"])