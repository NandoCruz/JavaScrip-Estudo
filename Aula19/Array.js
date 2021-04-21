let num = [5, 8, 2, 9, 3]
console.log(`Meu vetor original é esse ${num}`)
console.log(`Nosso vetor é de ${num.length} elementos`)
console.log(`qual o valor da posição 1: ${num[0]}`)
console.log(`Meu vetor na ordem crescente é ${num.sort()}`)
console.log(`qual o valor da posição 1: ${num[0]}`)
    /*
    for (let pos = 0; pos < num.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }
    */
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}