
//Getting the ID tag ang adding a 'VAR' variable
var h1Elemento = document.getElementById("title-1")

//adding a listener event
h1Elemento.addEventListener("click", function(){

    alert("alert")

})


// declaration of variables w/ LET, VAR and CONST

var nome  = "Cova"

// if(nome != "") {
//     var nome = "Emanuelle"
// }

//printing the variable value
console.log(nome)



//realizando a junção de arrays com a função SPREAD ( ... )
// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3

// num3 = [...num1, ...num2]
// //presenting 'interpolação' w/ arrays
// console.log("Valor do array 3: " + num3)


// recuperando elementos de lista através da função
// getElementByTagName

const itensDeLista = [...document.getElementsByTagName("li")]

// const obj1Array = [...itensDeLista]

// console.log(itensDeLista)
// console.log(obj1Array)

itensDeLista.forEach(item => {
    console.log(`ITEM DA LISTA: ${item.textContent}`)
})

console.log(itensDeLista[0].innerHTML)