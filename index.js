function fib(num) {
    if (Number.isInteger(num) === false || num < 0) {
         return 'You must enter a positive number'
     }
    if (num === 0) return [0];
    else if (num === 1 || num === 2) return [1];
    else if (num > 2) {
        let a = 1;
        let b = 1;
        let c = 0;
        for (let i = 0; i < num - 2; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return [c];
    }
}

module.exports = fib;
