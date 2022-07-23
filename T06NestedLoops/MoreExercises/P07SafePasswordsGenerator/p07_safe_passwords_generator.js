function safePasswordsGenerator(input) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const maximumGeneratedPasswords = Number(input[2]);

    let output = "";

    let passwordsLeftToGenerate = maximumGeneratedPasswords;

    let firstSymbol = 35;
    let secondSymbol = 64;

    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            output += `${String.fromCharCode(firstSymbol)}${String.fromCharCode(secondSymbol)}${x}${y}${String.fromCharCode(secondSymbol)}${String.fromCharCode(firstSymbol)}|`
            passwordsLeftToGenerate--;
            if (passwordsLeftToGenerate == 0) {
                break;
            }

            firstSymbol++;
            if (firstSymbol > 55) {
                firstSymbol = 35;
            }
            secondSymbol++;
            if (secondSymbol > 96) {
                secondSymbol = 64;
            }
        }
        if (passwordsLeftToGenerate == 0) {
            break;
        }
    }

    console.log(output);
}

safePasswordsGenerator(["2", "3", "10"]);
console.log("-------------------------");
safePasswordsGenerator(["20", "50", "10"]);