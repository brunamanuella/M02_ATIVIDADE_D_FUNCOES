import {question} from "readline-sync"

function main(){
    //entrada
    const metros = Number(question('Digite um valor em (metros): '))

    //processamento
    const centimetros = transformar_em_cm(metros)

    //saida
    console.log(`${metros}m, corresponde a ${centimetros}cm`)
}

function transformar_em_cm(metros){
    const resultado = metros * 100
    return resultado
}

main()