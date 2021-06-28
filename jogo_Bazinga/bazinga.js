'use strict'

var ptsRaj = 0;
var ptsSheldon = 0;
const qtdJogadas = document.getElementById('qtdJogadas').value;


for(var index= 0; index < 10; index++){
    ptsRaj++
    const placar = `${ptsRaj} X ${ptsSheldon}`;
    document.getElementById('placar').innerHTML = placar;
}