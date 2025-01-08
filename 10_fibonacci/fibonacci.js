const fibonacci = function(n) {
    let fibonacciArr = [0, 1];
    if(n < 0) return "OOPS";
    let N = Number(n);
    for(let i = 0; i < (N-1); i++) {
        fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i+1]);
    }
    return fibonacciArr[N];
};


// Do not edit below this line
module.exports = fibonacci;
