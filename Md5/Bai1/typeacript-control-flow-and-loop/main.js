function checkPrime(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function caculatorSumPrime() {
    var sum = 0;
    var j = 0;
    for (var i = 2; j < 30; i++) {
        if (checkPrime(i)) {
            sum += i;
            j++;
        }
    }
    console.log(sum);
    return sum;
}
caculatorSumPrime();
