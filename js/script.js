// //Capturando a tag com ID e colocando em uma váriavel var
// var h1Elemento = document.getElementById("titulo-1")

// //Adicionando um Listene de Evento
// h1Elemento.addEventListener("click", function(){

//     alert("Agora sou autônomo");
//     h1Elemento.textContent = "NOVO TÍTULO!";
//     h1Elemento.style.backgroundColor = "#ff0000"

// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px"
// })

// //DECLARAÇÃO DE VARIAVEIS COM VAR LET E CONS

// var nome = "Pedro"

// if(nome != ""){
//     var nome = "Lucas"
// }

//imprimindo valor de variavel
// console.log(nome)

//Estrutura de decisão IF / else/ else if

//Operadores lógicos
//&& = and
//|| = or
//! = not
//!= = not equal

//Declarando um array
// let nomes = ["nome1","nome2","nome3"]

// console.log(nomes)
// console.table(nomes)

// //Imprimir apenas um item do array
// console.log(nomes[1])

//Recuperando elementos de lista através da função 
//getElementByTagName
//const itensDeLista = document.getElementsByTagName("li")

let num1 = [10,20,30]
let num2 = [40,50,60,70,80]
let num3

num3 = [num1,num2]
//Apresentando interpolação junto com arrays com o operador SPREAD (...)
console.log("Valor do array 3 " + num3)

