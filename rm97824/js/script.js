// var h1Elemento = document.getElementById("titulo-1")

// h1Elemento.addEventListener("click", function() {
//     alert("Sou um alerta")
//     h1Elemento.innerHTML = "NOVO TITULO"
//     h1Elemento.style.backgroundColor = "#FFA07A"
// })

// h1Elemento.addEventListener("mouseover", ()=> {
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=> {
//     h1Elemento.style.fontSize = "34px"
// })

// estrutura de decisao if / else / else if
// operadores lógicos
// && = and
// || = or
// ! = not / different
// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined){
//     console.log("A váriavel está preenchida")
// }
// else if(nome == null) {
//     console.log("A váriavel é null")
// }
// else {
//     console.log("A váriavel não esta preenchida")
// }

// operádores ternário ( ? )

// let num1 = 10
// let num2 = 5

// //crie uma validação ternaria onde resulte em valor de par ou impar
// let resultado = !(10 % 5) ? "PAR" : "IMPAR"

// console.log("O numero que esta sendo manipulado é: " + resultado)

//declarando array
// let nomes = ["Vinicius", "Ricardo", "Guilherme", "Pedro"]

// console.log(nomes)
// console.table(nomes)

// //Imprimir apenas um item do array
// console.log(nomes[1])

//Recuperando elementos de lista através da função
//getElemetByTagName
//const itemsDeLista = document.getElementsByTagName("li")

// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3 

// num3 = [...num1, ...num2]
// //apresentando interpolação junto com arrays
// console.log("Valor do array 3: " + num3)

//Recuperando elementos de lista através da função
//getElemetByTagName
const itemsDeLista = [...document.getElementsByTagName("li")]

// const obj1Array = [...itemsDeLista]

itemsDeLista.forEach( item =>{
    console.log(`ITEM DA LISTA :${item.textContent}`)
})
//onsole.log(itemsDeLista[0].textContent)