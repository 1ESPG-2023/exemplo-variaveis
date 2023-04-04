// //DECLARANDO UM ARRAY
// let nome = ["Ana", "Pedro", "Caua", "Bia"]

// console.log(nome)
// console.table(nome)

// // DECLARANDO APENAS UM ITEM DO ARRAY
// console.log(nome[1])

//RECUPERANDO ELEMENTOS DE LISTA ATRAVÉS DA FUNÇÃO 
//getElementByTagName
//const itemsDeLista = document.getElementsByTagName("li");


// //REALIZANDO A JUNÇÃO DE ARRAYS COM O OPERADOR SPREAD ( ... )
//  let num1 = [10,20,30]
//  let num2 = [40,50,60,70,80]
//  let num3 

//  num3 = [...num1,...num2]
//  //APRESENTANDO INTERPOLAÇÃO JUNTO COM ARRAYS
//  console.log("Valor do array 3: " + num3)

//RECUPERANDO ELEMENTOS DE LISTA ATRAVÉS DA FUNÇÃO 
//getElementByTagName
const itemsDeLista = [...document.getElementsByTagName("li")]

//const objArray = [...itemsDeLista]

//LOOP forEach
// itemsDeLista.forEach( item =>{
   
//    console.log(`ITEM DA LISTA :${item.textContent}`)
//    //console.log(itemsDeLista[0].textContent)
// })

//LOOP for
// for (let index = 0; index < itemsDeLista.length; index++){
//    console.log(`Itens de lista : ${itemsDeLista[index].textContent}`)
// }

//LOOP FOR of 

// for (const item of itemsDeLista) {
//    console.log(`Itens de lista com ForOf : ${item.textContent} `)
// }

//LOOP FOR IN
for (const indice in itemsDeLista) {
   console.log(`Itens de lista com ForIn : ${itemsDeLista[indice].textContent}`)
}
