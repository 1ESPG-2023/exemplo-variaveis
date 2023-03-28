

//Capturando a tag com ID e colocando em uma variável var
const h1Element = document.getElementById("titulo-1")

//Adicionando um Listener de Evento
h1Element.addEventListener("click",function(){

    alert("Agora sou autonômo")    
    h1Element.textContent = "Novo título";
    h1Element.style.backgroundColor = "#ff0000";

})

h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.fontSize = "48px"
})

h1Element.addEventListener("mouseleave", ()=>{
    h1Element.style.fontSize = "34px"
})


//Declaração de variaveos com LET, VAR e CONST

var name = "Ricardo" 
if(nome != ""){
    var nome = "Neto"
}

console.log(nome)



//let name = "Ricardo"
//const name = "Ricardo"
