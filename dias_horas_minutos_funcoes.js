import {question} from "readline-sync"

function main(){
    //entrada
    const minutos = Number(question('Digite um valor em (minutos): '))

    //processamento
    const dias = calcular_dias(minutos)
    const horas = calcular_horas(minutos)
    const minutos1 = calcular_minutos1(minutos)

    //saida
    console.log(`${minutos} minutos, corresponde a: ${dias} dias, ${horas} horas, ${minutos1} minutos`)
}

function calcular_dias(minutos){
    const resultado1 = Math.floor(minutos / 1440)
    return resultado1
}

function calcular_horas(minutos){
    const resultado2 = minutos % 1440
    const resultado3 = Math.floor(resultado2 / 60)
    return resultado3
}

function calcular_minutos1(minutos){
    const resultado2 = minutos % 1440
    const resultado4 = resultado2 % 60
    return resultado4
}

main ()

main()
