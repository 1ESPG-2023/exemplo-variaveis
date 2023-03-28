

//Capturando a tag com o ID e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")

//Adicionando um listener de evento
h1Elemento.addEventListener("click", function(){

alert("Agora sou autônomo!")
h1Elemento.textContent = "NOVO TÍTULO";
h1Elemento.style.backgroundColor = "#ff0000"
})


h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "34px"
})
//Declaração de variáveis com let var e const

var nome = "Pedro"

if(nome != ""){
    var nome = "Emanuelle"
}

//Imprimindo o nome para ser impresso
console.log(nome)