function carNumber(input) {
    const beginOfInterval = Number(input[0]);
    const endOfInterval = Number(input[1]);

    let output = "";

    for (let n1 = beginOfInterval; n1 <= endOfInterval; n1++) {
        for (let n2 = beginOfInterval; n2 <= endOfInterval; n2++) {
            for (let n3 = beginOfInterval; n3 <= endOfInterval; n3++) {
                if ((n2 + n3) % 2 != 0) {
                    continue;
                }

                for (let n4 = beginOfInterval; n4 <= endOfInterval; n4++) {
                    if (((n1 % 2 == 0 && n4 % 2 != 0) || (n1 % 2 != 0 && n4 % 2 == 0)) && n1 > n4) {
                        output += `${n1}${n2}${n3}${n4} `;
                    }
                }
            }
        }
    }

    console.log(output);
}

carNumber(["2", "3"]);
console.log("-------------------------");
carNumber(["3", "5"]);
console.log("-------------------------");
carNumber(["5", "8"]);