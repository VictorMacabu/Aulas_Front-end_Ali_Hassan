'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.getElementsByClassName('imgJogada');

let selecionar = document.getElementById("btnSelecionar");
let jogadasFeitas= [];

placar();
rodadas();

function placar(){ // atualiza o mostrador do placar 
    document.getElementById('placar').innerHTML = placarAtual;
}

function numJogadas(){
    qtdJogadas = document.getElementById("qtdJogadas").value
    return qtdJogadas;
}
function rodadas() { // verifica as jogadas e adiciona na tela
       //seleciona a quantidade de jogadas
      selecionar.addEventListener("click", numJogadas);
      
        if(qtdJogadas > 0){
            let jogadaAtual = document.getElementsByClassName("imgJogada").addEventListener("click",getAttribute("jogada"));
            let exibirJogada = `[ ${jogadaAtual} ]`;
            for(let i = 0;i < qtdJogadas; i++){
                document.getElementById("jogadasFeitas").innerHTML = exibirJogada;
                this.exibirJogada += this.exibirJogada;
            }
        }
}



    document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload(){
    window.location.reload();
    console.log("reload")
}