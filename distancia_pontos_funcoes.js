import {question} from "readline-sync"

function main(){
    //entrada
    const ponto_1_x1 = Number(question('Digite o valor do ponto 1 x1: '))
    const ponto_1_y1 = Number(question('Digite o valor do ponto 1 y1: '))
    const ponto_2_x2 = Number(question('Digite o valor do ponto 2 x2: '))
    const ponto_2_y2 = Number(question('Digite o valor do ponto 2 y2: '))

    //processamento
    const distancia = calcular_distancia(ponto_1_x1, ponto_1_y1, ponto_2_x2, ponto_2_y2)

    //saida
    console.log(`a distancia entre os pontos é de: ${distancia.toFixed(1)}`)
}

function calcular_distancia(ponto_1_x1, ponto_1_y1, ponto_2_x2, ponto_2_y2){
    const resul1 = ((ponto_2_x2 - ponto_1_x1)**2) + ((ponto_2_y2 - ponto_1_y1)**2)
    const resul2 = Math.sqrt(resul1, 1/2)
    return resul2
}

main()
