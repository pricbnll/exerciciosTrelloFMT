// // Definindo os produtos
// const produtos = {
//   '1': 'Hortifruti',
//   '2': 'Laticínios',
//   '3': 'Carnes',
//   '4': 'Peixes',
//   '5': 'Aves'
// };

// // Array para armazenar as quantidades de cada produto
// let quantidades = new Array(5).fill(0);

// // Função para fazer a compra
// function fazerCompra() {
//   let continuar = true;
  
//   while (continuar) {
//     const resposta = prompt('Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido');

//     if (resposta === '6') {
//       // Finalizar compra
//       finalizarCompra();
//       continuar = false;
//     } else if (produtos[resposta]) {
//       // Produto válido, perguntar quantidade
//       const quantidade = parseInt(prompt(`Quantos itens de ${produtos[resposta]} você deseja comprar?`));
//       if (!isNaN(quantidade) && quantidade > 0) {
//         quantidades[parseInt(resposta) - 1] += quantidade;
//       } else {
//         alert('Por favor, insira uma quantidade válida.');
//       }
//     } else {
//       alert('Opção inválida. Por favor, escolha uma opção válida.');
//     }
//   }
// }

// // Função para finalizar a compra
// function finalizarCompra() {
//   console.log("Quantidades de itens comprados por categoria:");
//   for (let i = 0; i < quantidades.length; i++) {
//     console.log(`${produtos[(i + 1).toString()]}: ${quantidades[i]}`);
//   }
// }

// // Iniciar o processo de compra
// fazerCompra();



// Definição dos produtos
const produtos = {
  '1': 'Hortifruti',
  '2': 'Laticínios',
  '3': 'Carnes',
  '4': 'Peixes',
  '5': 'Aves'
};

// Objeto para armazenar as quantidades de cada produto
let compras = {};

// Função para realizar a compra
function fazerCompra() {
  console.log("Bem-vindo ao supermercado!");

  while (true) {
    const respostaProduto = prompt(`Qual produto você deseja comprar?\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido`);

    if (respostaProduto === '6') {
      // Finalizar compra
      finalizarCompra();
      break;
    } else if (produtos[respostaProduto]) {
      // Produto válido, perguntar quantidade
      const quantidade = parseInt(prompt(`Quantos itens de ${produtos[respostaProduto]} você deseja comprar?`));
      if (!isNaN(quantidade) && quantidade > 0) {
        compras[produtos[respostaProduto]] = (compras[produtos[respostaProduto]] || 0) + quantidade;
      } else {
        alert('Por favor, insira uma quantidade válida.');
      }
    } else {
      alert('Opção inválida. Por favor, escolha uma opção válida.');
    }
  }
}

// Função para finalizar a compra
function finalizarCompra() {
  let produtoMaisComprado = '';
  let quantidadeMaisComprada = 0;

  for (const produto in compras) {
    if (compras[produto] > quantidadeMaisComprada) {
      produtoMaisComprado = produto;
      quantidadeMaisComprada = compras[produto];
    }
  }

  if (produtoMaisComprado !== '') {
    console.log(`O produto mais comprado foi ${produtoMaisComprado}, com ${quantidadeMaisComprada} unidades.`);
  } else {
    console.log('Nenhum produto foi comprado.');
  }
}

// Iniciar o processo de compra
fazerCompra();
