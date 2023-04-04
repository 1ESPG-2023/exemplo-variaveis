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

//estrutura de decisão if / else / else if 
//operadores lógicos 
//&& AND
//|| OR
// != NOT / DIFERENTE

/*let nome = null
console.log(nome)

if(nome!="" && nome !=undefined) {
    console.log("A variável está preenchida")
}else if(nome==null){
    console.log("A variável é null")
}
else{
console.log("A variável não está preenchida")
}
*/

//operadores relacionais igual do python 

//operador ternário

//let num1 = 10;
//let num2 = 5;

//crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR
//let resultado = 10%5 ?"PAR" : "ÍMPAR";
// lê como positivo logo se resultado é 0 dá ímpar(false)
//let resultado = !(10%5) ?"PAR" : "ÍMPAR";
//console.log("O número que esá sendo manipulado é:" + resultado)

//declarando um array
/*let nomes = ["nome1", "nome2", "nome3"]
console.log(nomes)
console.table(nomes)
//imprimir apenas um item do array
console.log(nomes[1])*/
// let nomes = ["geovanna", "fernanda", "mirella"]
// console.log(nomes)
// console.table(nomes)
// //imprimir apenas um item do array
// console.log(nomes[1])

//recuperando elementos e lista através de função
//getElementsByTagName

//const itensDeLista = document.getElementsByTagName("li")
// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70 ,80]
// let num3

// num3 = [...num1,...num2]
// // //apresentando interpolação junto com arrays
// console.log("valor do array 3 "  + num3)

// const itensDeLista = [...document.getElementsByTagName("li")]

// //const objArray = [...itensDeLista]

// //console.log(itensDeLista[0].innerHTML)
// //console.log(objArray)
// //LOOP forEach
// itensDeLista.forEach( item =>{

//     console.log(`ITEM DA LISTA :${item.textContent}`)
//     //console.log(itensDeLista[0].textContent)
// })
// const itensDeLista = [...document.getElementsByTagName("li")]
// //Loop for
// for (let index = 0; index < itensDeLista.length; index++) {
//     console.log(`Itens da lista :${itensDeLista[index].textContent}`)
    
// }
// const itensDeLista=[...document.getElementsByTagName("li")]

// for (const item of itensDeLista) {   //pega do itensDeLista e poe no item

//   console.log(`Itens da lista com for of: ${item.textContent}`)

const itensDeLista=[...document.getElementsByTagName("li")]
for (const indice in itensDeLista) {
    console.log(`Itens da Lista com ForIN :${itensDeLista[indice].textContent}`)
}
