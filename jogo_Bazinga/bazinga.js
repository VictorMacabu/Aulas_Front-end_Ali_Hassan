'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.querySelectorAll(".imgJogada");

let selecionar = document.getElementById("btnSelecionar");
let exibirJogada = document.getElementById("jogadasFeitas");

let jogadasFeitas = [];
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

function selectJogada() {
    if((qtdJogadas > 0)&&( pedra.onclick )){
        jogadas[0].addEventListener('click', function () {
        jogadaAtual = jogadas[0].getAttribute("jogada");
        exibirJogada.innerHTML = ` [ ${jogadaAtual} ]`;
        qtdJogadas--;
    })
};
if((qtdJogadas > 0)&&( papel.onclick )){
    jogadas[1].addEventListener('click', function () {
        jogadaAtual = jogadas[1].getAttribute("jogada");
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        qtdJogadas--;
    });
}
    if((qtdJogadas > 0)&&( tesoura.onclick )){
    jogadas[2].addEventListener('click', function () {
        jogadaAtual = jogadas[2].getAttribute("jogada");
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        qtdJogadas--;
    });
}
    if((qtdJogadas > 0)&&( lagarta.onclick )){
    jogadas[3].addEventListener('click', function () {
        jogadaAtual = jogadas[3].getAttribute("jogada");
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        qtdJogadas--;
    });
}
    if((qtdJogadas > 0)&&( Spock.onclick )){
    jogadas[4].addEventListener('click', function () {
        jogadaAtual = jogadas[4].getAttribute("jogada");
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        qtdJogadas--;
    });
}
}
function regraJogadas(qtdJogadas){ //validar nas regras
    if(qtdJogadas <= 0 ){
        alert("Número de jogadas inválido")
    }
}

function numJogadas() {// recebe a quantidade de jogadas selecionadas e põe na tela
    qtdJogadas = document.getElementById("qtdJogadas").value
    console.log(qtdJogadas); //teste

    if (qtdJogadas > 0) {
        exibirJogada.innerHTML = ' Jogadas: ';
        while (qtdJogadas > 0) {
            selectJogada()
            qtdJogadas--;
        }
    }
}
selecionar.addEventListener("click", numJogadas);

function rodadas() { // verifica as jogadas e adiciona na tela
    //seleciona a quantidade de jogadas


}



document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload() {
    window.location.reload();
    console.log("reload")
}