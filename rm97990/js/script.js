/*

//Capturando a tag com id e colocando em uma variável var
const h1Elemento = document.getElementById("titulo 1")
//adicionando um listener de eventos
h1Elemento.addEventListener("click",function(){
    alert("Agora sou autonômo")
    h1Elemento.textContent=("Novo Título!"); //adc um novo titulo após o evento de click e alert
    h1Elemento.innerHTML="Novo Título!"
    h1Elemento.style.backgroundColor ="#ff0000"
})

h1Elemento.addEventListener("mouseover", ()=>{
    h1Elemento.style.fontSize = "68px" //mudança de taamnho da fonte quando passa o mouse

})
h1Elemento.addEventListener("mouseleave", ()=>{
h1Elemento.style.fontSize="34px"//mudaça da fonte quao tiramos o mouse

})
//declaração de variáveis com Let e var e const
//const nome ="Mirella"

var nome = "Mirella"
 if(nome != ""){
    var nome = "Pedro"

 }
 console.log(nome)

 */
 // Estrutura de decisão if/else
    //Operadores lógicos em js: and== && ; or=!! ; not/different ==!
    //Operadores relacionais: maior, menos, maior igual, menor igual....

/*let nome = null
console.log(nome)
if(nome!="" && nome != undefined){
    console.log("A váriavel esta preenchida")
}else if(nome==null){
    console.log("A variável é null")
}
else{
    console.log("A variável não está preenchida")
}


//Operador ternário (?)

let num1= 10;
let num2=5;
//Crie uma validação ternária, onde resulte no valor de par ou ímpar 

let resultado=!(10%5) ? "Par" :"impar" // ! inverte pois o ? ira retornar como true or false 
console.log("O núero que está sendo manipulado é: " + resultado)
*/

//*Arrays:
//Declarando um Array
//let nome=["Mirella","Ge","nome3"]
//           0,      1,    2
/*console.log(nome[1])
console.table(nome)
*/
//Recuperando elementos de lista través da função getelementbytganame. Dentro do () é oque recebe e fora é oque retorna
//const itensDeLista=document.getElementsByTagName("li")

/*let num1=[10,20,30]
let num2=[40,50,60,70,80]
let num3

num3=[num1, num2]
//Apresentando interpolação junto com arrays
console.log("valor da array 3 " + num3)
*/
 

//Junção de arrays com operaor SPREAD(...)
/*let num1=[10,20,30]
let num2=[40,50,60,70,80]
let num3

num3=[...num1,...num2]
//Apresentando interpolação junto com arrays
console.log("valor da array 3 " + num3)
*/
//Recuperando elementos de lista través da função getelementbytganame. Dentro do () é oque recebe e fora é oque retorna
/*const itensDeLista=[...document.getElementsByTagName("li")]
itensDeLista.forEach( item =>{
console.log(`ITEM DA LISTA: ${item.textContent}`)
})*/

//Loop For
const itensDeLista=[...document.getElementsByTagName("li")]
//Primeiro declaramos o for.
for (let index = 0; index < itensDeLista.length; index++) {
    console.log(`Item a lista ${itensDeLista[index].textContent}`)
    
}






