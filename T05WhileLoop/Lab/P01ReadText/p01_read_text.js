function readText(input) {
    i = 0;

    while(input[i] !== "Stop") {
        console.log(input[i]);
        i++;
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
console.log("-------------------------");
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);