
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
/*let num1=10;
let num2=5;

//crie uma validação ternária onde resulte no valor de par ou impar
let resultado=!(10%5) ? "PAR" : "IMPAR";
console.log("O número que está sendo manipulado é "+resultado)*/

//ARRAYS- guardar mais de uma informação
//declarando um array
// let nomes=["Ana", "Pedro", "Cauã"]
//  console.log(nomes)
//  console.table(nomes)
// //imprimir apenas um item do array
// console.log(nomes[1]) cntrl; pra comentar tudo

//Recuperando elemenstos de lista através da função
//getElementsbyTagName   é tipo a assinatura da função
//com o mouse no negócio, depois do : é o que ele retorna(?)
//const itensDeLista=document.getElementsByTagName("li")

// let num1=[10,20,30]
// let num2=[40,50,60,70,80]
// let num3

// num3=[num1,num2]
// //apresentando interpolação junto com arrays
// console.log("Valor do array 3 "+num3) //soma é para adicionar a variável


// let num1=[10,20,30]
// let num2=[40,50,60,70,80]
// let num3
// num3=[...num1,...num2]
// console.log("Valor do array 3 "+num3)//contatenação(?)

// const itensDeLista=[...document.getElementsByTagName("li")]//fazer isto poupa algumas declarações
// //const obj1Array=[...itensDeLista]

// //console.log(itensDeLista[0].innerHTML)
// //console.log(obj1Array)

// //LOOP FOREACH
// itensDeLista.forEach(item=>{ //foreach vai jogando os elementos dentro vai indo->
//   console.log(`ITEM DA LISTA: ${item.textContent}`)//interpolação
// //console.log(itensDeLista[0].textContent)
// })

// //LOOP FOR
// const itensDeLista=[...document.getElementsByTagName("li")]
// for (let index = 0; index < itensDeLista.length; index++) { //se o indice(index) fot menor que o array      index++ soma 1
//   console.log(`Itens da lista: ${itensDeLista[index].textContent}`)
// }


//FOR IN
const itensDeLista=[...document.getElementsByTagName("li")]
for(const indice in itensDeLista){
  console.log(`Itens da lista: ${itensDeLista[indice].textContent}`)
}