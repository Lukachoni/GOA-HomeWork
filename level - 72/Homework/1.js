const number = Number(prompt("Enter a number: "));
if (number % 2 === 0) {
    console.log("This number is even.");
} else {
    console.log("This number is odd.");
}

const temperature = parseFloat(prompt("Enter the temperature in Celsius: "));
if (temperature < 10) {
    console.log("The temperature is cold.");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("The temperature is moderate.");
} else {
    console.log("The temperature is hot.");
}

