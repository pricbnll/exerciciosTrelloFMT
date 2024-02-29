// [M1S04] Ex 2 - Função - Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

// function parOuImpar(numero) {
//     if (numero % 2 == 0) {
//         return "Este número é par.";
//     } else {
//         return "Este número é ímpar.";
//     }
// }

// //teste
// console.log(parOuImpar(5)) // Este número é ímpar.
// console.log(parOuImpar(4)) // Este número é par.



// [M1S04] Ex 3 - Arrow function - Crie uma arrow function que recebe um array de números e calcula a média deles. OBS: para pegar o tamanho de um array use nomeDoArray.length

//arrow function
// const soma = (n1,n2) => n1+n2;
// console.log(soma(5,35));



// //RESPOSTA 1:
// const media = (numeros) => {
//     const valorInicial = 0;
//     const soma = numerosArray.reduce((acumulador, numero) => acumulador + numero, valorInicial);
//     return soma / numerosArray.length;
// }

// const numerosArray = [1,5,10,20]; // 36/4=9
// console.log("A média dos números deste array é " + media(numerosArray));

// //esse 0 (valorInicial) indica o lugar desde onde vai começar a contar o array, mas se nao coloco nada tambem iniciará no 0, certo? mas fica mais completo ❤️

// //RESPOSTA 2:
// const media = () => {
//     const soma = numerosArray.reduce((acumulador, numero) => acumulador + numero);
//     return soma / numerosArray.length;
// }

// const numerosArray = [1,5,10,20]; // 36/4=9
// console.log("A média dos números deste array é " + media(numerosArray));

// // NAO SEI POR QUE DAS DIFERENÇAS MAS AMBAS ESTAO COM CONSOLE OK!!!!


// //ESTE ABAIXO É OUTRA FORMA:
//     const media = (numeros) => {
//         let soma = 0;
//         for (let i = 0; i < numeros.length; i++) {
//             soma += numeros[i];
//         }
//         return soma/numeros.length;
//     };
    
//     const numerosArray = [1,5,10,20]; // 36/4=9
//     const resultadoMedia = media(numerosArray)

//         console.log("A média dos números deste array é " + resultadoMedia);

 
//Professor Ray
// const exercicio = (array) => {
//     let soma = 0;
//     for(let numero of array) {
//         soma = soma + numero;
//     }
//     let media = soma/array.length;
//     console.log(media);
// }
// const numerosArray = [1,5,10,20]; // 36/4=9
// exercicio(numerosArray);


//[M1S04] Ex 4 - Funções de callback - Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. Esta função deve simular uma operação de adição, onde os dois números são somados. Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima. OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro. 

// function adicao(num1, num2 , funcaoAnonima) {
//     let soma = num1 + num2;
//     funcaoAnonima(soma);
// }

// adicao(5, 15, (resultado) => {
//     console.log("O resultado da adição é:" + resultado);
// })


//[M1S04] Ex 5 - Laço while - Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, será apenas aceita três tipos de avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram a série como ruim.

// let avaliacaoRuim = 0;
// let avaliacaoBom = 0;
// let avaliacaoExcelente = 0;

// let numeroEntrevista = 4;
// let contadorEntrevista = 0;

// while (contadorEntrevista < numeroEntrevista) {
//     let avaliacao = prompt("Qual a sua avaliação da série `Strange Things`? Escolha entre ruim, bom e excelente.")
    
//     switch (avaliacao.toLocaleLowerCase()) {
//         case "ruim":
//             avaliacaoRuim++;
//             break;
//         case "bom": 
//             avaliacaoBom++;
//             break;
//         case "excelente":
//             avaliacaoExcelente++;
//             break;
//         default:
//             alert("Por favor, insira uma avaliação válida (ruim, bom, excelente).");
//             break;
//     }
//     contadorEntrevista++;
// }
//     console.log("O número total de pessoas que classificaram a série como ruim é: " + avaliacaoRuim);

// LEMBRAR DE RODAR NO LIVE SERVER DO INDEX.HTML - COLOCAR O src=".script.js"no script/body

// colega conrado:
// let contadorRuim = 0;

