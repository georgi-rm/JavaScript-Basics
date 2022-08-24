function rectangleOf10X10Stars(input) {
    
    let output = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            output += "*";
        }
        console.log(output);
        output = "";
    }
}

rectangleOf10X10Stars();