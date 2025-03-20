const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Quantos quilos de peixe você trouxe?");
rl.question("", (peso) => {
    
    const excesso = peso - 50;
    const multa = excesso * 4;

    if(excesso <= 0) {
        console.log("Você não excedeu o peso permitido.");
    } else {
        console.log(`Você excedeu o peso permitido em ${excesso}kg e terá que pagar uma multa de R$${multa}`);
    }

    rl.close();
});
