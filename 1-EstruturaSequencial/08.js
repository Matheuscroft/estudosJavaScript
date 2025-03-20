const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quanto você ganha por hora? ", (num1) => {
    rl.question("Quantas horas você trabalha em um mês? ", (num2) => {
        console.log(`Seu salário mensal é R$ ${num1 * num2}`);
        rl.close();
    });
});
