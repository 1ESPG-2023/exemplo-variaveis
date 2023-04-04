// //Capturando a tag com ID e colocando em uma váriavel var
// var h1Elemento = document.getElementById("titulo-1")

// //Adicionando um Listene de Evento
// h1Elemento.addEventListener("click", function(){

//     alert("Agora sou autônomo");
//     h1Elemento.textContent = "NOVO TÍTULO!";
//     h1Elemento.style.backgroundColor = "#ff0000"

// })

// h1Elemento.addEventListener("mouseover", ()=>{
//     h1Elemento.style.fontSize = "68px"
// })

// h1Elemento.addEventListener("mouseleave", ()=>{
//     h1Elemento.style.fontSize = "34px";
// })

// //DECLARAÇÃO DE VARIAVEIS COM VAR LET E CONS

// var nome = "Pedro";

// if(nome != ""){
//     var nome = "Lucas";
// }

// console.log(nome)

//Estrutura de decisão IF / else / else if
//Operadores lógicos
// && AND
// || OR
// != DIFFERENT
//



// let nome = null;
// console.log(nome);

// if(nome != "" && nome != undefined) {
//     console.log("A váriável está preenchida!");
// } 
// else if(nome==null){
//     console.log("A váriável é null!");
// }
// else{
//     console.log("A variável não está preenchida!");
// }

//OPERADOR TERNÁRIO

// let num1 = 10;
// let num2 = 5;


// //Crie um validação ternária onde resulte no valor de PAR ou IMPAR

// let resultado = !(10%5) ? "PAR" : "IMPAR";
// console.log("O número que está sendo manipulado é: " + resultado)


//Declarando um array
// let nomes = ["nome1", "nome2", "nome3"]


// console.table(nomes)

// console.log(nomes[1])


// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3

// num3 = [...num1, ...num2]

//Apresentando interpolação junto com arrays
// console.log("Valor do array 3 " + num3)




//Realizando a junção de arrays com o operador SPREAD (...)
// let num1 = [10, 20, 30]
// let num2 = [40, 50, 60, 70, 80]
// let num3

// num3 = [...num1, ...num2]

// //Apresentando interpolação junto com arrays
// console.log("Valor do array 3 " + num3)

//Recuperando elemento de lista através da função
//getElementByTagName
// const itensLista = [...document.getElementsByTagName("li")]

//const objArray = [...itensLista]


//LOOP forEach
// itensLista.forEach( item =>{
//     console.log(`ITEM DA LISTA :${item.textContent}`)
    //console.log(itensLista[0].textContent)
// })

