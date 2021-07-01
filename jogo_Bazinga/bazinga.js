'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.getElementById('jogadas');

let selecionar = document.getElementById("btnSelecionar");
let exibirJogada = document.getElementById("jogadasFeitas");

let jogadasFeitas = [];
var jogadaAtual = '';

placar();


function placar() { // atualiza o mostrador do placar 
    document.getElementById('placar').innerHTML = placarAtual;
}

function numJogadas() {// recebe a quantidade de jogadas selecionadas e põe na tela
    qtdJogadas = document.getElementById("qtdJogadas").value
    console.log(qtdJogadas); //teste

    if (qtdJogadas > 0) {
        jogadas.addEventListener('click', function (j) {
            jogadaAtual = j.getAttribute("jogada");
        });
        exibirJogada.innerHTML = ` Jogada(s) [ ${jogadaAtual} ]`;

        for (let i = 0; i < qtdJogadas; i++) {
            this.exibirJogada += this.exibirJogada;
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