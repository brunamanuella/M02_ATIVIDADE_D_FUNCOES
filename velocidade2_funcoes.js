import {question} from "readline-sync"

function main(){

//entrada
const velocidade_kmh = Number(question('Velocidade (km/h): '))

//processamento
const velocidade_ms = calcular_velocidade_ms(velocidade_kmh)

//saída
console.log(`${velocidade_kmh}, km/h equivale a , ${velocidade_ms}, m/s`)

}

function calcular_velocidade_ms(velocidade_kmh){
    const resultado = velocidade_kmh / 3.6
    return resultado
}

main()