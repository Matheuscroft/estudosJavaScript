const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira nota: ", (num1) => {
  rl.question("Digite a segunda nota: ", (num2) => {
    rl.question("Digite a terceira nota: ", (num3) => {
      rl.question("Digite a quarta nota: ", (num4) => {
        const media =
          (Number(num1) + Number(num2) + Number(num3) + Number(num4)) / 4;
        console.log(`A média das notas informadas é ${media}`);
        rl.close();
      });
    });
  });
});
