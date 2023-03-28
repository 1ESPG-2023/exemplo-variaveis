
// //Capturando a tag com ID e colocando em uma variável var
// const h1Elemento = document.getElementById("titulo-1")

// //Adicionando um Listener de Evento
// h1Elemento.addEventListener("click",function(){

//     alert("Agora sou autonômo!")
//     h1Elemento.innerHTML = "NOVO TÍTULO!";
//     h1Elemento.style.backgroundColor = "#ff0000"
// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px"
// })

// //Declaração de variáveis com LET e VAR e CONST

// //const nome = "Pedro"

// var nome = "Pedro"

// if(nome != ""){
//     var nome = "Emanuelle"
// }

// //Imprimindo o valor da variável
// console.log(nome)

//Estrutura de decisão IF / else / else if
//Operadores lógicos
// && AND
// || OR
// ! NOT
// != NOT / DIFERENTE

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida!")
// }else if(nome == null){
//     console.log("A variável é null !")
// }
// else{
//     console.log("A variável não está preenchida!")
// }

//OPERADOR TERNÁRIO ( ? )

let num1 = 10;
let num2 = 5;

//Crie um validação ternária onde resulte no valor de PAR ou IMPAR!

let resultado = !(10%5) ? "PAR" : "IMPAR";

console.log("O nÚmero que está sendo manipulado é : " + resultado)
