const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o tamanho do arquivo para download (em MB): ", (tamanhoArquivo) => {
    rl.question("Digite a velocidade do link de Internet (em Mbps): ", (velocidadeLink) => {
        const tamanhoArquivoMB = Number(tamanhoArquivo);
        const velocidadeLinkMbps = Number(velocidadeLink);

        const velocidadeLinkMBps = velocidadeLinkMbps / 8;

        const tempoDownloadSegundos = tamanhoArquivoMB / velocidadeLinkMBps;

        const tempoDownloadMinutos = tempoDownloadSegundos / 60;

        console.log(`O tempo aproximado de download do arquivo é: ${tempoDownloadMinutos.toFixed(2)} minutos`);

        rl.close();
    });
});