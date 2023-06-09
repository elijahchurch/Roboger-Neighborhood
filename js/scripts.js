// Business Logic

function roboGreeting(numberInput) {
    let numberArray = [];
    let finalResult = [];
    for (let i = 0; i <= numberInput; i += 1) {
        numberArray.push(i);
    }
    numberArray.forEach(function (element) {
        if (element === 3) {
            finalResult.push("Won't you be my neighbor?");
        } else {
            finalResult.push(element);
        }
    })
    return finalResult;
};


















// UI Logic