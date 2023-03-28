

//Capturando a tag com ID e colocando em uma variavel var
var h1Elemento = document.getElementById("título-1")

// Adicionando um listener de evento 
h1Elemento.addEventListener("click", function(){
    alert("Agora sou autônomo")
    h1Elemento.innerHTML = "NOVO TÍTULO"
    h1Elemento.style.backgroundColor = "#ff0000"
})

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "34px"
})

// Declaração de variaveis com LET e VAR e CONST

var nome = "Pedro"
//let nome = "Pedro"
// const nome = "Pedro"
if(nome != ""){
    let nome = "Emanuelle"
}

//Imprimindo o valor da variavel
console.log(nome)