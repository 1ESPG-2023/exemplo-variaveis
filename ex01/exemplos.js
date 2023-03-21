var nome = "Vinicius"
function retornaNomeVar () {

    if (nome == "Vinicius")

        nome = "Oliveira"

        console.log("dentro do if: " + nome)
}

console.log("fora do if: " + nome)

retornaNomeVar()

let nomeLet = "Vinicius"
function retornaNomeLet () {

    if (nomeLet == "Vinicius"){
        nomeLet = "Oliveira"
        console.log("Dentro do if: " + nomeLet)
    }
} 

console.log("fora do if: " + nomeLet)

retornaNomeLet()

const pi  = 3.14
    pi += 2
    console.log(pi)