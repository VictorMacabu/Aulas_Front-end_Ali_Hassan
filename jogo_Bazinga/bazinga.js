'use strict'

var ptsRaj = 0;
var ptsSheldon = 0;
var placarAtual = `${ptsRaj} X ${ptsSheldon}`;

var qtdJogadas = 0;
var jogadas = document.getElementsByClassName('imgJogada');

let jogadasFeitas= [];

var placar = document.getElementById('placar').innerHTML = placarAtual;

function rodadas() {
      let selecionar = document.getElementById("btnSelecionar");
      selecionar.addEventListener("click",qtdJogadas = document.getElementById("qtdJogadas").value);
        if(qtdJogadas > 0){
            let jogadaAtual = document.getElementsByClassName("imgJogada").addEventListener("click",getAttribute("jogada"));
            let exibirJogada = `[ ${this.jogadaAtual} ]`;
            for(let i = 0;i < qtdJogadas; i++){
                
                document.getElementById("jogadasFeitas").innerHTML = exibirJogada;
                this.exibirJogada += this.exibirJogada;
            }
        }
}

function reiniciar(){
    var reload = document.getElementsByClassName("reiniciarJogo");
    reload[0].addEventListener("click",window.location.reload());
    console.log("reload")
}