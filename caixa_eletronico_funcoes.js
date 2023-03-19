import {question} from "readline-sync"

function main(){
    //entrada
    const quantia_solicitada = Number(question('Digite o valor da quantia que vai sacar: '))

    //processamento
    const n_50 = calcular_n_50(quantia_solicitada)
    const n_10 = calcular_n_10(quantia_solicitada)
    const n_5 = calcular_n_5(quantia_solicitada)
    const n_1 = calcular_n_1(quantia_solicitada)

    //saida
    console.log(`Para o valor do saque solicitado, a quantidade de notas a receber de R$ 50,00 é de: ${n_50} de R$ 10,00 é de: ${n_10} de R$ 5,00 é de: ${n_5} de R$ 1,00 é de: ${n_1}`)
}

function calcular_n_50(quantia_solicitada){
    const resul1 = Math.floor(quantia_solicitada / 50)
    return resul1
}

function calcular_n_10(quantia_solicitada){
    const resul2 = quantia_solicitada % 50
    const resul3 = Math.floor(resul2 / 10)
    return resul3
}

function calcular_n_5(quantia_solicitada){
    const resul4 = quantia_solicitada % 50
    const resul5 = resul4 % 10
    const resul6 = Math.floor(resul5 / 5)
    return resul6
}

function calcular_n_1(quantia_solicitada){
    const resul7 = quantia_solicitada % 50
    const resul8 = resul7 % 5 
    const resul9 = resul8 % 5
    return resul9
}

main()