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
      res.status(201).send('Pessoa adicionada com sucesso.').json(newUser);
    });
    
// Leitura (Read):
// Implemente uma rota GET /users que retorne a lista completa de usuários.
    app.get("/users", (req, res) => {
      res.json(users);
    })
    
// Implemente uma rota GET /users/:id que retorne os detalhes de um usuário específico com base no ID fornecido na URL.

//feito pelo profe Rawan
// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const userId = users.find(userId => userId.id === parseInt(id));
//   if (!user.id) {
//       res.status(404).send('Pessoa não encontrada.');
//       return;
//   }
//   res.json(userId);
// });

    app.get('/users/:id', (req, res) => {
      const userId = parseInt(req.params.id);
      const user = users.find(usuario => usuario.id === userId);
      if (user) {
        res.json(user); // Retorna os detalhes do usuário em formato JSON
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });      
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
  const index = users.findIndex(usuario => usuario.id === parseInt(id))
  if (index === -1) {
      res.status(404).send("Usuário não cadastrado")
      return
  }
  users[index] = {...users[index], ...atualizaUsuario}
  res.status(200).json({"Usuário atualizado com sucesso!": { ...users[index]}})
})


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
  res.status(200).json({"Usuário removido com sucesso!": usuarioRemovido})
})
      

    app.listen(PORT, () => {
    console.log('Servidor do exercícios do CRUD online')
})

