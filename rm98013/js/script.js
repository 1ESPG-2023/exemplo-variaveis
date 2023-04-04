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

// console.log(nome)

// DECLARANDO UM ARRAY

// let nomes = ["João","Vitor","Freddy"]

// console.log(nomes)
// console.table(nomes)

// // IMPRIMIR APENAS UM ITEM NO ARRAY

// console.log(nomes[1])

// Recuperando elementos de lista através da função
//getElementyByTagName

//const itensDeLista = document.getElementsByTagName("li")

let num1 = [10,20,30]
let num2 = [40,50,60,70,80]
let num3 

num3 = [num1,num2]
//apresentando interpolação junto com arrays
console.log("Valor do array 3 " + num3)
