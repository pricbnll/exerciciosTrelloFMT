###Link do Repositório 
Este é o repositório que esta todo o projeto desta API que aprendemos na semana 10 ate a 12

**[Link do Repositório] (https://github.com/pricbnll/api_escola)**


### Exercícios do Trello
## [M1S11] Ex. 1 - Rota de cadastro de curso
Desenvolva uma rota POST com o endpoint ‘/cursos’, capaz de receber, no corpo da requisição, o nome do curso e sua duração em horas. Em seguida, essa rota deve retornar o objeto do curso recém-criado no banco de dados.

Retorne um status code 201 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.

##[ M1S11] Ex. 2 - Rota de listagem de cursos
Desenvolva uma rota GET com o endpoint ‘/cursos’, capaz de listar, em formato JSON, todos os cursos cadastrados no banco de dados.

## [M1S11] Ex.3 - Pesquisa de cursos
Implemente, na rota de listagem de cursos, uma pesquisa pelo nome de um curso e duração. Use o recurso de Query params.

ps: Não consegui pois o sql nao pesquisa por duração de horas e so pelo nome como console.log diz

Executing (default): SELECT "id", "nome", "duracao_horas", "createdAt", "updatedAt" FROM "cursos" AS "cursos" WHERE "cursos"."nome" = 'Frontend';
Executing (default): SELECT "id", "nome", "duracao_horas", "createdAt", "updatedAt" FROM "cursos" AS "cursos" WHERE "cursos"."nome" = 'Frontend';

## [M1S11] Ex. 4 - Rota de atualização de cursos
Desenvolva uma rota PUT com o endpoint ‘/cursos/:id’, capaz de receber no corpo da requisição dados de um curso existente para ser atualizado. Em seguida, essa rota deve retornar o objeto do curso recém-atualizado no banco de dados.

Retorne um status code 200 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.

## [M1S11] Ex. 5 - Rota de deleção de curso
Desenvolva uma rota DELETE com o endpoint ‘/cursos/:id’, capaz de deletar um curso com base no id recebido.

Retorne um status code 204 na resposta da requisição. Além disso, valide se o id informado realmente existe no banco de dados. Caso não exista, retorne um error 404 na resposta da requisição informando que o curso não foi encontrado.


FALTA FAZER!!!
## [M1S12] Ex. 1
Utilizando o projeto da semana 11, adicione, se necessário, os campos e ou tabelas para que exista um sistema de login, com e-mail e senha.

## [M1S12] Ex. 2
Utilizando o projeto da semana 11, adicione um middleware de autenticação utilizando JWT.

## [M1S12] Ex. 3
Utilizando o projeto da semana 11, adicione rotas de login e criação de usuário no sistema. Ambas as rotas devem ser Públicas.

## [M1S12] Ex. 4
Utilizando o projeto da semana 11, com exceção as rotas de login e criação de usuário, deixe todas as rotas privadas, ou seja, é necessário estar logado para utilizar as rotas.

## [M1S12] Ex. 5
OPCIONAL - Organize as rotas por contexto, onde cada contexto é um arquivo separado.

## [M1S13] Ex. 1 - GIT FLOW
Aplique o modelo de gerenciamento de códigos Gitflow no projeto api_escola desenvolvido nas semanas anteriores.

https://github.com/FuturoDEV-Trip/api_escola

## [M1S13] Ex. 2 - Rota de listar cursos
Crie o controlador CursoController para gerenciar todas as operações relacionadas aos cursos. Transfira o código responsável por listar os cursos oara este novo controlador.

Certifique-se de seguir as melhores práticas de organização de código e padrões de nomenclatura ao criar o CursoController.

## [M1S13] Ex. 3 - Rota de cadastrar cursos
Transfira o código responsável por listar os cursos para o CursoController.

Certifique-se de seguir as melhores práticas de organização de código e padrões de nomenclatura ao criar o CursoController.

## [M1S13] Ex. 4 - Rota de deleção de curso
Transfira o código responsável por deletar os cursos para o CursoController.

Certifique-se de seguir as melhores práticas de organização de código e padrões de nomenclatura ao criar o CursoController.

## [M1S13] Ex. 5 - Rota de atualização de curso
Transfira o código responsável por atualizar os cursos para o CursoController.

Certifique-se de seguir as melhores práticas de organização de código e padrões de nomenclatura ao criar o CursoController.

## [M1S13] Ex. 6 - DEBUG


