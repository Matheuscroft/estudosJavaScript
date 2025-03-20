const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite a sua altura em metros:");
rl.question("", (altura) => {
    pesoIdealHomem = (72.7 * altura) - 58;
    pesoIdealMulher = (62.1 * altura) - 44.7;
    console.log(`Se for homem, seu peso ideal é: ${pesoIdealHomem}`);
    console.log(`Se for mulher, seu peso ideal é: ${pesoIdealMulher}`);
    rl.close();
});
