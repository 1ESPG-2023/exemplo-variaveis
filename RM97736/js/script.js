

// //Capturando a tag com ID e colocando em uma variavel var
// var h1Elemento = document.getElementById("título-1")

// // Adicionando um listener de evento 
// h1Elemento.addEventListener("click", function(){
//     alert("Agora sou autônomo")
//     h1Elemento.innerHTML = "NOVO TÍTULO"
//     h1Elemento.style.backgroundColor = "#ff0000"
// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px"
// })

// // Declaração de variaveis com LET e VAR e CONST

// var nome = "Pedro"
// //let nome = "Pedro"
// // const nome = "Pedro"
// if(nome != ""){
//     let nome = "Emanuelle"
// }

// //Imprimindo o valor da variavel
// console.log(nome)



// estrutura de decisão if\else\ else if
//Operadores lógicos
//&& == and
// !! == or
// ! == not/different
// let nome = ""
// console.log(nome)

// if(nome != "" && nome != undefined){
//     console.log("A variável está preenchida")
// }else if(nome == null){
//     console.log("A variável é null")
// }
// else{
//     console.log("A variável não está preenchida")
// }


//operador ternário
//let null1 = 10;
//let null2 = 5;

//crie uma validação ternária onde resulte emo valor de PAR ou IMPAR
//let resultado = !(10%5) ? "PAR" : "IMPAR";
//console.log("o número que está sendo manipulado é: " + resultado)

// let nome = ["Geovanna", "Mirella", "Lana", "Fernanda"]
// 			//   0          1         2         3
// console.log(nome)
// console.table(nome)

// Imprimir apenas um item do ARRAY
// console.log(nome[2]) // Vai aparecer Lana 


// let num1 = [10,20,30]
// let num2 = [40,50,60]

// let num3 
// num3= [...num1, ...num2]

// // // Apresentando interpolação junto com arrays
// console.log("Valor de array 3 " + num3)

// Recuperando elementos de lista através da função getelementbytagname
// const itensDeLista = document.getElementsByTagName("li")

// // const objArrays = [...itensDeLista]

// itensDeLista.forEach( item =>{ //loop forEach e spread

//     console.log(`ITEM DA LISTA :${item}`)

// })
// console.log(objArrays)

// const itensDeLista = [...document.getElementsByTagName("li")]
// // Loop for

// for (let index = 0; index < itensDeLista.length; index++) {
//     console.log(`Itens da lista : ${itensdeLista[index].textContent}`)
    
// }

// const itensDeLista = [...document.getElementsByTagName("li")]
// //loop for of

// for (const item of itensDeLista){
//     console.log(`Itens da lista : ${item.textContent}`)
// }


const itensDeLista = [...document.getElementsByTagName("li")]
// FOR IN
for (const iindice in itensDeLista){
    console.log(`Itens da lista com ForIn : ${itensDeLista[índice].textContent}`)
}