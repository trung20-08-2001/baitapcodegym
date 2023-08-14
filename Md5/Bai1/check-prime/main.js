var arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
function checkPrime(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function calculatorSumPrimeArr() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            sum += arr[i];
        }
    }
    console.log(sum);
    return sum;
}
calculatorSumPrimeArr();
