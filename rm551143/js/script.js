/* //capturando a tag com ID e colocando em uma variável var
const h1Elemento = document.getElementById("titulo-1")

//adicionando um listener de evento
//ponto para alterar propriedades
h1Elemento.addEventListener("click",function(){

    alert("agora sou autônomo")
    h1Elemento.innerHTML = "NOVO TÍTULO!";
//h1Elemento.textContent = "NOVO TÍTULO!";
    h1Elemento.style.backgroundColor = "#ffbade"

})

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px"
})

h1Elemento.addEventListener("mouseleave", ()=>{
    h1Elemento.style.fontSize = "34px"
})


//declaração de variáveis com LET e VAR e CONST

//const nome = "Pedro"

var nome = "Pedro"
if(nome !=""){
    let nome = "Lana"
}

//imprimindo o valor da variável
console.log(nome)
*/