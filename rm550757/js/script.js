

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

//let nome = null
//console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida")
// }else if(nome == null){
//     console.log("A variável é null")
// }else{
//     console.log("A variável não está preenchida")
// }

// Operador ternário ( ? )
//let num1 = 10;
//let num2 = 5;

//Crie uma validação ternária onde resulte no valor de par o impar

//let resultado = !(num1%num2) ? "PAR" : "IMPAR"
//console.log("O numero que esta sendo manipulado é: "+ resultado)

//Declarando um array
// let nomes = ["Ana", "Pedro", "Cauã"]

// //console.log(nomes)
// console.table(nomes)

// //imprimir apenas um item do arey
// console.log(nomes[0])

//Recuperando elementos de listas através da função
//getElemetTagName
//const itensDeLista = document.getElementsByTagName("li")

//Realizando a junção de arrays com o oerador SPREAD ( ... )
// let num1 = [10,20,30]
// let num2 = [40,50,60,70,80]
// let num3

// num3 = [...num1,...num2]
// //Apresentando interpolação junto com arrays
// console.log("Valor do array 3: " + num3)
// const itensDeLista = [...document.getElementsByTagName("li")]

// const obj1Array = [...itensDeLista]

// itensDeLista.forEach( item =>{

//     console.log(`Item da lista : ${item.textContent}`)
//     //console.log(itensDeLista[0].textContent)
// })

const itensDeLista = [...document.getElementsByTagName("li")]

// //Loop for

// for (let index = 0; index < itensDeLista.length; index++) {
//     console.log(`Itens da lista : ${itensDeLista[index].textContent}`)
// }

// for (const item of itensDeLista) {
//     console.log(`Itens da lista com ForOf : ${item.textContent}`)
// }

//FOR iN

for (const indice in itensDeLista) {
    console.log(`Itens da lista con ForIn ${itensDeLista[indice].textContent}`)
}