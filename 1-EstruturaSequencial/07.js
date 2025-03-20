const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o tamanho do lado do quadrado: ", (lado) => {
    const area = lado * lado;
    console.log(`O dobro da área do quadrado é ${area * 2}`);
    rl.close();
});