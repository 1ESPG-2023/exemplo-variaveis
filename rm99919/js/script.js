// // const h1Elemento = document.getElementById("titulo-1") 

// //adicionando um listener evenet 
// // h1Elemento.addEventListener("click", function(){ 
// //     alert("Alerta!" );
// //     h1Elemento.innerHTML = "Novo titulo"; 
// //     h1Elemento.style.backgroundColor = "#ff0000" 
// // }) 

// // h1Elemento.addEventListener("mouseover", function(){ 
// //     h1Elemento.style.fontSize = "58px" 
// // }) 

// // h1Elemento.addEventListener("mouseleave", function(){ 
// //     h1Elemento.style.fontSize = "34px" 
// // }) 

// // var nome = "Fernando" 
// //let nome1 = "Fernando" 
// //const nome2 = "Fernando" 
// // if(nome != ""){ 
// //     var nome="Pedro" 
// //     let nome1="Pedro" 
// //     const nome2="Pedro" 
// //     console.log(nome) 
// //     console.log(nome1) 
// //     console.log(nome2) 
// // } 

// // console.log(nome) 
// // console.log(nome1) 
// // console.log(nome2) 

// //estrutura de decisão if / else / elif 
// //operadores lógicos  
// // &&and  
// // != no 
// // ||or 

// // let nome =null 
// // if (nome != "" && nome!= undefined ) { 
// //     console.log("A variavel está preenchida") 
// // }else if(nome == null){ 
// //     console.log("A variavel é null") 
// // } 
// // else{ 
// //     console.log("A variavel está vazia") 
// // } 

// OPERADORES RELACIONAIS 
// > MAIOR 
// < MENOR 
// >= MAIOR OU IGUAL 
// <= MENOR OU IGUAL 
// != DIFERENTE 
// == IGUAL 
// */ 

// /*OPERADOR TERNARIO*/ 
// let num= 10 ; 
// let num2 = 5;   
// //crie uma validacao ternario onde resulte no valor de par ou impar 
// let resultado = !(10%5) ? "Par" : "Impar" 
// console.log("O numero que está sendo manipulado é: " + resultado) 

// //declarando o array
// let nome = ["Ana", "Pedro", "Caua"]

// console.table(nome)

// //imprimindo apenas um item
// console.log(nome[1])

//recuperando elementos da lista através da função get.ElementTagName
//const itemDElista = document.getElementsByTagName("li")

let num1=[10,20,30]
let num2=[40,50,60,70,80]
let num3

num3 = [num1, num2]
//apresentando interpolação junto com arrays
console.log("Valor da array 3" + num3)