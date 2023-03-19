import {question} from "readline-sync"

function main(){
    //entrada
    const temperatura_f = Number(question('Digite uma temperatura em (Fahrenheit): '))

    //processamento
    const temperatura_c = transformar_em_c(temperatura_f)

    //saida
    console.log(`${temperatura_f}ºF equivale a ${temperatura_c}ºC`)
}

function transformar_em_c(temperatura_f){
    const resultado = ((5 * temperatura_f - 160) / 9)
    return resultado
}

main()