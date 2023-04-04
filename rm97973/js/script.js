// // dicas no mdn web docs

// // Capturando a tag com ID e colocando em uma variavél var
// const h1Elemento = document.getElementById("titulo-1")

// // Adicionando um listener de evento 
// h1Elemento.addEventListener("click",function(){

//     alert("agora sou atônomo!")
//     h1Elemento.innerHTML = "Novo título!";
//     h1Elemento.style.backgroundColor = "#FB607F"

// })
// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize="60px"
// })
// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontsize="34px"
// })

// // Declaração de vaiaveis como LET, VAR e CONST

// // const nome = "Pedro" //conteudo não pode ser alterado depois

// var nome = "Pedro" // é considerado global

// if(nome != ""){
//     var nome = "Emanuelle"
// }
// //Imprimindo o valor da variável
// console.log(nome)

// // let nome = "Pedro"

// estrutura de decisao if / else / else if
// operadores lógicos
// && AND
// || or
// != NOT/DIFERENTE

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined)  {
//     console.log("A variavél está preenchida!")
// }
// else if(nome == null){
//     console.log("A variavél é null!")
// }
// else{
//     console.log("A variavél não está preenchida!")
// }

// Operadores relacionais
// igual python

// Operador ternário (?), verificar s um numero é par ou impar 

// let num1 = 10;
// let num2 = 5;

// // crie uma validação ternária onde resulte no valor de PAR ou Impar

// let resultado = !(10%5) ? "par" : "impar" ;
// console.log("O número que está sendo manipulado é: " + resultado)

// guardar mais de uma informação dentro de um array 
// // qtds de posições em um array [0,1,2,3] = 4 arrays * começa sempre no 0
//  let nome = ["nome1","nome2","nome3","nome4"];

//  nome [2]

// declarando um array
let nomes = ["Ana","Pedro","Cauã"];

console.log(nomes)
console.table(nomes)

// impriir apenas um intem do array 
console.log(nomes[1])

// função que pega uma coleção de elementos

// recuperando elementos de lista através da função gitelementbytagname
// const itensDeLista = [...document.getElementsByTagName("li")]

// realizando a junção co o operador spread (...)
// prestenção nesses 3 pontinhos aqui 
let num1 = [10,20,30]
let num2 = [40,50,60,70,80]
let num3 

num3 = [...num1,...num2]

// apresentando interpolação junto com arrays

console.log("Valor do array 3 " + num3)

// const obj1array = [...itensDeLista]

// forEach uma função de callback 
// itensDeLista.forEach( item =>{
    
//     console.log(`ITEM DA LISTA :${item.textContent}`)
//     // console.log(itensDeLista[0].textContent) - interpolação (usar crase)
// })


// console.log(obj1array)

const itensDeLista = [...document.getElementsByTagName("li")]

// loop for

for (let index = 0; index < itensDeLista.length; index++) {
    console.log(`itensDeLista : ${itensDeLista[index].textContent}`);
    
}

// loop for of

// for (const iterator of itensDeLista) {
//     console.log(`Itens da lista com ForOf : ${item.textContent}`)
// }

//  For In, retorna o indice 
for(const indice in itensDeLista){
    console.log(`itens da lista com ForIn ${itensDeLista[indice].textContent}`)
}