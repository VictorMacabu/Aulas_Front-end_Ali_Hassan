
function calcNotasMoedas(){
//notas    
    var n100,n050,n020,n010,n005,n002 = 0;
//moedas
    var m100,m050,m025,m010,m005,m001 = 0;
 
    let entrada = document.getElementById("txtValor").value;
    let valor = entrada;
    
// calculando quantidade de notas
    n100 = valor / 100 ;
    valor = valor -  Math.floor(n100)*100;
    n050 = valor / 50 ;
    valor = valor -  Math.floor(n050)*50;
    n020 = valor / 20 ;
    valor = valor -  Math.floor(n020)*20;
    n010 = valor / 10 ;
    valor = valor -  Math.floor(n010)*10;
    n005 = valor / 5 ;
    valor = valor -  Math.floor(n005)*5;
    n002 = valor / 2 ;
    valor = valor -  Math.floor(n002)*2;
   //    -------- ^ NOTAS ^ --------
   //    -------- v MOEDAS v --------
   m100 = valor / 1.00 ;
   valor = valor - Math.floor (m100) * 1.00;
   m050 = valor / .50 ;
   valor = valor -  Math.floor(m050) * .50;
   m025 = valor / .25 ;
   valor = valor -  Math.floor(m025) * .25;
   m010 = valor / .10 ;
   valor = valor -  Math.floor(m010) * .10;
   m005 = valor / .05 ;
   valor = valor -  Math.floor(m005) * .05;
   m001 = valor / .01 ;
   valor = valor -  Math.floor(m001) * .01;

    let textSaida =`
    NOTAS:
    ${Math.floor(n100)} nota(s) de R$ 100.00
    ${Math.floor(n050)} nota(s) de R$ 50.00
    ${Math.floor(n020)} nota(s) de R$ 20.00
    ${Math.floor(n010)} nota(s) de R$ 10.00
    ${Math.floor(n005)} nota(s) de R$ 5.00
    ${Math.floor(n002)} nota(s) de R$ 2.00
    MOEDAS:
    ${Math.trunc(m100)} moeda(s) de R$ 1.00
    ${Math.trunc(m050)} moeda(s) de R$ 0.50
    ${Math.trunc(m025)} moeda(s) de R$ 0.25
    ${Math.trunc(m010)} moeda(s) de R$ 0.10
    ${Math.trunc(m005)} moeda(s) de R$ 0.05
    ${Math.trunc(m001)} moeda(s) de R$ 0.01` 
    document.getElementById("txtDinheiro").innerHTML = textSaida
   // console.log(document.getElementById("txtDinheiro").innerHTML = `O valor informado é ${entrada} e ${textSaida}`);
}