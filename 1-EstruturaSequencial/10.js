const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite a temperatura em Celsius:");
rl.question("", (num) => {
    valorFahrenheit = ((num * 9/5) + 32);
    console.log(`Valor convertido para Fahrenheit: ${valorFahrenheit}ºF`);
    rl.close();
});
