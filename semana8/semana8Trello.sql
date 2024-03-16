create database exercicios_trello;

-- ex 1 - Crie uma tabela chamada Departamento. A tabela deve conter as seguintes colunas:
-- id (chave primária, tipo serial)
-- nome (texto) - não nulo
-- dataCriacao(data) - não nulo
create table Departamento (
	id serial primary key,
	nome varchar(200) not null,
	dataCriacao date not null
);

--ex 2 - Crie uma tabela chamada Funcionarios. A tabela deve conter as seguintes colunas:
-- id (chave primária, tipo serial)
-- nome (texto) - não nulo
-- idade (inteiro) - não nulo
-- cargo (texto) - não nulo
-- salario (decimal) - não nulo
-- idDepartamento (inteiro) - não nulo - chave estrangeira tabela Departamento
-- Atividade
create table Funcionarios (
	id serial primary key,
	nome varchar(200) not null,
	idade int not null,
	cargo varchar(200) not null,
	salario decimal (18,2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references Departamento (id) --on delete cascade  --este metodo nao é seguro, aqui deleta o id no departamento que deletara todos os funcionarios daquele departamento
);

-- adicionar check idade >= 14 anos
-- alter table Funcionarios  
--     add constraint  idade 
-- 	check(idade >= 14);



select * from departamento;
select * from funcionarios;
select * from Funcionarios where nome ilike 'Paul%';


-- ex 3 - Crie três registros na tabela Departamento.
insert into Departamento (nome, dataCriacao)
	values 
	('Administrativo', '2024-03-14'),	
	('RH', '2024-03-14'),	
	('Gerência', '2024-03-14');
	
-- ex 4 - Crie três registros na tabela Funcionarios. Lembre-se de adicionar um idDepartamento válido.	
insert into Funcionarios (nome, idade, cargo, salario, idDepartamento)
	values 
	('Paulo Amaral', 34, 'Psicologo', '3500', 2),
 	('Carla Paris', 25, 'Gestora de Projetos', '4500', 3),		
	('Patricia Ruiz', 44, 'Administradora', '5000', 1),
 	('Lino da Silva', 24, 'Administrador', '4000', 1);

--viola a constraint check idade >=14 anos
-- insert into Funcionarios (nome, idade, cargo, salario, idDepartamento)	
-- 	values ('Bela Nunes', 13, 'Estágiaria', '1500', 2);
		

-- DELETA PARA SEMPRE AS TABELAS!!! CUIDADO!!!!
-- drop table Funcionarios;
-- drop table Departamento;

-- ex 5 - Crie uma consulta usando o JOIN para exibir os dados da tabela Funcionarios junto as informações da tabela Departamento
select * from departamento as d inner join funcionarios as f
on d.id = f.idDepartamento;

--Diferença entre INNER JOIN e LEFT JOIN - Enquanto o INNER JOIN combina todos os valores das duas tabelas e retorna no resultado somente as linhas presentes em ambas, o LEFT JOIN traz todas as linhas presentes na tabela 1 (ou tabela da esquerda) com os valores correspondentes da tabela 2.
select * from departamento as d left join funcionarios as f
on d.id = f.idDepartamento;

--ex 6 - Crie um script de update para atualizar um registro na tabela Funcionarios e um na tabela de Departamento. O dado a ser deve ser o nome do Departamento e a idade do Funcionario
update Departamento set nome = '' where id = ;
update Funcionarios set idade =  where id = ;

-- ex 7 Crie um script de delete para remover registros da tabela Funcionarios e Departamento. O delete na tabela Funcionarios deve remover somente o registro na própria tabela. Porém ao usar o delete na tabela Departamento deve ser removido todos os registros na tabela Funcionarios que contenha uma referência a chave estrangeira idDepartamento, ou seja, remover todos os funcionários que foram cadastrados naquele departamento.
delete from Funcionarios where nome ='' ;

alter table Funcionarios
    drop constraint idDepartamento;    -- ou drop foreign key idDepartamento
alter table Funcionarios  
    add constraint  idDepartamento   --continua int not null., so alteramos a restrição
	foreign key (idDepartamento) references Departamento (id) on delete cascade;
delete from Departamento where id = 1;
 --ou
delete from Funcionarios where idDepartamento = 1;
delete from Departamento where id = 1;
--ou
delete from Funcionarios where idDepartamento in (select id from Departamento where id = 3);
delete from Departamento where id = 3;