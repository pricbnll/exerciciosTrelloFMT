// [M1S06] Ex 6, 7, 8
// Projeto (parte 1) - Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep (Documentação - ViaCEP - Webservice CEP e IBGE gratuito ).
// OBS: Crie uma página html para imprimir o endereço através do cep. Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json . Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: “logradouro, complemento - bairro - localidade/uf”. O cep_informado será passado por prompt pelo usuário.
// Projeto (parte 2) - Continuando o exercício 06 iremos além de informar através do alert o endereço informado pelo cep iremos perguntar também se os dados informados estão corretos, caso esteja tudo correto salve esses dados no localStorage na chave “endereco”.OBS: Revise o conteudo do localStorage para relembrar o comando para salvar no localStorage.
// Projeto (parte 3) - Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 iremos adaptar melhor nossa aplicação. Antes de tudo, assim que executar a aplicação você irá verificar no localStorage se já existe a chave “endereco” caso haja, deverá ser informado que já existe um endereço na nossa base de dados e se o usuário deseja fazer uma nova requisição para um novo endereço, após disponibilizar o prompt para a captura do novo cep, salve os dados na mesma chave “endereco” existente no localStorage. Caso não haja a chave o fluxo deve ser feito como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a requisição, e salvar os dados no localStorage. OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.

//parte 3

let endereco = localStorage.getItem("endereco");

if (endereco == null) {
  pegarEndereco();
} else {
  //fazer tratamento pro else depois
  let atualiza = prompt("Endereço já informado. Deseja atualizar? S/N");
  if (atualiza == "S") {
    pegarEndereco();
  } else {
    alert("Finalizado.");
  }
}


function pegarEndereco() {
  //parte1
  let consultaCep = prompt("Qual CEP desejas obter o endereço?");

  fetch(`https://viacep.com.br/ws/${consultaCep}/json`, { method: "GET" })
    .then((resp) => {
      return resp.json();
    })
    .then((respApi) => {
      alert(
        ` O edenreço procurado é ${respApi.logradouro}, ${respApi.complemento} - ${respApi.bairro} - ${respApi.localidade}/${respApi.uf}`);
  
  //parte2
  let resposta = prompt("Os dados estão corretos?");
  if (resposta.toLowerCase() == "sim") {
    localStorage.setItem("endereco", JSON.stringify(respApi));
  } else {
    atualizaCep();
  }
});
}
