

//Capturando a tag com ID e colocando em uma variável var
var h1Elemento = document.getElementById("titulo-1")

//Adicionando um Listener de Evento
h1Elemento.addEventListener("click", function(){


  alert("Agora sou autonomo")
  h1Elemento.innerHTML="NOVIDADES";
   h1Elemento.style.backgroundColor = "#ff0000"


})

h1Elemento.addEventListener("mouseover", ()=>{
   h1Elemento.style.fontSize = "68px"
})
h1Elemento.addEventListener("mouseleave", ()=>{
   h1Elemento.style.fontSize = "32px"
})

//Declaração de variáveis com LET e VAR e CONST
var nome = "Pedro"

if(nome != ""){
   var name ="rodrigo"
}
console.log(name)

//Estrutura de decisão IF / else /else if
//Operadores lógicos
&& AND
|| OR
! NOT
!= NOT/DIFERENTE


let nome = null
console.log(name)
if (nome != "" && nome !="undefined"){
    console.log("A variável está preenchida!")
}else if(nome == null){
    console.log("A variável é null")
}
else{
    console.log("A variável não está preenchida")
}

//Operador Ternário?

let num1 = 10;
let num2 = 5;

//Crie uma validação ternária onde resulte no novo valor do PAR ou IMPAR:
//%divide

let resultado = !(10%5) ? "PAR" : "IMPAR";
console.log("O número que está sendo manipulado: " + resultado)