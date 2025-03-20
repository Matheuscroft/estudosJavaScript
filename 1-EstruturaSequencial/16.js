const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a área em m² do local a ser pintado: ", (area) => {
    const litros = area / 3;
    const latas = Math.ceil(litros / 18);
    const preco = latas * 80;
    console.log(`Você precisará de ${latas} latas de tinta`);
    console.log(`O preço total será de R$ ${preco}`);
    rl.close();
});