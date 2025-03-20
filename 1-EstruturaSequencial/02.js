const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite um número:");
rl.question("", (num) => {
    console.log(`O número informado foi ${Number(num)}`);
    rl.close();
});
