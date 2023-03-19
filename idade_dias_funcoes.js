import {question} from "readline-sync"

function main(){
    //entrada
    const idade_anos = Number(question('Digite a sua idade em anos: '))
    const idade_meses = Number(question('Digite a sua idade em meses: '))
    const idade_dias = Number(question('Digite a sua idade em dias: '))

    //processamento
    const idade_em_anos = calcular_idade_em_anos(idade_anos)
    const idade_em_meses = calcular_idade_em_meses(idade_meses)
    const total_dias = calcular_total_dias(idade_em_anos, idade_em_meses, idade_dias)

    //saida
    console.log(`Sua idade expressa em dias e de: ${total_dias}`)
}

function calcular_idade_em_anos(anos){
    const resul1 = anos * 365
    return resul1
}

function calcular_idade_em_meses(meses){
    const resul2 = meses * 30
    return resul2
}

function calcular_total_dias(idade_em_anos, idade_em_meses, idade_dias){
    const resul3 = idade_em_anos + idade_em_meses + idade_dias
    return resul3
}
main()