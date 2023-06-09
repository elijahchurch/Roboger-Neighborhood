// Business Logic

function roboGreeting(numberInput) {
    let numberArray = [];
    let finalResult = [];
    if (Math.sign(numberInput) === -1) {
        finalResult.push("Mr. Roboger only wants positivity in his neighborhood. Please enter a positive number. Boop.")
    }
    for (let i = 0; i <= numberInput; i += 1) {
        numberArray.push(i.toString());
    }
    numberArray.forEach(function (element) {
        if (element === '3') {
            finalResult.push("Won't you be my neighbor?");
        } else if (element === '2') {
            finalResult.push("Boop!");
        } else if (element.indexOf("1") !== -1) {
            finalResult.push("Beep!")
        } else {
            finalResult.push(+element);
        }
    })
    return finalResult;
};


















// UI Logic