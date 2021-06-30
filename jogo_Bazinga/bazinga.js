'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.getElementsByClassName('imgJogada');

let selecionar = document.getElementById("btnSelecionar");
let exibirJogada = document.getElementById("jogadasFeitas").innerHTML;
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
            var jogadasPossiveis = document.getElementsByClassName("imgJogada");
            jogadaAtual = jogadasPossiveis[0].addEventListener("click",getAttribute("jogada"));
            jogadaAtual = jogadasPossiveis[1].addEventListener("click",getAttribute("jogada"));
            jogadaAtual = jogadasPossiveis[2].addEventListener("click",getAttribute("jogada"));
            jogadaAtual = jogadasPossiveis[3].addEventListener("click",getAttribute("jogada"));
            jogadaAtual = jogadasPossiveis[4].addEventListener("click",getAttribute("jogada"));
            exibirJogada.innerHTML = `[ ${jogadaAtual} ]`;
            for(let i = 0;i < qtdJogadas; i++){
                this.exibirJogada += this.exibirJogada;
            }
        }
}



    document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload(){
    window.location.reload();
    console.log("reload")
}