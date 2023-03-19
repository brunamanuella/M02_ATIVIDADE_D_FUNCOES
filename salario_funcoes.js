import {question} from "readline-sync"

function main(){

// Entrada
const salario = Number(question('Salario R$: '))
const percentual = Number(question('Aumento %: '))


// Processamento
const aumento = calcular_aumento(salario, percentual)
const novo_salario = calcular_novo_salario(salario, aumento)

// Saída
console.log(`Novo salário R$ ${novo_salario.toFixed(2)} Aumento de R$ ${aumento}`)
}

function calcular_aumento(salario, percentual){
    const resultado = (salario/100) * percentual
    return resultado
}

function calcular_novo_salario(salario, aumento){
    const resultado = salario + aumento
    return resultado
}

main()