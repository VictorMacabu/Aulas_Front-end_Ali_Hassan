const jogador1 = "X";
const jogador2 = "O";
const divJ1 = document.getElementById("jogador1");
const divJ2 = document.getElementById("jogador2");

var jogadorDaVez = jogador1;
var finalJogo = false;

atualizar();
iniciarTabuleiro();

function mudaBackground() {
    if(jogadorDaVez == jogador1){
        divJ1.style.backgroundColor = "rgb(96, 190, 77)";
        divJ2.style.backgroundColor = "white";
    }else{
        divJ2.style.backgroundColor = "rgb(96, 190, 77)";
        divJ1.style.backgroundColor = "white";
    }
}

function atualizar(){
    if(finalJogo){
        return;
    }
    if(jogadorDaVez == jogador1){
        var jogador = document.querySelectorAll("div#jogador1 img")[0];
        jogador.setAttribute("src","./image/X.jpg");
        mudaBackground()
    }else{
        var jogador = document.querySelectorAll("div#jogador2 img")[0];
        jogador.setAttribute("src","./image/O.jpg");
        mudaBackground()
    }
}

function iniciarTabuleiro(){
    var tabuleiro = document.getElementsByClassName("tabuleiro");
    for (let i = 0; i < tabuleiro.length; i++){
        tabuleiro[i].addEventListener("click",function() {
            if(finalJogo){
                return;
            }if(this.getElementsByTagName("img").length == 0){
                if(jogadorDaVez == jogador1){
                    this.innerHTML = "<img src='./image/X.jpg'>";
                    this.setAttribute("jogada",jogador1);
                    jogadorDaVez = jogador2;
                }else{
                    this.innerHTML = "<img src='./image/O.jpg'>";
                    this.setAttribute("jogada",jogador2);
                    jogadorDaVez = jogador1;
                }
            }
            atualizar();
        });
    }
}
function reiniciar(){
    var limpador = document.querySelectorAll("div.tabuleiro img");
   for(let i = 0; i < limpador.length; i++){
    limpador[i].setAttribute("src","");
    
   }
    
   var limpadorJ = document.querySelectorAll("div.tabuleiro jogada");
   for(let i = 0; i < limpador.length; i++){
    limpadorJ[i].setAttribute("jogada","");
    
   }
  
}
