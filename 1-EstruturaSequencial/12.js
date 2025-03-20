const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite a sua altura em metros:");
rl.question("", (altura) => {
    pesoIdeal = (72.7 * altura) - 58;
    console.log(`Seu peso ideal é: ${pesoIdeal}`);
    rl.close();
});
