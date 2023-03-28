// ///Capturando a tag com id e colocando em uma variavel VAR

// var h1Elemento = document.getElementById("titulo-1")

// //adicionando um listener/escitador de evento

// h1Elemento.addEventListener("click", function(){
//     alert("Agora sou autonomo")
//     h1Elemento.innerHTML = "NOVO TIIIIIIIIIIIITULOS!";
//     h1Elemento.style.backgroundColor = "#00ff"
// })
// h1Elemento.addEventListener("mouseover", ()=>{
// h1Elemento.style.fontSize = "69px"
// })
// h1Elemento.addEventListener("mouseleave",()=>{
//    h1Elemento.style.fontSize = "34px"
// })
// //Declaração de variaveis com LET VAR e CONST

// var   Nome = "Pedro"
// let   nome = "Pedro"
// const noMe = "Pedro" // const nao pode ter seu valor alterado


//operadores lógicos
// && = AND
//|| = OR
//! NOT
// != DIFERENTE
let nome = "pedro"
if (nome != "" && nome != undefined){
        console.log("A variavel nao esta preenchida")
}else{
    console.log("A variavel esta preenchida")
}
//operador TERNARIO ( ? )
// 
//
let num = 10;
let num1 = 5;
//crie uma validação ternaria onde resulte no valor de PAR ou impar 
let resultado = !(10%5) ? "PAR" : "IMPAR"

console.log("O numero que esta sendo manimulado é : " + resultado)