var h1Elemento = document.getElementById("titulo-1")

h1Elemento.addEventListener("click", function() {
    alert("Sou um alerta")
    h1Elemento.innerHTML = "NOVO TITULO"
    h1Elemento.style.backgroundColor = "red"
})

h1Elemento.addEventListener("mouseover", ()=> {
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=> {
    h1Elemento.style.fontSize = "34px"
})