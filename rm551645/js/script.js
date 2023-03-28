// //Capturando a tag com ID e colocando em uma variável var
// //const h1Elemento = document.getElementById("titulo-1")

// //Adicionando um Listener de Evento
// h1Elemento.addEventListener("click", function(){

//     alert("Agora sou autônomo!")
//     h1Elemento.textContent = "NOVO TÍTULO";
//     h1Elemento.style.backgroundColor = "#DA70D6"

// })

// h1Elemento.addEventListener("mouseover", ()=>{

//     h1Elemento.style.fontSize = "68px"

// })

// h1Elemento.addEventListener("mouseleave", ()=>{

//     h1Elemento.style.fontSize = "34px"

// })

// //Declaração de variáveis com LET e VAR e CONST

// var nome = "Bianca"

// if(nome != ""){
//     let nome = "Emanuelle"
// }

// //Imprimindo o valor da variável
// console.log(nome)

// //let nome = "Bianca"
// //const nome = "Bianca"

//______________________________________________________________________
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