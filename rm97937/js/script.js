//Capturando a tag com ID e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")
//Adicionando um Listener de Evento
h1Elemento.addEventListener("click", function(){
    alert("Agora sou autônomo!")
})

//Declaração de variáveis com let, var e const

var nome1 = "Pedro" //O conteúdo da variável pode ser alterado durante a execução do programa

if (nome1 != ""){
    let nome1 = "Emanuelle"
}

console.log(nome1)

//let nome2 = "Pedro" //O conteúdo da variável pode ser alterado durante a execução do programa
//const nome3 = "Pedro" //O conteúdo da variável NÃO pode ser alterado durante a execução do programa
