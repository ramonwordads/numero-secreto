function verificaChuteValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div class="valor-invalido">Valor inválido: Somente Números!</div>`

        return
    } 

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML +=`<div class="valor-invalido">Valor inválido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2 class="valor-certo">Parabéns você acertou!</h2>
        <h2 class="valor-certo">Numero: ${numeroSecreto}</h2>
        <input type="button" id="jogarNovamente" value="Jogar Novamente" onClick="window.location.reload()">
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div class="mensagem-user">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div class="mensagem-user">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}