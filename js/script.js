

//Capturando a tag com ID
var h1Elemento = document.getElementById("Titulo-1")

//adicionando um Listener de Evento
h1Elemento.addEventListener("click",function(){

    alert("Agora sou autonômo")
    h1Elemento.innerHTML = "Novo Título"; // (.textContent) após o click e alert ele altera o título
    h1Elemento.style.backgroundColor = "#FF0000
})

h1Elemento.addEventListener("mouseover", ()=>(
    h1Elemento.style.fontSize = "68px"

))

h1Elemento.addEventListener("mouseleave", ()=>(
    h1Elemento.style.fontSize = "34px"
))
//Declaração de Variaveis com LET e VAR e CONST

//const nome = "Pedro"


var nome = "Pedro"

if(nome != ""){
    let nome = "Lucas"
}


//imprimindo o valor da variável
console.log(nome)

