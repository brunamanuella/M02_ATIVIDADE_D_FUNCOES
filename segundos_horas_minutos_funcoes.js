import {question} from "readline-sync"

function main(){
    //entrada
    const segundos = Number(question('Digite um valor em (segundos): '))

    //processamento
    const horas = calcular_horas(segundos)
    const minutos = calcular_minutos(segundos)
    const seg = calcular_seg(segundos)

    //saida
    console.log(`${segundos} segundos, corresponde a: ${horas} horas, ${minutos} minutos, ${seg} segundos`)
}

function calcular_horas(segundos){
    const resultado1 = Math.floor(segundos / 3600)
    return resultado1
}

function calcular_minutos(segundos){
    const resultado2 = segundos % 3600
    const resultado3 = Math.floor(resultado2 / 60)
    return resultado3
}

function calcular_seg(resultado2){
    const resultado4 = Math.floor(resultado2 / 60)
    return resultado4
}

main()
