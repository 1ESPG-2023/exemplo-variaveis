//iniciando pasta em JavaScript
//capturando a tag com ID e colocando em uma variavel var
var h1Elemento = document.getElementById("titulo-1")
//adicionando evento de listener
h1Elemento.addEventListener("click",function(){
    alert("agora sou autonomo")
})
//declaração de variaveis com var let e const
var name = "Pedro"
 
if(name != ""){
    var name = "rodrigo"
}
 console.log(name)