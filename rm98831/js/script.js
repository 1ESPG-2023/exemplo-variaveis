

//Capturando a tag com ID e colocando em uma variável var
const h1Elemento = document.getElementById("titulo-1")

//Adicionando um Listener de Evento
h1Elemento.addEventListener("click", function(){

    alert("Agora sou autonônomo!")
    h1Elemento.innerHTML = "NOVO TÍTULO!";
    h1Elemento.style.backgroundColor = "#ff0000"

})

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "34px"
})
//Declaração de variáveis com LET e VAR e CONST

var nome = "Pedro"

if(nome != ""){
    let nome = "Emanuelle"
}

console.log(nome)
//let nome = "Pedro"
//const nome = "Pedro"

