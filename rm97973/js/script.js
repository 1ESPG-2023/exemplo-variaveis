// // dicas no mdn web docs

// // Capturando a tag com ID e colocando em uma variavél var
// const h1Elemento = document.getElementById("titulo-1")

// // Adicionando um listener de evento 
// h1Elemento.addEventListener("click",function(){

//     alert("agora sou atônomo!")
//     h1Elemento.innerHTML = "Novo título!";
//     h1Elemento.style.backgroundColor = "#FB607F"

// })
// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize="60px"
// })
// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontsize="34px"
// })

// // Declaração de vaiaveis como LET, VAR e CONST

// // const nome = "Pedro" //conteudo não pode ser alterado depois

// var nome = "Pedro" // é considerado global

// if(nome != ""){
//     var nome = "Emanuelle"
// }
// //Imprimindo o valor da variável
// console.log(nome)

// // let nome = "Pedro"

// estrutura de decisao if / else / else if
// operadores lógicos
// && AND
// || or
// != NOT/DIFERENTE

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined)  {
//     console.log("A variavél está preenchida!")
// }
// else if(nome == null){
//     console.log("A variavél é null!")
// }
// else{
//     console.log("A variavél não está preenchida!")
// }

// Operadores relacionais
// igual python

// Operador ternário (?), verificar s um numero é par ou impar 

let num1 = 10;
let num2 = 5;

// crie uma validação ternária onde resulte no valor de PAR ou Impar

let resultado = !(10%5) ? "par" : "impar" ;
console.log("O número que está sendo manipulado é: " + resultado)
