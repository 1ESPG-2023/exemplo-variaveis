// // ///Capturando a tag com id e colocando em uma variavel VAR
//  //var h1Elemento = document.getElementById("titulo-1")

//  //adicionando um listener/escitador de evento

//  //h1Elemento.addEventListener("click", function(){
//      //alert("Agora sou autonomo")
//     // h1Elemento.innerHTML = "NOVO TIIIIIIIIIIIITULOS!";
//     // h1Elemento.style.backgroundColor = "#00ff"
// // })
//  //h1Elemento.addEventListener("mouseover", ()=>{
// // h1Elemento.style.fontSize = "69px"
//  //})
// // h1Elemento.addEventListener("mouseleave",()=>{
//     //h1Elemento.style.fontSize = "34px"
// // })
// // //Declaração de variaveis com LET VAR e CONST

// // var   Nome = "Pedro"
// // let   nome = "Pedro"
//  //const noMe = "Pedro" // const nao pode ter seu valor alterado


// //operadores lógicos
// // && = AND
// //|| = OR
// //! NOT
// // != DIFERENTE
// //let nome = "pedro"
// //if (nome != "" && nome != undefined){
//         //console.log("A variavel nao esta preenchida")
// //}else{
//     //console.log("A variavel esta preenchida")
// //}
// //operador TERNARIO ( ? )
 

// //let num = 10;
// //let num1 = 5;
// //crie uma validação ternaria onde resulte no valor de PAR ou impar 
// //let resultado = !(10%5) ? "PAR" : "IMPAR"

// //console.log("O numero que esta sendo manimulado é : " + resultado);
// let nome = ["Ana","Pedro","Cauã",]
// console.table(nome)
// nome.
// //imprimir apenas um item do array
// console.table(nome[2])
//recupernado elementos de lista atraves da funçao 
//get element by tag name 
const itemsDeLista = [...document.getElementsByTagName("li")]
itemsDeLista.forEach(item=>{
    console.log(`ITEM DA LISTA :${item.textContent}` )
   // console.log(itemsDeLista[0].innerHTML)
})

//console.log(objArray)

//realizando a junção de arrays com o operador SPREAD(...)
// let num1 = [10, 20 , 30,]
// let num2 = [40 , 50 , 60 , 70 , 80]
// let num3 = [...num1 ,... num2 ]

// //apresentando interpoção junto com arrays

//console.log("Valor do array 3 " + num3)