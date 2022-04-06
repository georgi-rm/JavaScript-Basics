function pipesInPool(input) {
    const volumeOfPool = Number(input[0]);
    const pipeOneDebit = Number(input[1]);
    const pipeTwoDebit = Number(input[2]);
    const time = Number(input[3]);

    const waterByPipeOne = pipeOneDebit * time;
    const waterByPipeTwo = pipeTwoDebit * time;

    const waterInPool = waterByPipeOne + waterByPipeTwo;
    const poolFillPercentage = (waterInPool) / volumeOfPool * 100;

    if (waterInPool > volumeOfPool) {
        const waterOverflown = waterInPool - volumeOfPool;
        console.log(`For ${time.toFixed(2)} hours the pool overflows with ${waterOverflown.toFixed(2)} liters.`);
    } else {
        const percentageFromPipeOne = waterByPipeOne / waterInPool * 100;
        const percentageFromPipeTwo = waterByPipeTwo / waterInPool * 100;
        console.log(`The pool is ${poolFillPercentage.toFixed(2)}% full. Pipe 1: ${percentageFromPipeOne.toFixed(2)}%. Pipe 2: ${percentageFromPipeTwo.toFixed(2)}%.`);
    }
}

pipesInPool([1000, 100, 120, 3]);

pipesInPool([100, 100, 100, 2.5]);