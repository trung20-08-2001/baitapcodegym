let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 10000000;
const promise = buyACar("G63").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})