// capturando a tag com id e colocando em uma varíavel var 
 /*const h1elemento = document.getElementById("Título-1")

// adcionando um  listener de evento 
h1elemento.addEventListener("click", function(){

    alert("agora sou autonomo!")
    h1elemento.innerHTML = "Novo título"
    h1elemento.style.backgroundColor = "#ff0000"
})

h1elemento.addEventListener("mouseover", function(){
    h1elemento.style.fontSize = "68px"
})

h1elemento.addEventListener("mouseleave",function(){
    h1elemento.style.fontSize = "32px"
})
//declaração de variavies com let var e const 

var nome = "pedro" // podem mudar de valor ao decorrer do cod 
let Nome = "pedro" // pode mudar de valor ao decorrer do cod 
const noMe = "pedro " // não muda de valor 

if(nome != ""){ 
    let nome = enzo 
}

//nome a ser impresso
console.log(nome) */

// operados Lógicos
// && and
// ! negação 
// || or 
// ! diferente


//operadores relacionais
// > maior
//< menor
// >= maior igual
// <= menor igual 
// == igual
// != diferente 

// let nome = null

// if (nome != "" && nome != undefined) {
//     console.log("a variavel esta preenchida")
// }else if(nome == null){
//     console.log("a variavel é null")
// }

//operador ternario

// let num = 10;
// let num2 = 5;

// //crie uma validação ternaria onde resulte em par ou impar
// let resulado = 10%5 == 0  ? "par" : "impar ";
// console.log("o numero é " + resulado)


// declarando um array 

// let nomes = ["enzo", "murilo", "vitinho"]

// console.log(nomes)

// //imprimir um unico índice

// console.log(nomes[0])


//recuperando elementos de lista atráves de função 
//getElementBy(id,class,tagName) 
//const itemsDeLista = document.getElementsByTagName("li")


//  let num1 = [10,20,30]
//  let num2 = [40,50,60,70,80]
//  let num3
 
//  num3 = [...num1,...num2]

// // apresentando interpolação junto com arrays
//  console.log("valor do array 3:" + num3 )

const itemsDeLista = document.getElementsByTagName("li")

const objArray = [...itemsDeLista]


itemsDeLista.forEach(item =>{
    console.log(`Item de lista ${item.textContent}`)
})