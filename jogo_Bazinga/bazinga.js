'use strict'

let ptsRaj = 0;
let ptsSheldon = 0;
let placarAtual = `${ptsRaj} X ${ptsSheldon}`;

let qtdJogadas = 0;
let jogadas = document.querySelectorAll(".imgJogada");

const selecionar = document.getElementById("btnSelecionar");
let exibirJogada = document.getElementById("jogadasFeitas");
let displayJogadaRaj = document.getElementsByClassName("jkp1")[0];
let displayJogadaSheldon = document.getElementsByClassName("jkp2")[0];

let jogadasRaj = [];
let jogadasSheldon = [];
let jogadaAtual = '';
let vencedor = '';

const pedra = document.getElementById("pedra1").getAttribute("jogada");     // jogadas
const papel = document.getElementById("papel1").getAttribute("jogada");     // jogadas
const tesoura = document.getElementById("tesoura1").getAttribute("jogada"); // jogadas
const lagarta = document.getElementById("lagarta1").getAttribute("jogada"); // jogadas
const Spock = document.getElementById("Spock1").getAttribute("jogada");     // jogadas
const arrayJogadas = [pedra, papel, tesoura, lagarta, Spock];               // jogadas

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

function numJogadas() {// recebe a quantidade de jogadas selecionadas e põe na tela
    qtdJogadas = document.getElementById("qtdJogadas").value
    regraJogadas(qtdJogadas)
    console.log("iniciou jogadas com: " + qtdJogadas); //teste

    if (qtdJogadas > 0) {
        exibirJogada.innerHTML = ' Jogadas: ';
    }
}

function random(min, max) { // recebe o indice do array para fazer a escolha de Sheldon
    min = Math.ceil(min);   // min = 0
    max = Math.floor(max);  // max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comparaJogadas(j1, j2) {//regras do jogo

    // vencedor j1
    if ((j1 === pedra) && (j2 === tesoura) || (j1 === pedra) && (j2 === lagarta)) {// 3. a pedra esmaga o lagarto; 10. a pedra quebra a tesoura.
        return vencedor = j1;
    } else if ((j1 === papel) && (j2 === pedra) || (j1 === papel) && (j2 === Spock)) { // 2. o papel embrulha a pedra; 8. o papel contesta Spock;
        return vencedor = j1;
    } else if ((j1 === tesoura) && (j2 === papel) || (j1 === tesoura) && (j2 === lagarta)) {// 1. a tesoura corta o papel; 6. a tesoura decapita o lagarto;
        return vencedor = j1;
    } else if ((j1 === lagarta) && (j2 === Spock) || (j1 === lagarta) && (j2 === papel)) {// 4. o lagarto envenena Spock; 7. o lagarto come o papel;
        return vencedor = j1;
    } else if ((j1 === Spock) && (j2 === tesoura) || (j1 === Spock) && (j2 === pedra)) {// 5. Spock destrói a tesoura; 9. Spock vaporiza a pedra;
        return vencedor = j1;
    }
    // empate
    else if ((j2 === pedra) && (j1 === pedra) || (j2 === tesoura) && (j1 === tesoura) || (j2 === lagarta) && (j1 === lagarta) ||
        (j1 === papel) && (j2 === papel) || (j2 === Spock) && (j1 === Spock)) {
        return vencedor = 'Empate';
    }
    // vencedor j2  -----  if 
    else if ((vencedor != j1) && (vencedor != 'Empate')) {
        return vencedor = j2
    }
}

jogadas[0].addEventListener('click', () => { // pedra img
    jogadaAtual = pedra;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas); //teste
    }
});


jogadas[1].addEventListener('click', () => { // papel img
    jogadaAtual = papel;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas); //teste
    }
});


jogadas[2].addEventListener('click', () => { // tesoura img
    jogadaAtual = tesoura;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas); //teste
    }
});


jogadas[3].addEventListener('click', () => { // lagarta img
    jogadaAtual = lagarta;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas); //teste
    }
});


jogadas[4].addEventListener('click', () => { // Spock img
    jogadaAtual = Spock;
    regraJogadas(qtdJogadas)
    if (qtdJogadas > 0) {
        exibirJogada.innerHTML += ` [ ${jogadaAtual} ]`;
        jogadasRaj[qtdJogadas - 1] = jogadaAtual
        jogadasSheldon[qtdJogadas - 1] = arrayJogadas[random(0, 4)]
        console.log(jogadasRaj, jogadasSheldon)

        qtdJogadas--;
        console.log("jogadas restantes: " + qtdJogadas); //teste
    }
});



selecionar.addEventListener("click", numJogadas);



document.getElementsByClassName("iniciarJogo")[0].onclick = () => {
    alert("inicio jogada")
    for (let i = jogadasRaj.length; i != 0; i--) {

        displayJogadaRaj.innerHTML = jogadasRaj[i];
        displayJogadaSheldon.innerHTML = jogadasSheldon[i];

        comparaJogadas(jogadasRaj[i], jogadasSheldon[i]);
        if (vencedor == jogadasRaj[i]) {
            ptsRaj += 1;
            placarAtual = `${ptsRaj} X ${ptsSheldon}`;
            placar();
            alert("Sheldon diz: Raj trapaceou!")
        } else if (vencedor == jogadasSheldon[i]) {
            ptsSheldon += 1;
            placarAtual = `${ptsRaj} X ${ptsSheldon}`;
            placar();
            alert("Sheldon diz: BAZINGA!")
        } else if (vencedor == 'empate') {
            ptsRaj += 1;
            ptsSheldon += 1;
            placarAtual = `${ptsRaj} X ${ptsSheldon}`;
            placar();
            alert("Sheldon diz: De novo!")
        }

    }
}

document.getElementsByClassName("reiniciarJogo")[0].onclick = function reload() {
    window.location.reload();
    console.log("reload")
}

