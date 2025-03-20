const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite o valor em metros:");
rl.question("", (num) => {
    console.log(`${num} metros é igual a ${num * 100} centimentros`);
    rl.close();
});
