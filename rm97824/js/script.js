//Capturando tag html com ID e colocando em uma variavel var
var h1Elemento = document.getElementById("title-1")

//adicionando um escutador de evento
h1Elemento.addEventListener("click", function(){
    alert("Agora sou autonomo")
})

//declaração de variaveis com let, var e const

var nome = "Vinicius"  //var é mutavel

let nome = "Vinicius" //let não é mutavel

const nome = "Vinicius" //const é uma constante