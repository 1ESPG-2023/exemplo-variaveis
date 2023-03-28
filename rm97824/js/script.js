var h1Elemento = document.getElementById("titulo-1")

h1Elemento.addEventListener("click", function() {
    alert("Sou um alerta")
    h1Elemento.innerHTML = "NOVO TITULO"
    h1Elemento.style.backgroundColor = "#FFA07A"
})

h1Elemento.addEventListener("mouseover", ()=> {
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=> {
    h1Elemento.style.fontSize = "34px"
})

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

let num1 = 10
let num2 = 5

//crie uma validação ternaria onde resulte em valor de par ou impar
let resultado = !(10 % 5) ? "PAR" : "IMPAR"

console.log("O numero que esta sendo manipulado é: " + resultado)