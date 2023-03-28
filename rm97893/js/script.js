// // capturando a tag com id e colocando em uma varíavel var 
// const h1elemento = document.getElementById("Título-1")

// // adcionando um  listener de evento 
// h1elemento.addEventListener("click", function(){

//     alert("agora sou autonomo!")
//     h1elemento.innerHTML = "NOVO TITULO"
//     h1elemento.style.backgroundColor = "#ff0000"
// })

// h1elemento.addEventListener("mouseover", ()=>{
//     h1elemento.style.fontSize = "68px"
// })

// h1elemento.addEventListener("mouseleave", ()=>{
//     h1elemento.style.fontSize = "34px"
// })

// //declaração de variavies com let var e const 

// var nome = "pedro" // podem mudar de valor ao decorrer do cod 
// let Nome = "pedro" // pode mudar de valor ao decorrer do cod 
// const noMe = "pedro " // não muda de valor  agora

// if(nome != ""){ 
//     var nome = murilo
// }

// //nome a ser impresso
// console.log(nome)

// Estrutura de decisão IF / else / else if
// Operadores lógicos
// && AND
// || OR
// ! NOT
// != NOT / DIFFERENT

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida!")
// }
// else if(nome == null){
//     console.log("A variável é null!")
// }
// else{
//     console.log("A variável não está preenchida!")
// }

// Operador Ternário ( ? )

let num1 = 10;
let num2 = 5;

// Crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR!

let resultado = 10%5 == 0 ? "PAR" : "ÍMPAR"
console.log("O número que está sendo manipulado é :" + resultado)