function checkPrime(number: number): boolean{
    for(let i:number=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}

function caculatorSumPrime(){
    let sum:number=0;
    let j:number=0;
    for(let i:number=2;j<30;i++){
        if(checkPrime(i)){
            sum+=i;
            j++;
        }
    }
    console.log(sum)
    return sum;
}

caculatorSumPrime();

