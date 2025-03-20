const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número inteiro: ", (num1) => {
    rl.question("Digite o segundo número inteiro: ", (num2) => {
        rl.question("Digite um número real: ", (num3) => {
            const int1 = Number(num1);
            const int2 = Number(num2);
            const real = Number(num3);

            const resultadoA = (2 * int1) * (int2 / 2);
            const resultadoB = (3 * int1) + real;
            const resultadoC = Math.pow(real, 3);

            console.log(`O produto do dobro do primeiro com metade do segundo é: ${resultadoA}`);
            console.log(`A soma do triplo do primeiro com o terceiro é: ${resultadoB}`);
            console.log(`O terceiro número elevado ao cubo é: ${resultadoC}`);

            rl.close();
        });
    });
});