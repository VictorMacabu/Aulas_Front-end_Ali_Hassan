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

jogadas[0].addEventListener('click', function () {
    jogadaAtual = pedra;
    regraJogadas(qtdJogadas)
    if(qtdJogadas > 0){
    exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
    jogadasRaj[qtdJogadas - 1] = jogadaAtual
    console.log(jogadasRaj)
    
    qtdJogadas--;
    console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[1].addEventListener('click', function () {
    jogadaAtual = papel;
    regraJogadas(qtdJogadas)
    if(qtdJogadas > 0){
    exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
    jogadasRaj[qtdJogadas - 1] = jogadaAtual
    console.log(jogadasRaj)
    
    qtdJogadas--;
    console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[2].addEventListener('click', function () {
    jogadaAtual = tesoura;
    regraJogadas(qtdJogadas)
    if(qtdJogadas > 0){
    exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
    jogadasRaj[qtdJogadas - 1] = jogadaAtual
    console.log(jogadasRaj)
    
    qtdJogadas--;
    console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }        
});


jogadas[3].addEventListener('click', function () {
    jogadaAtual = lagarta;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        console.log(jogadasRaj)
        
        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas + " jogadas feitas " + jogadasRaj); //teste
    }
});


jogadas[4].addEventListener('click', function () {
    jogadaAtual = Spock;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        console.log(jogadasRaj)
        
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
    //seleciona a quantidade de jogadas


}

function random(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload() {
    window.location.reload();
    console.log("reload")
}