const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a área em m² do local a ser pintado: ", (area) => {
    const areaComFolga = Number(area) * 1.1;
    const litros = areaComFolga / 6;

    const latas = Math.ceil(litros / 18);
    const precoLatas = latas * 80;

    const galoes = Math.ceil(litros / 3.6);
    const precoGaloes = galoes * 25;

    const latasMistura = Math.floor(litros / 18);
    const litrosRestantes = litros - (latasMistura * 18);
    const galoesMistura = Math.ceil(litrosRestantes / 3.6);
    const precoMistura = (latasMistura * 80) + (galoesMistura * 25);

    console.log(`Você precisará de:`);
    console.log(`Apenas latas de 18 litros: ${latas} latas, custo total: R$ ${precoLatas.toFixed(2)}`);
    console.log(`Apenas galões de 3,6 litros: ${galoes} galões, custo total: R$ ${precoGaloes.toFixed(2)}`);
    console.log(`Mistura de latas e galões: ${latasMistura} latas e ${galoesMistura} galões, custo total: R$ ${precoMistura.toFixed(2)}`);

    rl.close();
});