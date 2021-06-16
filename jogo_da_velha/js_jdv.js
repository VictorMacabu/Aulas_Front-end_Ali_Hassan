const jogador1 = "X";
const jogador2 = "O";
const divJ1 = document.getElementById("jogador1");
const divJ2 = document.getElementById("jogador2");

var jogadorDaVez = jogador1;
var finalJogo = false;

atualizar();
iniciarTabuleiro();

function reiniciar(){
    var reload = document.getElementsByClassName("reiniciar");
    reload[0].addEventListener("click",window.location.reload());
}

function mudaBackground() {
    if(jogadorDaVez == jogador1){
        divJ1.style.backgroundColor = "rgb(96, 190, 77)";
        divJ2.style.backgroundColor = "rgba(240, 240, 240, 0)";
    }else{
        divJ2.style.backgroundColor = "rgb(96, 190, 77)";
        divJ1.style.backgroundColor = "rgba(240, 240, 240, 0)";
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
    vencedor();
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
async function vencedor(){

    var cs1 = document.getElementById("cs1").getAttribute("jogada");
    var cs2 = document.getElementById("cs2").getAttribute("jogada");
    var cs3 = document.getElementById("cs3").getAttribute("jogada");

    var cs4 = document.getElementById("cs4").getAttribute("jogada");
    var cs5 = document.getElementById("cs5").getAttribute("jogada");
    var cs6 = document.getElementById("cs6").getAttribute("jogada");

    var cs7 = document.getElementById("cs7").getAttribute("jogada");
    var cs8 = document.getElementById("cs8").getAttribute("jogada");
    var cs9 = document.getElementById("cs9").getAttribute("jogada");

    var vencedor = "";

    if(((cs1 == cs2 && cs1 == cs3)||(cs1 == cs4 && cs1 == cs7)||(cs1 == cs5 && cs1 == cs9) ) && cs1 != ""){// logica do jogo
        vencedor = cs1;
        console.log(vencedor);
    }else if(cs2 == cs5 && cs2 == cs8 && cs2 != ""){// logica do jogo
        vencedor = cs2;
        console.log(vencedor);
    }else if(cs4 == cs5 && cs4 == cs6 && cs4 != ""){// logica do jogo
        vencedor = cs4;
        console.log(vencedor);
    }else if(((cs9 == cs8 && cs9 == cs7)||(cs9 == cs6 && cs9 == cs3)) && cs9 != ""){// logica do jogo
        vencedor = cs9;
        console.log(vencedor);
    }else if(cs3 == cs5 && cs3 == cs7 && cs3 != ""){// logica do jogo
        vencedor = cs3;
        console.log(vencedor);
    }

    if(((cs1 && cs2 && cs3 && cs4 && cs5 && cs6 && cs7 && cs8 && cs9) != "") && vencedor == ""){
        var velha = true;
        finalJogo = true;
      }else{
        var velha = false;
      }

    if (vencedor != ""){ //verifica o vencedor e solta o alert
        finalJogo = true;
        
        await sleep(70);
        if(vencedor == "X"){
            vencedor = "O vencedor foi o Jogador 1 'X' " 
            alert(vencedor);
        }else if(vencedor == "O"){
            vencedor = "O vencedor foi o Jogador 2 'O' "
            alert(vencedor);
        }
    }else if(velha == true){
        await sleep(70);
        vencedor = "Deu Velha!"
        alert(vencedor);
    }
}
function sleep(ms){ //atrasa o alert em 70ms fazendo o html carregar antes.
 return new Promise(resolve => setTimeout(resolve, ms));
}