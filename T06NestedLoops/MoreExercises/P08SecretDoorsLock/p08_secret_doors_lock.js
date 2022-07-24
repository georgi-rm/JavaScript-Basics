function secretDoorsLock(input) {
    const upperLimitHundreds = Number(input[0]);
    const upperLimitTenths = Number(input[1]);
    const upperLimitOnes = Number(input[2]);

    for (let hundreds = 2; hundreds <= upperLimitHundreds; hundreds += 2) {

        for (let tenths = 2; tenths <= Math.min(upperLimitTenths, 7); tenths++) {

            let isPrime = true;

            for (let i = 2; i < tenths; i++) {
                if (tenths % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (!isPrime) {
                continue;
            }

            for (let ones = 2; ones <= upperLimitOnes; ones += 2) {
                console.log(`${hundreds} ${tenths} ${ones}`);
            }
        }
    }
}

secretDoorsLock(["3", "5", "5"]);
console.log("-------------------------");
secretDoorsLock(["8", "2", "8"]);