// const respostas = ["ruim", "bom", "excelente", "ruim"];//nao usou prompt, ja deu as respostas

// let i = 0;

// while (i < respostas.length) {
//   let avaliacao = respostas[i];

//   if (avaliacao === "ruim") {
//     contadorRuim++;
//   }

//   i++;
// }

// console.log(`Número de pessoas que classificaram a série como ruim: ${contadorRuim}`);



// [M1S04] Ex 6 - Laço for - Utilizando estrutura de repetição for realize a tabuada do número 5 e exiba no console da seguinte forma:
// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// ....
// 5 x 10 = 50

// function tabuadaDoCinco() {
//     for (let i = 0; i <= 10; i++) {
//         let resultado = i * 5;
//         console.log("5 x " + i + " = " + resultado);
//     }
// }
// tabuadaDoCinco();


    // for (let i = 0; i <= 10; i++) {
    //     console.log(`5 x ${i} = ${5 * i}`);
    // }




//[M1S04] Ex 7 - While - Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:
// (1)Hortifruti
// (2)Laticínios
// (3)Carnes
// (4)Peixes
// (5)Aves
// (6)Fechar pedido
// Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
// Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
// Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

const produtos = {
    '1': 'Hortifruti',
    '2': 'Laticínios',
    '3': 'Carnes',
    '4': 'Peixes',
    '5': 'Aves'
  };

  const quantidades = {
    'Hortifruti': 0,
    'Laticínios': 0,
    'Carnes': 0,
    'Peixes': 0,
    'Aves': 0
  };

  
  while (true) {
    const resposta = prompt("Qual produto você deseja comprar?\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido");

    if (resposta === '6') {
      finalizarCompra();
      break;
    } else if (produtos[resposta]) {
      const quantidade = prompt(`Quantos itens de ${produtos[resposta]} você deseja comprar?`);
      if (quantidade > 0) {
        quantidades[produtos[resposta]] = quantidade;  
      } else {
        alert('Por favor, insira uma quantidade válida.');
      }
    } else {
      alert('Opção inválida. Por favor, escolha uma opção válida.');
    }
  }
 
  //problema: se eu selecionar mais de uma vez o mesmo produtos nao soma a quantidade do produto??????????
  

  function finalizarCompra() {
    let produtoMaisComprado = '';
    let produtoMaiorQuantidade = 0;
  
    for (const produto in quantidades) {
      if (quantidades[produto] > produtoMaiorQuantidade) {
        produtoMaisComprado = produto;
        produtoMaiorQuantidade = quantidades[produto];
      }
    }
      alert(`O produto mais comprado foi ${produtoMaisComprado}, com ${produtoMaiorQuantidade} unidades.`);
  }
  
fazerCompra();



//Exerecicio da Ray com uvas
// let desejaSair = prompt("Você deseja entrar no sistema? Digite S ou N");
// let totalUvas = 0;
// while (desejaSair == "S") { //enquanto a opção for S, o laço irá continuar a repetir
//     let quantUva = prompt("quantas uvas você deseja comprar?");
//     totalUvas += parseInt(quantUva);
//     desejaSair = prompt("Você deseja continuar a compra de uvas? Digite S ou N");
// }
// console.log("Total de uvas compradas: " + totalUvas);



/* TENTATIVA 

<h1>Bem vindo! Por favor escolha uma opção para realizar a compra</h1>

<form action="selectForm">
    <label for="tipoProduto">Escolha o produto que deseja comprar:</label>
    <select name="tipoProduto" id="tipoProduto">
        <option>Hortifruti</option>
        <option>Laticínios</option>
        <option>Carnes</option>
        <option>Peixes</option>
        <option>Aves</option>
        <option>Finalizar pedido</option>
    </select>
</form> 

<!-- //quando selecionar o produtos PERGUNTAR quantos deste produto quer comprar e colocar num ARRAY
 array somente com o valor de cada itens - 
[qtos itens hortifrut, qtso itens 2, qtod itens 3..toExponential.apply.] -->

<!-- Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida. -->

<!-- Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade. 
------ logica com if e verificar qual o maior item -->

//quando selecionar "Hortifruti" perguntar quantos produtos queres deste opção? e colocar ARRAY

switch (quantidadeProduto) {
case 1:
    quantidades["Hortifruti"] += quantidade;
    break;
case 2:
    quantidades["Laticínios"] += quantidade;
    break;
case 3:
    quantidades["Carnes"] += quantidade;
    break;
case 4:
    quantidades["Peixes"] += quantidade;
    break;
case 5:
    quantidades["Aves"] += quantidade;
    break;
} */

