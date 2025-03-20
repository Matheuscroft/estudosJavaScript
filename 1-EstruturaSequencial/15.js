const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quanto você ganha por hora? ", (num1) => {
    rl.question("Quantas horas você trabalha em um mês? ", (num2) => {
        
        const salarioBruto = num1 * num2;
        const ir = salarioBruto * 0.11;
        const inss = salarioBruto * 0.08;
        const sindicato = salarioBruto * 0.05;
        const salarioLiquido = salarioBruto - ir - inss - sindicato;

        console.log(`+ Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
        console.log(`- IR (11%): R$ ${ir.toFixed(2)}`);
        console.log(`- INSS (8%): R$ ${inss.toFixed(2)}`);
        console.log(`- Sindicato (5%): R$ ${sindicato.toFixed(2)}`);
        console.log(`= Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

        rl.close();
    });
});
