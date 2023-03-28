

// //Capturando a tag com ID e colocando em uma variável var
// const h1Element = document.getElementById("titulo-1")

// //Adicionando um Listener de Evento
// h1Element.addEventListener("click",function(){

//     alert("Agora sou autonômo")    
//     h1Element.textContent = "Novo título";
//     h1Element.style.backgroundColor = "#ff0000";

// })

// h1Element.addEventListener("mouseover", ()=>{
//     h1Element.style.fontSize = "48px"
// })

// h1Element.addEventListener("mouseleave", ()=>{
//     h1Element.style.fontSize = "34px"
// })


// //Declaração de variaveos com LET, VAR e CONST

// var name = "Ricardo" 
// if(nome != ""){
//     var nome = "Neto"
// }

// console.log(nome)



// //let name = "Ricardo"
// //const name = "Ricardo"

//Estrutura de decisão IF / Else / Else If
//Operadores lógicos
// && AND 
// || OR
// ! NOT
// != NoT / DIFFERENT

let nome = null
console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida")
// }else if(nome == null){
//     console.log("A variável é null")
// }else{
//     console.log("A variável não está preenchida")
// }

// Operador ternário ( ? )
let num1 = 10;
let num2 = 5;

//Crie uma validação ternária onde resulte no valor de par o impar

let resultado = !(num1%num2) ? "PAR" : "IMPAR"
console.log("O numero que esta sendo manipulado é: "+ resultado)
