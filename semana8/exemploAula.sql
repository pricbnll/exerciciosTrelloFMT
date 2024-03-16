create table locais (
	id serial primary key,
	nome varchar(200) not null,
	endereco varchar(400) not null,
	capacidade int not null,
	check(capacidade >= 1)
);

create table eventos (
	id serial primary key,
	nome varchar(200) not null,
	data date not null, 
	check (data > current_date),
	local_id int not null,
	foreign key (local_id) references locais (id),
	ativo boolean not null default true 
);

insert into locais (nome, endereco, capacidade) 
values
('Grand Hotel', 'Av. Navegantes, s/n -SP/SP', 350),
('Gerbera', 'Rua gerbera, 300 - Natal/RN', 500),
('Clara RJ', 'Rua RJ, 220- RJ/RJ', 150);
 
insert into eventos (nome, data, local_id, ativo)
values
('Show Truman', '2024-04-22', 1, true),
('Brincar e pular', '2024-05-22', 2, true),
('Somando', '2024-03-30', 3, true);

select * from locais;
select * from eventos;

select * from locais as l inner join eventos as e 
on l.id = e.local_id;

select 
l.nome as nome_local, 
l.endereco as endereco_local, 
l.capacidade, 
e.nome as nome_evento,
e.data, 
e.ativo
from locais as l inner join eventos as e 
on l.id = e.local_id;


drop table eventos; --primeiro esta que nao esta relacionada com outras tabelas
drop table locais;