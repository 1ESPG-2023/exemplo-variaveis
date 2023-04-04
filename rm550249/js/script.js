/*//capturando a tag com id e colocando em uma variável var
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
/*
let num1 = 10;
let num2 = 5;

//crie uma validação ternária onde resulte no valor de PAR OU ÍMPAR
let resultado = !(10%5) ? "PAR" : "IMPAR";
console.log("O número que está sendo manipulado é :" + resultado)*/
// let nomes = ["Eric","João", "Matheus", "Fernando", "Rodrigo"]
// console.table(nomes)
// console.log(nomes[0])


//recuperando elementos de lista através da função
//getElementByTagName

 const ItensDeLista = document.getElementsByTagName("li")
//  const objArray = [...ItensDeLista]
ItensDeLista.forEach(item =>{
    console.log(`ITEM DA LISTA : ${item.textContent}`)
     //console.log(ItensDeLista[0].textContent)
})

//  console.log(objArray)

//Realizando a junção de arrays com o operador SPREAD (...)
// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3 
// num3 = [...num1,...num2] 
// //apresentando interpolação junto com arrays
// console.log("Valor do Array 3 " + num3)