// //Outros exemplor na internet
// //let frutas = [];
// let laticinios = [];
// let doces = [];
// let congelados = [];
// let bebidas = [];
// let comida = "";
// let categoria = "";

// let adicionarMais = "sim"; // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
// while(adicionarMais != "não"){
//     adicionarMais = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com 'sim' ou 'não'.");
//     while (adicionarMais != "sim" && adicionarMais != "não"){//enquanto o texto for diferente de "sim" e de "não",
//         alert (`Operação não reconhecida!`);
//         adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
//     }

//     if (adicionarMais === "não"){ //se o texto lido for "não", sair do while
//         break;
//     }

//     comida = prompt("Qual comida você deseja inserir?");
//     categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticinios', 'doces', 'congelados' ou 'bebidas'?");
//     if(categoria === 'frutas'){
//         frutas.push(comida);
//     } else if  (categoria === 'laticinios'){
//         laticinios.push(comida);
//     } else if (categoria === 'doces'){
//         doces.push(comida);
//     } else if (categoria === 'congelados'){
//         congelados.push(comida);
//     } else if (categoria === 'bebidas'){
//         bebidas.push(comida)
//     } else {
//         alert("Essa categoria não foi pré-definida.")    
//     }
// }
// alert (`Lista de compras: \n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n Bebidas: ${bebidas}`);

// //No código fornecido, você está adicionando itens à lista de compras com base na categoria informada pelo usuário. Agora, para remover os itens, você pode utilizar o método splice().Vamos supor que você queira remover um item da lista de frutas. Primeiro, você precisa encontrar a posição desse item na lista. Para isso, você pode utilizar o método indexOf(). Por exemplo:

// let itemRemover = prompt("Qual fruta você deseja remover?");
// let posicao = frutas.indexOf(itemRemover);

// //Em seguida, você pode utilizar o método splice() para remover o item da lista. Por exemplo:

// frutas.splice(posicao, 1);


// //O primeiro parâmetro do splice() é a posição do item que você deseja remover e o segundo parâmetro é a quantidade de itens que você deseja remover a partir dessa posição. Você pode repetir esse processo para cada categoria da sua lista de compras. - https://cursos.alura.com.br/forum/topico-duvida-7daysofcode-279276

// //#2
// Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

// RESPOSTA

// // Inicializando as listas de categorias
// let frutas = [];
// let laticinios = [];
// let congelados = [];
// let doces = [];

// // Função para adicionar item à categoria correspondente
// function adicionarItemACategoria(item, categoria) {
//   switch (categoria) {
//     case "frutas":
//       frutas.push(item);
//       break;
//     case "laticinios":
//       laticinios.push(item);
//       break;
//     case "congelados":
//       congelados.push(item);
//       break;
//     case "doces":
//       doces.push(item);
//       break;
//   }
// }

// // Início do programa
// while (true) {
//   let adicionar = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");

//   if (adicionar.toLowerCase() !== "sim") {
//     break;
//   }

//   let comida = prompt("Qual comida você deseja inserir?");
//   let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces)");

//   adicionarItemACategoria(comida, categoria);
// }

// // Exibindo a lista de compras organizada
// alert(`Lista de compras:
//   Frutas: ${frutas.join(", ")}
//   Laticínios: ${laticinios.join(", ")}
//   Congelados: ${congelados.join(", ")}
//   Doces: ${doces.join(", ")}
// `);

// HTML

// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Organizador de Lista de Compras</title>
// </head>
// <body>
//   <script src="listaDeCompras.js"></script>
// </body>
// </html>

// {/* Thieres Rafael LinkedIn */}