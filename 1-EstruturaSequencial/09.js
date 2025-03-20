const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite a temperatura em Fahrenheit:");
rl.question("", (num) => {
    valorCelsius = 5 * ((num - 32) / 9);
    console.log(`Valor convertido para Celsius: ${valorCelsius}ºC`);
    rl.close();
});
