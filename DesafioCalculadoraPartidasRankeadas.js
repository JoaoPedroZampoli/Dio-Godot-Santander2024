const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Vitórias: ", (vitorias) => {
    readline.question("Derrotas: ", (derrotas) => {
        const vitoriasNum = parseInt(vitorias);
        const derrotasNum = parseInt(derrotas);
        
        const saldoVitorias = vitoriasNum - derrotasNum;
        blocoCondicional(saldoVitorias, vitoriasNum);
        readline.close();
    });
});

function printResultado(saldoVitorias, nomeNivel) {
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias, e está no nível: ${nomeNivel}`);
}

function blocoCondicional(saldoVitorias, vitorias) {
    if(vitorias <= 10){
        printResultado(saldoVitorias, "Ferro");
    } 
    else if(vitorias > 10 && vitorias <= 20){
        printResultado(saldoVitorias, "Bronze");
    } 
    else if(vitorias > 20 && vitorias <= 50){
        printResultado(saldoVitorias, "Prata");
    } 
    else if(vitorias > 50 && vitorias <= 80){
        printResultado(saldoVitorias, "Ouro");
    } 
    else if(vitorias > 80 && vitorias <= 90){
        printResultado(saldoVitorias, "Diamante");
    } 
    else if(vitorias > 90 && vitorias <= 100){
        printResultado(saldoVitorias, "Lendário");
    } 
    else{
        printResultado(saldoVitorias, "Imortal");
    }
}
