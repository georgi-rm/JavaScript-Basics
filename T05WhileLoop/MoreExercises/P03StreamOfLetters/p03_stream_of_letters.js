function streamOfLetters(input) {
    let index = 0
    let command = input[index++];

    let isFoundC = false;
    let isFoundO = false;
    let isFoundN = false;

    let word = "";
    let print = "";

    while (command !== "End") {
        let canAddLetter = true;

        if ((command.charAt(0) >= 'a' && command.charAt(0) <= 'z')
            || (command.charAt(0) >= 'A' && command.charAt(0) <= 'Z')) {

            switch (command) {
                case "c":
                    if (!isFoundC) {
                        isFoundC = true;
                        canAddLetter = false;
                    }
                    break;
                case "o":
                    if (!isFoundO) {
                        isFoundO = true;
                        canAddLetter = false;
                    }
                    break;
                case "n":
                    if (!isFoundN) {
                        isFoundN = true;
                        canAddLetter = false;
                    }
                    break;
            }

            if (canAddLetter) {
                word += command;
            }

            if (isFoundC && isFoundO && isFoundN) {
                isFoundC = false;
                isFoundO = false;
                isFoundN = false;
                print += word;
                print += " ";
                word = "";
            }
        }

        command = input[index++];
    }

    console.log(print);
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
console.log("-------------------------");
streamOfLetters(["%%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\\", "A", "D", "End"]);
console.log("-------------------------");
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);
