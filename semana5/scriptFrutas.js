//[M1S05] Ex 1 - Acesso simples - Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array. Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require("prompt-sync")();
// const frutas = ["Maça", "Laranja", "Pera"];
// console.log(frutas)
const frutas = []
for(let i = 0; i < 3; i++){
frutas.push(prompt("Digite o nome da fruta: "))
}
// Digite o nome da fruta: laranja
// Digite o nome da fruta: melão 
// Digite o nome da fruta: abacaxi
console.log(frutas)
// [ 'laranja', 'melão ', 'abacaxi' ]
console.log("A segunda fruta é: " + frutas[1])
// //A segunda fruta é: Laranja/a que digitou

//[M1S05] Ex 2 - Adicionar e Remover Elementos - Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

frutas.push(prompt("Digite uma fruta adicional: ")); // .push adiciona as frutas ao array vazio frutas[]
frutas.shift();
console.log(frutas)
// //[ 'Laranja', 'Pera', 'Melão' ]



