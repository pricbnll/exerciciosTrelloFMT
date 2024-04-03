// [M1S09] Ex 6 - CRUD - Elabore um CRUD para a rota /users:

const express = require("express")
const app = express()
const PORT = 3333

app.use(express.json())

// Middleware para registrar informações sobre todas as solicitações recebidas
app.use((req, res, next) => {
  const horaAtual = new Date().toISOString();
  console.log(`[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`);
  next(); 
});

let users = [];

//   Criação (Create):
// Implemente uma rota POST /users que permita adicionar um novo usuário à lista.
// O corpo da solicitação deve conter os dados do usuário a ser adicionado.
// Após adicionar o usuário com sucesso, retorne uma resposta com status 201 (Created) e os dados do usuário recém-criado.

app.post("/users", (req,res) => {
  const user = req.body
  // if (users.length > 0) {
    //     user.id = users[users.length - 1].id + 1; //  pega a última pessoa da lista. Depois, .id pega o id dessa última pessoa.
    // } else {
      //    user.id = 1;
      // }
      // users.push(user);
      const newUser = {
        id: users.length + 1, // Incrementa o ID sequencialmente
        name: user.name,
        email: user.email
      };
      users.push(newUser);
      res.status(201).send(newUser);
    });
    
// Leitura (Read):
// Implemente uma rota GET /users que retorne a lista completa de usuários.
    app.get("/users", (req, res) => {
      res.send(users);
    })
    
// Implemente uma rota GET /users/:id que retorne os detalhes de um usuário específico com base no ID fornecido na URL.

//feito pelo profe Rawan
// app.get('/users/:id', (req, res) => {
//   // console.log(req);
//   // console.log(req.params);
//   const { id } = req.params;
//   // console.log(id)
//   const pessoa = users.find(user => {
//     user.id === parseInt(id)
//   });
//   if (!pessoa) {
//       res.status(404).send('Pessoa não encontrada.');
//       return;
//   }
//   res.send(users);
// });

    app.get('/users/:id', (req, res) => {
      const id  = parseInt(req.params.id);
      const user = users.find(user => user.id === id);
      if (user) {
        res.send(user); // Retorna os detalhes do usuário em formato JSON
      } else {
        res.status(404).send({ error: 'Usuário não encontrado' });      
// Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
      }
    });
    
// Atualização (Update):
// Implemente uma rota PUT /users/:id que permita atualizar os dados de um usuário existente com base no ID fornecido na URL.
// O corpo da solicitação deve conter os novos dados do usuário a serem atualizados.
// Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
// Após atualizar o usuário com sucesso, retorne uma resposta com status 200 (OK) e os dados atualizados do usuário.

app.put("/users/:id", (req, res) => {
  const {id} = req.params
  const atualizaUsuario = req.body

  // solicitaçao no body
  // {
  //   name: "foobar",
  //   email: "foobar"
  // };

  const index = users.findIndex(user => user.id === parseInt(id))
  //fazer um console log para ver o que acontece se nao tem nada
  console.log(index);
  if (index === -1) { 
      res.status(404).send("Usuário não cadastrado")
      return
  }
  users[index] = {...users[index], ...atualizaUsuario}
  res.status(200).send({"Usuário atualizado com sucesso!": { ...users[index]}})
})

// Para enviar uma solicitação PUT para atualizar um usuário usando o Postman, você precisa seguir estes passos:

// Abra o Postman e crie uma nova solicitação.
// Selecione o método HTTP como PUT.
// Insira a URL da rota que você configurou para atualizar usuários. Por exemplo: http://localhost:3000/users/:id, onde :id é o ID do usuário que você deseja atualizar.
// Selecione a guia "Body".
// Selecione o tipo de dado como "raw" e escolha o formato como "JSON (application/json)".
// No campo de texto abaixo, insira os novos dados do usuário que você deseja atualizar. Por exemplo:
// json
// Copy code
// {
//     "name": "Novo Nome",
//     "email": "novoemail@email.com"
// }
// Clique em "Send" para enviar a solicitação.
// Isso enviará uma solicitação PUT para a rota configurada no seu servidor, enviando os novos dados do usuário no corpo da solicitação. O servidor irá processar essa solicitação, atualizar os dados do usuário correspondente e retornar uma resposta adequada, conforme implementado na rota PUT no servidor.



// Exclusão (Delete):
// Implemente uma rota DELETE /users/:id que permita excluir um usuário com base no ID fornecido na URL.
// Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
// Após excluir o usuário com sucesso, retorne uma resposta com status 200 (OK) e uma mensagem indicando que o usuário foi excluído.

app.delete("/users/:id", (req, res) => {
  const {id} = req.params
  const index = users.findIndex(usuario => usuario.id === parseInt(id))
  if (index === -1) {
      res.status(404).send("Usuário não encontrado.")
      return
  }
  const usuarioRemovido = users.splice(index, 1)[0]
  res.status(200).send({"Usuário removido com sucesso!": usuarioRemovido})
})
      

    app.listen(PORT, () => {
    console.log('Servidor do exercícios do CRUD online')
})

