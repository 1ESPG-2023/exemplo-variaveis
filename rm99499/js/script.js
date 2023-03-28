/* // capiturando a tag por id e colocando em uma variável var

var h1Element = document.getElementById("title-1"); 

h1Element.addEventListener("click", function() {
    alert("Agora sou autonomo!");
});


// declaração de variáveis de let, var e const

var nome = "Guilherme";

if (nome !== "") {
    let nome = "Heloísa";
}
console.log(nome)

// const nome = "Guilherme";  */

const h1Element = document.querySelector("h1");

h1Element.addEventListener("click", function () {

    alert("agora sou atônomo!")
    h1Element.innerHTML = "Novo título!";
    h1Element.style.backgroundColor = "#FB607F"

})
h1Element.addEventListener("mouseover", () => {
    h1Element.style.fontSize = "60px"
})
h1Element.addEventListener("mouseleave", () => {
    h1Element.style.fontsize = "34px"
})