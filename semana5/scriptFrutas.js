//[M1S05] Ex 1 - Acesso simples - Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array. Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require("prompt-sync")();
const frutas = ["Maça", "Laranja", "Pera"];

// const frutas = []
// for(let i = 0; i < 3; i++){
// frutas.push(prompt("Digite o nome da fruta: "))
// }

console.log("A segunda fruta é: " + frutas[1])
// //A segunda fruta é: Laranja

//[M1S05] Ex 2 - Adicionar e Remover Elementos - Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

frutas.push(prompt("Digite uma fruta adicional: "));
frutas.shift();
console.log(frutas)
// //[ 'Laranja', 'Pera', 'Melão' ]



