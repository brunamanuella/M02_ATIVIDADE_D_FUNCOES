import {question} from "readline-sync"

function main(){
    //entrada
    const raio = Number(question('Digite o valor do um raio de uma cirunferencia: '))

    //processamento
    const cirunferencia = calcular_circuferencia(raio)

    //saida
    console.log(`o comprimento da circunferencia é: ${cirunferencia} `)
}

function calcular_circuferencia(raio){
    const resultado = 2 * 3.14 * raio
    return resultado
}

main()