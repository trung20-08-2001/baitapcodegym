let arr=[1, 5, 9, 2, 6, 15, 19, 35, 51, 53];

function checkPrime(number:number){
    if(number<2){
        return false
    }
    for(let i:number=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}

function calculatorSumPrimeArr(){
    let sum=0;
    for(let i:number=0;i<arr.length;i++){
        if(checkPrime(arr[i])){
            sum+=arr[i]
        }
    }
    console.log(sum)
    return sum;
}

calculatorSumPrimeArr()
