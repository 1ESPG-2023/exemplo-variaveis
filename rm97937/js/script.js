// //Capturando a tag com ID e colocando em uma variável var
// const h1Elemento = document.getElementById("titulo-1")
// //Adicionando um Listener de Evento
// h1Elemento.addEventListener("click", function(){
//     alert("Agora sou autônomo!")
//     h1Elemento.innerHTML = "Novo título!";
//     h1Elemento.style.backgroundColor = "#FF0000"
// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px";
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px";
// })

// //Declaração de variáveis com let, var e const

// var nome1 = "Pedro" //O conteúdo da variável pode ser alterado durante a execução do programa

// if (nome1 != ""){
//     let nome1 = "Emanuelle"
// }

// console.log(nome1)

// //let nome2 = "Pedro" //O conteúdo da variável pode ser alterado durante a execução do programa
// //const nome3 = "Pedro" //O conteúdo da variável NÃO pode ser alterado durante a execução do programa

//Estrutura de decisão if - else - else if
//Operadores lógicos: && => and, || => or, ! => not, != => not equal

let nome = null
console.log(nome)
if(nome != "" && nome != undefined) {
    console.log("A variável está preenchida")
}

else if(nome == null) {
    console.log("A variável é null")
}

else {
    console.log("A variável não está preenchida")
}

//Operadores relacionais são os mesmos que os do python.

//Operador ternário: (?)

let num1 = 10;
let num2 = 5;

//Criando uma validação ternária onde resulte no valor de PAR ou IMPAR:

let resultado = !(10%5) ? "Par" : "Impar";
console.log("O número que está sendo manipulado é " + resultado)