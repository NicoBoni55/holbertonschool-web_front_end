function countPrimeNumbers() {
    count = 0;
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
              count += 1;
            }
        }
    }
    console.log(count)
}

let timeStart = performance.now();
for (let index = 0; index <= 100; index++) {
    countPrimeNumbers();
}
let timeFinal = performance.now();
let time = timeFinal - timeStart;

console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`);