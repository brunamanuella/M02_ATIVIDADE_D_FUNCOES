import {question} from "readline-sync"

function main(){
    //entrada
    const numero_A = Number(question('digite o valor de A: '))
    const numero_b = Number(question('digite o valor de B: '))

    //processamento
    const ordem_inversa1 = calcular_ordem_inversa1(numero_A)
    const ordem_inversa2 = calcular_ordem_inversa2(numero_b)

    //saida
    console.log(`os valores em ordem inversa sao: ${ordem_inversa2} e ${ordem_inversa1}`)
}

function calcular_ordem_inversa1(numero_A){
    const resultado1 = numero_A - 0 
    return resultado1
}

function calcular_ordem_inversa2(numero_b){
    const resultado2 = numero_b - 0
    return resultado2
}

main()