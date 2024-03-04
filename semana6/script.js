// :) [M1S06] Ex 1 - Promisse - Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”. Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”. OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro

const prompt = require("prompt-sync")();

function numeroPar(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve();
      } else {
        reject();
      }
    });
  }

  const num = (prompt("Digite um número: "))

numeroPar(num)
.then (() => {
    console.log("Número validado é par");
    })
.catch (() => {
    console.error("Error: número informado é ímpar");
})

//[M1S06] Ex 2 - Async/Await - Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário. Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores). Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. Utilize async/await para realizar a chamada de forma assíncrona. Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações, exibe-as no console.
// Minhas obs: colocar uma promisse. Nada depois da promise será lido, resolve dentro do timeout para mostrar dentro dos 2segundos. TODA A VEZ QUE EU DOU RETURN numa função com UMA PROMISE A FUNÇÃO SE TORNA UMA PROMISE!

function getUserInfo() {
  return new Promise((resolve, reject) => {
    // let user;
    setTimeout(() => {
       let user = {
        nome: "Pri",
        idade: 43,
        email: "pri@email.com",
      };
      resolve(user);
    }, 2000);
  });
}


async function displayUserInfo() {
  const retorno = await getUserInfo(); // await espera o que tiver para fazer na promisse
  console.log(retorno);
};

displayUserInfo();


// :) [M1S06] Ex 3 - Fetch API - Crie um arquivo JSON chamado data.json com a seguinte estrutura interna: {"nome": "João","idade": 30,"email": "joao@example.com"}. Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML.

fetch ('./data.json')
.then ((resp) => {
    return resp.json();
}) .then((respApi) => {
    const jsonString = JSON.stringify(respApi);
    document.write(jsonString);
}).catch (()=> {
    document.write("Erro");
})

// :) [M1S06] Ex 4 - LocalStorage - Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.
//converte https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

const user = {};
user.nome = prompt("Qual  o seu nome?");
user.idade = prompt("Qual a sua idade?");
user.email = prompt("Qual a seu email?");
//Passa objeto para String
const userString = JSON.stringify(user);

localStorage.setItem('user', userString);

// ;) [M1S06] Ex 5 - Fetch API - Construa uma comunicação com a fetch API para a url (https://api.thecatapi.com/v1/images/search?limit=10 ). Essa API retorna uma lista de objetos com 10 imagens aleatórias, sua missão será imprimir em um document.write todas as imagens com a seguinte formatação:“<img src=’${url_da_imagem}’/> <br />”
// OBS:
// - Para fazer a interação pela lista utilize forEach ou o laço for of. A ideia será passar pelo array apenas para pegar a url_da_imagem e ir imprimindo em um document.write() a tag com a formatação dada acima.
// - A url_da_imagem virá em cada objeto dentro do array na propriedade url.
// - Para acessar a documentação da API acesse: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
// - (opcional) Caso queira uma visualização melhor coloque na tag img o atributo width: Ex: width='200'

let options = {
  method: "GET",
};

fetch('https://api.thecatapi.com/v1/images/search?limit=10', options)
    .then((resp) => {
        return resp.json();
    })
    .then(images => {
        images.forEach((image) => {
            const imageApi = image.url;
            document.write(`<img src='${imageApi}'/> <br />`);
        });
      })

    // OU com for of
    // .then(images => {
    //     for (const image of images) {
    //         const imageApi = image.url;
    //         const imageUrl = `<img src='${imageApi}'/> <br />`;
    //         document.write(imageUrl);
    //     };
    // })

    .catch(() => {
        console.error("Deu erro");
    });
