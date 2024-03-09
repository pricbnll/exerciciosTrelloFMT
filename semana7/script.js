// [M1S07] 
// Ex 1 - Criando classe Produto - Crie uma classe chamada Produto com os seguintes atributos: nome, preco, quantidade
// Ex 2 - Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.
// EX 3 - Crie um método para a classe Produto chamado de Vender(). Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível. Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.
// EX 4 - Crie um método chamado Repor() dentro da classe Produto. Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.
// Ex 5 - Crie um método chamado de MostrarEstoque() dentro da classe Produto. Este método deve exibir uma mensagem parecida com a seguinte: “O produto CANETA BIC AZUL possui 5 unidades disponíveis”
// Ex 6 - Crie um método chamada de AtualizarPreco dentro da classe Produto.Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.


class Produto {
  nome;
  preco;
  quantidade;

  constructor(valorNome, valorPreco, valorQuantidade){
    this.nome = valorNome;
    this.preco = valorPreco;
    this.quantidade = valorQuantidade;
  }

  Vender(qtdeVendida) {
    if(qtdeVendida > this.quantidade){
      console.log(`Estoque insuficiente. A quantidade existente no estoque atualmente: ${this.quantidade} unidade(s)`)
      return
    }
    this.quantidade -= qtdeVendida
    console.log(`A quantidade vendida é ${qtdeVendida} e a quantidade atual em estoque é ${this.quantidade}`)
    return this.quantidade
  }

  Repor(qtdeReposta){
    if(qtdeReposta > this.quantidade){
      this.quantidade += qtdeReposta
      console.log(`A quantidade reposta é ${this.quantidade}`)
    }
  }

  MostrarEstoque(novoProduto){
    //“O produto CANETA BIC AZUL possui 5 unidades disponíveis”
    console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis”\n`) // para quebrar a linha \n
  }

  AtualizarPreco(novoPreco){
  console.log(`O novo preço do produto ${this.nome} é ${novoPreco}`)
  }
}

const canetaBicAzul = new Produto("Caneta Bic Azul", 4.50, 0);

console.log(canetaBicAzul);   //Produto { nome: 'Caneta Bic Azul', preco: 4.5, quantidade: 5 }
canetaBicAzul.Vender(4); //Estoque insuficiente. A quantidade existente no estoque atualmente: 0 unidade(s)
canetaBicAzul.Repor(5);   //A quantidade reposta é 5
canetaBicAzul.MostrarEstoque();    //O produto CANETA BIC AZUL possui 5 unidades disponíveis”
canetaBicAzul.Vender(3); //A quantidade vendida é 3 e a quantidade atual em estoque é 2
canetaBicAzul.AtualizarPreco(1.99); //O novo preço do produto Caneta Bic Azul é 1.99