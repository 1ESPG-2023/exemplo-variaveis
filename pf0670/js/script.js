
// //Capturando a tag com ID e colocando em uma variável var
// const h1Elemento = document.getElementById("titulo-1")

// //Adicionando um Listener de Evento
// h1Elemento.addEventListener("click",function(){

//     alert("Agora sou autonômo!")
//     h1Elemento.innerHTML = "NOVO TÍTULO!";
//     h1Elemento.style.backgroundColor = "#ff0000"
// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px"
// })

// //Declaração de variáveis com LET e VAR e CONST

// //const nome = "Pedro"

// var nome = "Pedro"

// if(nome != ""){
//     var nome = "Emanuelle"
// }

// //Imprimindo o valor da variável
// console.log(nome)

//Estrutura de decisão IF / else / else if
//Operadores lógicos
// && AND
// || OR
// ! NOT
// != NOT / DIFERENTE

// let nome = null
// console.log(nome)

// if (nome != "" && nome != undefined) {
//     console.log("A variável está preenchida!")
// }else if(nome == null){
//     console.log("A variável é null !")
// }
// else{
//     console.log("A variável não está preenchida!")
// }

//OPERADOR TERNÁRIO ( ? )

// let num1 = 10;
// let num2 = 5;

// //Crie um validação ternária onde resulte no valor de PAR ou IMPAR!

// let resultado = !(10%5) ? "PAR" : "IMPAR";

// console.log("O nÚmero que está sendo manipulado é : " + resultado)


// //Declarando um array
// let nomes = ["Ana","Pedro","Cauã"]

// console.log(nomes)
// console.table(nomes)

// //IMPRIMIR APENAS UM ITEM DO ARRAY
// console.log(nomes[1])

//Recuperando elementos de lista através da função
//getElementByTagName
//const itemsDeLista = document.getElementsByTagName("li")

// let num1 = [10,20,30]
// let num2 = [40,50,60,70,80]
// let num3

// num3 = [num1,num2]
// //Apresentando interpolação junto com arrays
// console.log("Valor do array 3 " + num3) 


// //Realizando a junção de rrays com o opoerador SPREAD ( ... )
// let num1 = [10,20,30]
// let num2 = [40,50,60,70,80]
// let num3

// num3 = [...num1,...num2]
// //Apresentando interpolação junto com arrays
// console.log("Valor do array 3 " + num3) 

//Recuperando elementos de lista através da função
//getElementByTagName
const itemsDeLista = [...document.getElementsByTagName("li")]

// const obj1Array = [...itemsDeLista]

itemsDeLista.forEach( item =>{

    console.log(`ITEM DA LISTA :${item.textContent}`)
    // console.log(itemsDeLista[0].textContent)
})


