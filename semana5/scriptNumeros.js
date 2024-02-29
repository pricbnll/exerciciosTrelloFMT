//[M1S05] Ex 3 - Iteração Básica - Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console. Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require("prompt-sync")();
// const numeros = [4,1,5,10,8]
// for (let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }
// 4
// 1
// 5
// 10
// 8

const numeros = []
for(let i = 0; i < 5; i++){
numeros.push(parseInt(prompt(`Digite o ${i + 1} número: `)))
}

for(let i = 0; i < 5; i++){
console.log(`O ${i + 1} número é ${numeros[i]}`)
}

console.log(numeros)


//[M1S05] Ex 4 - Soma de Elementos - Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

const soma = numeros.reduce((acc, n) => acc + n, 0)
console.log(`A soma dos números do array é ${soma}`)

//[M1S05] Ex 5 - Ordenação Crescente - Crie um novo array (usando spread [...foobar])chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const numerosOrdenados  = [...numeros]
numerosOrdenados.sort((a,b) => a-b)
console.log("Este é o array em ordem crescente: ", numerosOrdenados)
// //Este é o array em ordem crescente: 1,4,5,8,10

//Ordem descrescente
// const numerosDecrescente  = numeros.sort((a,b) => b-a)
// console.log(`Este é o array em ordem decrescente: ${numerosDecrescente}`)
// //Este é o array em ordem crescente: 10,8,5,4,1

//[M1S05] Ex 6 - Filtragem de Elementos- Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const numerosPares = numeros.filter(n =>{
    if (n % 2 == 0){
        return true
    }
})
console.log(`Os números pares deste array são: ${numerosPares}`)
// //Os números pares deste array são: 4,10,8
// const pares = numeros.filter(numero => numero % 2 == 0)


//[M1S05] Ex 7 - Mapeamento de Elementos - Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const quadrados = numeros.map( n => n * n)
console.log(`O quadrado de cada numeros deste array é: ${quadrados}`)
// // O quadrado de cada numeros deste array é: 16,1,25,100,64

