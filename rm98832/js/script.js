// //iniciando pasta em JavaScript
// //capturando a tag com ID e colocando em uma variavel var
// var h1Elemento = document.getElementById("titulo-1")
// //adicionando evento de listener
// h1Elemento.addEventListener("click",function(){
//     h1Elemento.innerHTML = "Novo Titulo"
//     h1Elemento.style.backgroundColor = "#ff0000"
// })
// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })
// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "32px"
// })
// //declaração de variaveis com var let e const
// let name = "Pedro"
 
// if(name != ""){
//     let name = "rodrigo"
//     console.log(name)
// }
//  console.log(name)

//estrutura de decisão if/else
//operadores logicos
// && and
// || or
// ! not
// != diferente
// let nome 
// if(nome = "" || nome == undefined=={} || nome == null) {
//     console.log("a variavel está vazia")
// }else{
//     console.log("a variavel está preenchida")
// }
// console.log(nome)

//operadores relacionais
// > maior
// < menor
// igual

// operador ternario
// ?
// let num = 10;
// let num2 = 5;
// //crie uma validação ternaria, na qual resulte no valor de par ou impar:
// let resultado = !(10 % 5) ? "PAR" : "IMPAR"
// console.log("o numero que está sendo manipulado é : " + resultado)
 
//declarando um array
// let nomes =["matheus","fernando","joao","eric","rodrigo"];
// console.log(nomes);
// console.table(nomes);

// //imprimir apenas um elemento
// console.log(nomes[0]);

//recuperando elementos de lista atraves da fução getElementsByTagName
//const itensDeLista = document.getElementsByTagName("li");

let num1 = [10,20,30];
let num2 = [40,50,60,70,80];
let num3 

num3 = [num1 , num2];
//apresentando interpolação junto com arreys
console.log("valor de array 3: " + num3)