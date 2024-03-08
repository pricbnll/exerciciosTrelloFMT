// Ex 7 - Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos: nome,idade,profissao . Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.
// Ex 8 - Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa. Além disso ela deve possuir os seguintes atributos: telefone, email, clienteDesde - deve ser uma string no formato “ANO-MES-DIA” . Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, sendo necessário passar parâmetros para o construtor base da classe Pessoa.

class Pessoa {
    nome;
    idade;
    profissao

    constructor(valorNome, valorIdade, valorProfissao){
        this.nome = valorNome;
        this.idade = valorIdade;
        this.profissao = valorProfissao;
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;   //ano-mes-dia

    constructor(valorNome, valorIdade, valorProfissao, valorTelefone, valorEmail, valorClienteDesde){
        super(valorNome, valorIdade, valorProfissao)
        this.telefone = valorTelefone;
        this.email = valorEmail;
        this.clienteDesde = valorClienteDesde;
    }  

    // setData(data) {
    //     // Verifica se o valor passado está no formato correto
    //     const regex = /^\d{4}-\d{2}-\d{2}$/;
    //     if (regex.test(data)) {
    //       this.data = data;
    //     } else {
    //       console.log("Formato de data inválido. Utilize o formato ANO-MES-DIA.");
    //     }
}

let novoCliente = new Cliente ("Carlos", 37, "Engenheiro", 35672233,'carlos@email.com', '2017-11-22')
console.log(novoCliente);

//Cliente {
//     nome: 'Carlos',
//     idade: 37,
//     profissao: 'Engenheiro',
//     telefone: 35672233,
//     email: 'carlos@email.com',
//     clienteDesde: '2017-11-22'
//   }








// // Ideia maluca pelo MDN - (..)Então, você pode reescrever a definição de carro...(...)https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
// class Cliente  {
//     telefone;
//     email;
//     clienteDesde;   //ano-mes-dia
//     pessoa;

//     constructor( valorTelefone, valorEmail, valorClienteDesde, valorPessoa){
//         this.telefone = valorTelefone;
//         this.email = valorEmail;
//         this.clienteDesde = valorClienteDesde;
//         this.pessoa = valorPessoa;
//     }  
// }


// let pessoa1 = new Pessoa("Carlos", 37, "Engenheiro")
// let novoCliente = new Cliente(35672233, "carlos@email.com", '2017-11-22', pessoa1)
// console.log(novoCliente);
// // resposta no console ????????
// // Cliente {
// //     nome: 35672233,
// //     idade: 'carlos@email.com',
// //     profissao: '2017-11-22',
// //     telefone: Pessoa { nome: 'Carlos', idade: 37, profissao: 'Engenheiro' },
// //     email: undefined,
// //     clienteDesde: undefined
// //   }