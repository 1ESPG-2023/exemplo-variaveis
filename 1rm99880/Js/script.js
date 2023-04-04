//Operador Ternário ( ? )

// let num1 = 10;
// let num2 = 5;
// //crie uma validação ternária onde resulte no valor de PAR ou ÍMPAR!

// let resultado = !(10%5) ? "PAR" : "ÍMPAR";
// console.log("O número que está sendo manipulado é: "+ resultado)

// Declarando um array

// let nomes = ["Ana", "Pedro", "Cauã"];

// console.log(nomes);
// console.table(nomes);

// //Imprimir apenas um item do array
// console.log(nomes[1])


//Recuperando elementos de lista através da função
//getElementByTagName
//const itensDeLista = document.getElementsByTagName("li")

// let num1 = [10,20,30 ];
// let num2 = [40,50,60,70,80];
// let num3

// num3 = [num1,num2]
// //Apresentado interpolação junto com arrays
// console.log("Valor do array 3" + num3)

//Realizando a junção de arrays com o operado SPREAD (...)
// let num1 = [10,20,30 ];
// let num2 = [40,50,60,70,80];
// let num3

// num3 = [...num1,...num2]
// //Apresentado interpolação junto com arrays
// console.log("Valor do array 3 " + num3)

// Recuperando elementos de lista através da função
// getElementByTagName
// const itensDeLista = [...document.getElementsByTagName("li")]

// //LOOP forEach

// itensDeLista.forEach( item =>{
//     console.log(`ITEM DA LISTA :${item.textContent}`)
// })


const itensDeLista = [...document.getElementsByTagName("li")]
//LOOp for

for (let index = 0; index < array.length; index++) {
    console.log(`Itens da lista : ${itensDeLista[index].textContent}`)    
}