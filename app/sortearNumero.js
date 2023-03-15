const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
const jogarNovamente = document.getElementById('jogarNovamente')




function gerarNumeroAleatorio(){
   return parseInt(Math.random() * maiorValor + 1)

}

// Menor e Maior valor alterado dinâmicamente no HTML pelo JS
const elementoMenorValor = document.getElementById("menor-valor").innerHTML = menorValor
const elementoMaiorValor = document.getElementById("maior-valor").innerHTML = maiorValor


//Atualizar a Pagina quando acabar o game
console.log(numeroSecreto)
