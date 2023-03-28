var h1Elemento = document.getElementById("titulo-1")

h1Elemento.addEventListener("click",function(){

    alert("Agora sou autonômo")
    h1Elemento.innerHTML = "Novo Titulo";
    h1Elemento.style.backgroundColor = "#ff0000"
})

h1Elemento.addEventListener("mouseover", ()=>
    h1Elemento.style.fontSize="68px"
)