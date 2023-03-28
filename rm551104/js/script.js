
/*
//capturando a tag com ID
//propriedades: texto (ex no novo tutlo)
const h1Elemento = document.getElementById("titulo-1") //melhor usar const para declarar elemento, pois é possíevl alterar as propriedades

//adicionando um listener de evento
h1Elemento.addEventListener("click",function(){
  
  alert("Agora sou autonômo")
  //h1Elemento.textContent="Novo título";
  h1Elemento.innerHTML="NOVO TÍTULO";
  h1Elemento.style.backgroundColor="#eda1bd"
})

h1Elemento.addEventListener("mouseover",()=>{
  h1Elemento.style.fontSize="68px"

}) //arrow function, simplificação da function
h1Elemento.addEventListener("mouseleave",()=>{
  h1Elemento.style.fontSize="34px"
})

//declaração de variáveis com let var e const

//var é global
var nome="Pedro"
if(nome!=""){
    var nome="Fernanda"
}
//imprimindo valor da variavel
console.log(nome)
*/

//Estrutura de decisão if/else/else if
//Operadores lógicos
//&& and
//|| or
//! not
//!= not/diferente    
//== igualdade  

//Operadores relacionais
//> maior
//<menor
//>= maior igual
//<= menor igual
//==igual

/*let nome
console.log(nome)

if(nome!="" && nome!=undefined){
  console.log("A variável está preenchida!")
} else if(nome ==null){
  console.log("A variável é null")
}
else{
  console.log("A variável não está preenchida!")
}*/

//operador ternário(?)
let num1=10;
let num2=5;

//crie uma validação ternária onde resulte no valor de par ou impar
let resultado=!(10%5) ? "PAR" : "IMPAR";
console.log("O número que está sendo manipulado é "+resultado)


 