
//declarando um array 
// let nomes = ["nome1", "nome2", "nome3"]
// console.table(nomes)

// //imprimir apenas 1 item do array
// console.log(nomes[2])


//recuperando elementos de listas atraves da função
//getElementByTagName


const itemsDeLista = document.getElementsByTagName("li")

//const obj1Array = [...itemsDeLista]

itemsDeLista.forEach(element => {
    
});( item =>{
    console.log(`item da lista :${item.textContent}`)
    //console.log(itemsDeLista[0].innerHTML)
})


//realizando a junção de arrays com o operador SPREAD
// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3 

// num3 = [...num1, ...num2]

// //apresentando interpolação junto com arrays
// console.log("valor do array 3" + num3)