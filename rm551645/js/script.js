//Capturando a tag com ID e colocando em uma variável var
//const h1Elemento = document.getElementById("titulo-1")

//Adicionando um Listener de Evento
h1Elemento.addEventListener("click", function(){

    alert("Agora sou autônomo!")
    h1Elemento.textContent = "NOVO TÍTULO";
    h1Elemento.style.backgroundColor = "#DA70D6"

})

h1Elemento.addEventListener("mouseover", ()=>{

    h1Elemento.style.fontSize = "68px"

})

h1Elemento.addEventListener("mouseleave", ()=>{

    h1Elemento.style.fontSize = "34px"

})

//Declaração de variáveis com LET e VAR e CONST

var nome = "Bianca"

if(nome != ""){
    let nome = "Emanuelle"
}

//Imprimindo o valor da variável
console.log(nome)

//let nome = "Bianca"
//const nome = "Bianca"

//______________________________________________________________________31/03/2023
// Estrutura de decisão IF / else / else if
// Operadores lógicos
// && AND
// || OR
// !  NOT
// != NOT/DIFERENTE

// let nome = "Bianca";

// if (nome !="" && nome != undefined) {
//     console.log("A variável está preenchida")
// } else if (nome == null) {
//     console.log("A variável é null")
// } else {
//     console.log("A variável não está preenchida")
// }

//______________________________________________________________________
// OPERADORES TERNÁRIO ( ? )

let num1 = 10;
let num2 = 5;

//Crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR!

let resultado = !(10 % 5) ? "PAR" : "ÍMPAR";
// % é o operador módulo, que retorna o resto
console.log("O número que está sendo manipulado é : " + resultado)

//______________________________________________________________________04/04/2023
//DECLARANDO UM ARRAY

let nome = ["nome 1", "nome 2", "nome 3"]

console.log(nomes)
console.table(nomes)

//IMPRIMIR APENAS UM NOME DO ARRAY

console.log(nomes[2])

//Recuprando elementos de lista através da função
//getElementByTagName
const itemsDeLista = document.getElementsByTagName("li")

let num1 = [10,20,30]
let num2 = [40,50,60,70,80]
let num3

num3 = [num1,num2]
// [] e , para fazer a junção o array

//Apresentando interpolação junto com arrays
console.log("Valor do array 3" + num3)

//Realizando a junção de arrays com o operador SPREAD (...)
let num1 = [10,20,30]
let num2 = [40,50,60,70,80]
let num3

num3 = [...num1,...num2]

//Apresentando interpolação junto com arrays
console.log("Valor do array 3" + num3)

//Recuprando elementos de lista através da função
//getElementByTagName
const itemsDeLista = document.getElementsByTagName("li")

const obj1Array = [...itemsDeLista]

console.log(itemsDeLista)
console.log(obj1Array)

itemsDeLista.forEach( item => {

    console.log(`ITEM DA LISTA :${item}`)

})