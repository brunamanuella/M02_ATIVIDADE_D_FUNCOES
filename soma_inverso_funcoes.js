import {question} from "readline-sync"

function main(){
    //entrada
    const numero = Number(question('Digite um numero inteiro (3 digitos): '))

    //processamento
    const unidade = calcular_unidade(numero)
    const dezena = calcular_dezena(numero, unidade)
    const centena = calcular_centena(numero)
    const inverso = calcular_inverso(unidade, dezena, centena)
    const soma = calcular_soma(numero, inverso)

    //saida
    console.log(`o inverso de ${numero} é: ${inverso}, e a soma deles é: ${soma}`)
}

function calcular_unidade(numero){
    const resul1 = numero % 10
    return resul1
}

function calcular_dezena(numero, unidade){
    const resul2 = ((numero % 100) - (unidade % 10)) / 10
    return resul2
}

function calcular_centena(numero){
    const resul3 = ((numero % 1000) - (numero % 100)) / 100
    return resul3
}

function calcular_inverso(unidade, dezena, centena){
    const resul4 = (unidade * 100) + (dezena * 10) + centena
    return resul4
}

function calcular_soma(numero, inverso){
    const resul5 = numero + inverso
    return resul5
}

main()