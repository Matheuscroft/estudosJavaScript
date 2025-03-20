const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o raio do círculo: ", (raio) => {
    const area = Math.PI * Math.pow(Number(raio), 2);
    console.log(`A área do círculo é ${area.toFixed(2)}`);
    rl.close();
});