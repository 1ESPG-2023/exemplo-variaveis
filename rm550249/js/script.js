//capturando a tag com id e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")

//Adicionando um listener de Evento
h1Elemento.addEventListener("click", function(){

alert("agora sou autonômo")
h1Elemento.innerHTML = "UHULLLL"
h1Elemento.style.backgroundColor = "#ff0000"

})
h1Elemento.addEventListener("mouseover", ()=>(
    h1Elemento.style.fontSize = "68px"
))
h1Elemento.addEventListener("mouseleave", ()=>(
    h1Elemento.style.fontSize = "34px"
))

//Delcaração de variáveis com LET, VAR e CONST

var nome = "Eric"
if (nome != ""){
    let nome = "Rodrigues"
} 

console.log(nome)