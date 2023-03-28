//capturando a tag com id e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")

//Adicionando um listener de Evento
h1Elemento.addEventListener("click", function(){

alert("agora sou autonômo")
h1Elemento.innerHTML = "UHULLLL"
h1Elemento.style.backgroundColor = "#ff0000"

})
h1Elemento.addEventListener("mouseover", ()=>(
    h1Elemento.style.fontSize = "68px"
))
h1Elemento.addEventListener("mouseleave", ()=>(
    h1Elemento.style.fontSize = "34px"
))

//Delcaração de variáveis com LET, VAR e CONST

/*let nome = null 
if (nome != "" && nome != undefined){
    console.log("A variável está preenchida")
} else if(nome == null)
console.log("A variável é null")
else(
    console.log("A variável não está preenchida")
)

console.log(nome)*/
let num1 = 10;
let num2 = 5;

//crie uma validação ternária onde resulte no valor de PAR OU ÍMPAR
let resultado = !(10%5) ? "PAR" : "IMPAR";
console.log("O número que está sendo manipulado é :" + resultado)