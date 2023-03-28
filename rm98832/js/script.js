//iniciando pasta em JavaScript
//capturando a tag com ID e colocando em uma variavel var
var h1Elemento = document.getElementById("titulo-1")
//adicionando evento de listener
h1Elemento.addEventListener("click",function(){
    h1Elemento.innerHTML = "Novo Titulo"
    h1Elemento.style.backgroundColor = "#ff0000"
})
h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "68px"
})
h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "32px"
})
//declaração de variaveis com var let e const
let name = "Pedro"
 
if(name != ""){
    let name = "rodrigo"
    console.log(name)
}
 console.log(name)


