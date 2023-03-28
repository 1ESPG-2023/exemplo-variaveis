/* //capturando a tag com ID e colocando em uma variável var
const h1Elemento = document.getElementById("titulo-1")

//adicionando um listener de evento
//ponto para alterar propriedades
h1Elemento.addEventListener("click",function(){

    alert("agora sou autônomo")
    h1Elemento.innerHTML = "NOVO TÍTULO!";
//h1Elemento.textContent = "NOVO TÍTULO!";
    h1Elemento.style.backgroundColor = "#ffbade"

})

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "34px"
})


//declaração de variáveis com LET e VAR e CONST

//const nome = "Pedro"

var nome = "Pedro"
if(nome !=""){
    let nome = "Lana"
}

//imprimindo o valor da variável
console.log(nome)
*/

//estrutura de decisão if / else / else if 
//operadores lógicos 
//&& AND
//|| OR
// != NOT / DIFERENTE

/*let nome = null
console.log(nome)

if(nome!="" && nome !=undefined) {
    console.log("A variável está preenchida")
}else if(nome==null){
    console.log("A variável é null")
}
else{
console.log("A variável não está preenchida")
}
*/

//operadores relacionais igual do python 

//operador ternário

let num1 = 10;
let num2 = 5;

//crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR
//let resultado = 10%5 ?"PAR" : "ÍMPAR";
// lê como positivo logo se resultado é 0 dá ímpar(false)
let resultado = !(10%5) ?"PAR" : "ÍMPAR";
console.log("O número que esá sendo manipulado é:" + resultado)
