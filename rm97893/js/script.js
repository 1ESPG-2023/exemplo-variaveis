// // capturando a tag com id e colocando em uma varíavel var 
// const h1elemento = document.getElementById("Título-1")

// // adcionando um  listener de evento 
// h1elemento.addEventListener("click", function(){

//     alert("agora sou autonomo!")
//     h1elemento.innerHTML = "NOVO TITULO"
//     h1elemento.style.backgroundColor = "#ff0000"
// })

// h1elemento.addEventListener("mouseover", ()=>{
//     h1elemento.style.fontSize = "68px"
// })

// h1elemento.addEventListener("mouseleave", ()=>{
//     h1elemento.style.fontSize = "34px"
// })

// //declaração de variavies com let var e const 

// var nome = "pedro" // podem mudar de valor ao decorrer do cod 
// let Nome = "pedro" // pode mudar de valor ao decorrer do cod 
// const noMe = "pedro " // não muda de valor  agora

// if(nome != ""){ 
//     var nome = murilo
// }

// //nome a ser impresso
// console.log(nome)

// Estrutura de decisão IF / else / else if
// Operadores lógicos
// && AND
// || OR
// ! NOT
// != NOT / DIFFERENT

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida!")
// }
// else if(nome == null){
//     console.log("A variável é null!")
// }
// else{
//     console.log("A variável não está preenchida!")
// }

// Operador Ternário ( ? )

// let num1 = 10;
// let num2 = 5;

// Crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR!

// let resultado = 10%5 == 0 ? "PAR" : "ÍMPAR"
// console.log("O número que está sendo manipulado é :" + resultado)


//Declarando um array
// let nomes = ["nome1", "nome2", "nome3"]

// console.log(nomes)
// console.table(nomes)

//IMPRIMIR APENAS UM ITEM DO ARRAY
// console.log(nomes[1])

//getElementByTagName
// const itemsDeLista = document.getElementsByTagName("li")

// let num1 = [10,20,30]
// let num2 = [40,50,60,70,80]
// let num3

// num3 = [...num1,...num2]
// // //Apresentando Interpolação junto com arrays
// console.log("Valor do array 3: " + num3)

//Recuperando elementos da lista através de função
//getElementByTagName
// const itemsDeLista = document.getElementsByTagName("li")

// const objArray = [...itemsDeLista]

// itemsDeLista.array.forEach( item =>{

//     console.log(`ITEM DA LISTA :${item.textContent}`)
//     // console.log(itemsDeLista[0].textContent)
// });

// console.log(objArray)

// const itemsDeLista = [...document.getElementsByTagName("li")]
// Loop for
// for (let index = 0; index < itemsDeLista.length; index++) {
//     console.log(`Itens da lista : ${itemsDeLista[index].textContent}`)
    
// }

// const itemsDeLista = [...document.getElementsByTagName("li")]
// //Loop FOR OF

// for (const item of itemsDeLista) {
//     console.log(`Itens da lista com For Of: ${item.textContent}`)
// }

const itemsDeLista = [...document.getElementsByTagName("li")]
//Loop IN

for (const indice in itemsDeLista) {
    console.log(`Itens da lista com For In :${itemsDeLista[indice].textContent}`)
}