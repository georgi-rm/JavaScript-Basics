function password(input) {
    const username = input[0];
    const password = input[1];

    let loginPassword = input[2];
    let index = 3;

    while( loginPassword !== password) {
        loginPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);

console.log("-------------------------");

password(["Gosho", "secret", "secret"]);