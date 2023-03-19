import {question} from "readline-sync"

function main(){
    //entrada
    const min = Number(question('Digite o valor em minutos: '))

    //processamento
    const horas = calcular_horas(Math.floor(min))
    const minrest = calcular_min_rest(min)

    //saida
    console.log(`${min} minutos, corresponde a: ${horas} horas e ${minrest} minutos`)
}

function calcular_horas(min){
    const hora = min / 60
    return hora
}

function calcular_min_rest(min){
    const min_rest = min % 60
    return min_rest
}

main()