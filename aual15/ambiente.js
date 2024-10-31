var num = [5,8,4,6,7]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`Meu primeiro elemento e ${num[0]}`)
let pos = num.indexOf(6)
if(pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor esta na posicao ${pos}`)
}
