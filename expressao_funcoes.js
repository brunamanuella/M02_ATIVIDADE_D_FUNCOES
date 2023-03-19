import {question} from "readline-sync"

function main(){
    //entrada
    const numero_A = Number(question('Digite o valor de A: '))
    const numero_B = Number(question('Digite o valor de B: '))
    const numero_C = Number(question('Digite o valor de C: '))

    //processamento
    const resultado = calcular_resultado(numero_A, numero_B, numero_C)

    //saida
    console.log(`o resultado da expressao D = R + S / 2 é: ${resultado}`)
}

function calcular_resultado(numero_A, numero_B, numero_C){
    const R = (numero_A + numero_B)** 2
    const S = (numero_B + numero_C)** 2
    const resultado = (R + S) / 2
    return resultado
}

main()