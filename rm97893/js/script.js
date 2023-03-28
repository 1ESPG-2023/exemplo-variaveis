/* // capturando a tag com id e colocando em uma varíavel var 
const h1elemento = document.getElementById("Título-1")

// adcionando um  listener de evento 
h1elemento.addEventListener("click", function(){

    alert("agora sou autonomo!")
    h1elemento.innerHTML = "NOVO TITULO"
    h1elemento.style.backgroundColor = "#ff0000"
})

h1elemento.addEventListener("mouseover", ()=>{
    h1elemento.style.fontSize = "68px"
})

h1elemento.addEventListener("mouseleave", ()=>{
    h1elemento.style.fontSize = "34px"
})

//declaração de variavies com let var e const 

var nome = "pedro" // podem mudar de valor ao decorrer do cod 
let Nome = "pedro" // pode mudar de valor ao decorrer do cod 
const noMe = "pedro " // não muda de valor  agora

if(nome != ""){ 
    var nome = murilo
}

//nome a ser impresso
console.log(nome) */