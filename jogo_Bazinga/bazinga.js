'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.querySelectorAll(".imgJogada");

const selecionar = document.getElementById("btnSelecionar");
let exibirJogada = document.getElementById("jogadasFeitas");

let jogadasRaj = [];
let jogadasSheldon = [];
let jogadaAtual = '';

const pedra = document.getElementById("pedra1").getAttribute("jogada");     // jogadas
const papel = document.getElementById("papel1").getAttribute("jogada");     // jogadas
const tesoura = document.getElementById("tesoura1").getAttribute("jogada"); // jogadas
const lagarta = document.getElementById("lagarta1").getAttribute("jogada"); // jogadas
const Spock = document.getElementById("Spock1").getAttribute("jogada");     // jogadas
const arrayJogadas = [pedra, papel, tesoura, lagarta, Spock];
placar();

function placar() { // atualiza o mostrador do placar 
    document.getElementById('placar').innerHTML = placarAtual;
}

function regraJogadas(qtdJogadas) { //validar qtd jogadas nas regras
    if (qtdJogadas == 0) {
        alert("Suas jogadas acabaram, inicie o jogo")
    } else if (qtdJogadas < 0) {
        alert("Número de jogadas inválido")
    }
}

jogadas[0].addEventListener('click', function () { // pedra img
    jogadaAtual = pedra;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[1].addEventListener('click', function () { // papel img
    jogadaAtual = papel;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[2].addEventListener('click', function () { // tesoura img
    jogadaAtual = tesoura;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[3].addEventListener('click', function () { // lagarta img
    jogadaAtual = lagarta;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[4].addEventListener('click', function () { // Spock img
    jogadaAtual = Spock;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});

function numJogadas() {// recebe a quantidade de jogadas selecionadas e põe na tela
    qtdJogadas = document.getElementById("qtdJogadas").value
    regraJogadas(qtdJogadas)
    console.log("iniciou jogadas com: " + qtdJogadas); //teste

    if (qtdJogadas > 0) {
        exibirJogada.innerHTML = ' Jogadas: ';
    }
}
selecionar.addEventListener("click", numJogadas);

function rodadas() { // verifica as jogadas e adiciona na tela


}

function random(min, max) { // recebe o indice do array para fazer a escolha de Sheldon
    min = Math.ceil(min);   // min = 0
    max = Math.floor(max);  // max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementsByClassName("iniciarJogo")[0].onclick = () => {
    for(let i = )
    comparaJogadas(jogadasRaj[i],jogadasSheldon[i]);
}

document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload() {
    window.location.reload();
    console.log("reload")
}
/*
1. a tesoura corta o papel;
2. o papel embrulha a pedra;
3. a pedra esmaga o lagarto;
4. o lagarto envenena Spock;
5. Spock destrói a tesoura;
6. a tesoura decapita o lagarto;
7. o lagarto come o papel;
8. o papel contesta Spock;
9. Spock vaporiza a pedra;
10. a pedra quebra a tesoura.
*/