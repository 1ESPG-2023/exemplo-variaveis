// //capturando a tag com id e colocando em uma variavel var
// const h1Elemento = document.ELementById("titulo-1")

// //adicionar um Listener de evento
// h1Elemento.addEventListener("click",function(){

//     alert("agora sou autonomo!")
//     h1Elemento.innerHTML= "NOVO TITULO";
//     h1Elemento.style.backgroundColor = "#ff0000"

// })

// h1Elemento.addEventListenner("mouseover", ()=>{
//     h1Elemento.style.fontsize="68px"
// })

// h1Elemento.addEventListenner("mouseleave", ()=>{
//     h1Elemento.style.fontsize="34px"
// })


// //declaração com let e var const

// var nome = "Pedro"

// if(nome != ""){
//     let nome = "Emanuelle"
// }

// //imprimindo o valor da variavel 
// console.log(nome)

// nome = "teste"
// console.log(nome)
// var nome
 
//estrutura de decisão if  else e else if 
//operadores logicos
// && and
// || OR 
//!= NOT / DIFERENTE

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("a variavel esta preenchida")
// }else if(nome==null){
//     console.log("a variavel é null")
// }
// else{
//     console.log("a variavel não esta preenchida")
// }

// operador ternario (?), veririfcar s eum numero é par ou impar

let num1 = 10;
let num2 = 5;

//crie uma validação ternaria onde resulte no valro de par ou impar 

let resultado = !(10 % 5) ? "par" : "impar";
console.log("o numero que esta sendo manipulado é: " + resultado)
