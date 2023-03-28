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
let nome = null
console.log(nome)

if (nome !="" && nome != undefined) {
    console.log("A variável está preenchida!")
}else if(nome == null){
    console.log("A variável é null")
}
else {
    console.log("A variável não esta preenchida")
}


//Operador Ternário (?)

let num1 = 10;
let num2 = 5;

//Crie uma validação onde resulte em valor PAR ou IMPAR!

let resultado = !(10%5) ? "PAR" : "IMPAR";

console.log("O número que esta sendo manipulado é : " + resultado)

