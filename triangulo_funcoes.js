import {question} from "readline-sync"

function main(){
    //entrada
    const base = Number(question('Digite o valor da base de um triangulo: '))
    const altura = Number(question('Digite o valo da altura de um triangulo: '))

    //processamento
    const area = calcular_area(base, altura)

    //saida
    console.log(`O valor da área do triangulo e de: ${area}`)
}

function calcular_area(base, altura){
    const resultado = (base * altura) / 2
    return resultado
}

main()