function countPrimeNumbers() {
    for (let index = 2; index <= 100; index++) {
        if (index % 2 == 0) {
            return index;
        };
    }
}

let timeStart = performance.now();
countPrimeNumbers();
let timeFinal = performance.now();
let time = timeFinal - timeStart;

console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`);