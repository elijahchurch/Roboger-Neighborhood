// Business Logic

function roboGreeting(numberInput) {
    let numberArray = [];
    let finalResult = [];
    if (Math.sign(numberInput) === -1) {
        finalResult.push("Mr. Roboger only wants positivity in its neighborhood. Please enter a positive number. Boop.")
    }
    if (numberInput >= 250) {
        finalResult.push("Mr. Roboger has not drained its morning coffee. Please enter a smaller number. Beep.")
    } else {
        for (let i = 0; i <= numberInput; i += 1) {
            numberArray.push(i.toString());
        }
        numberArray.forEach(function (element) {
            if (element.indexOf("3") !== -1) {
                finalResult.push("Won't you be my neighbor?");
            } else if (element.indexOf("2") !== -1) {
                finalResult.push("Boop!");
            } else if (element.indexOf("1") !== -1) {
                finalResult.push("Beep!")
            } else {
                finalResult.push(element);
            }
        })
    };
    return finalResult.join(" ");
};

// UI Logic

function handleFormSubmission(event) {
    event.preventDefault();
    const numberInput = document.getElementById("inputNumber").value;
    const paragraphAnswer = document.getElementById("returnAnswer");
    const finalGreeting = roboGreeting(numberInput);
    paragraphAnswer.innerText = finalGreeting;
};

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmission)
});