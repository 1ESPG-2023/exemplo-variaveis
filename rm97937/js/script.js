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

// let nome = null
// console.log(nome)
// if(nome != "" && nome != undefined) {
//     console.log("A variável está preenchida")
// }

// else if(nome == null) {
//     console.log("A variável é null")
// }

// else {
//     console.log("A variável não está preenchida")
// }

// //Operadores relacionais são os mesmos que os do python.

// //Operador ternário: (?)

// let num1 = 10;
// let num2 = 5;

// //Criando uma validação ternária onde resulte no valor de PAR ou IMPAR:

// let resultado = !(10%5) ? "Par" : "Impar";
// console.log("O número que está sendo manipulado é " + resultado)

// // Declarando um Array:

// let nomes = ["Ana", "Pedro", "Cauã"];
// console.log(nomes);
// console.table(nomes);

// //Imprimindo apenas um item do Array:

// console.log(nomes[1]);

//Recuperando elementos de lista através da função getElementByTagName
//Assinatura é o nome da função
//const itensDeLista = document.getElementsByTagName("li")

// //Realizando a junção de Arrays com o operador SPREAD(...)
// let num1 = [10, 20, 30,]
// let num2 = [40, 50, 60, 70, 80]
// let num3

// num3 = [...num1, ...num2]

// //Apresentando interpolação junto com Arrays:
// console.log("Valor do Array 3 " + num3)

//Recuperando elementos de lista através da função getElementByTagName
//Assinatura é o nome da função
const itensDeLista = [...document.getElementsByTagName("li")]
// const obj1Array = [...itensDeLista]

itensDeLista.forEach(item =>{
    console.log(`Item da Lista: ${item.textContent}`)    
})
//Quando você quiser manipular elementos HTMl em JavaScript, transforme-os em um Array, pois tem mais opções
