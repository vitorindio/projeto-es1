-- tipos de reserva
insert into tipo_reserva (codigo, descricao)
values (1, "automática");

insert into tipo_reserva (codigo, descricao)
values (2, "sob autorização");

insert into tipo_reserva (codigo, descricao)
values (3, "recorrente");

-- insere discente
insert into usuario (nome, email, telefone)
values ("Mateus Alcântara", "mateus.alcantara@gmail.com", "21999999999");

INSERT INTO discente (matricula)
VALUES ((select u.matricula
from usuario u
order by u.matricula DESC
LIMIT 1));

-- insere docente
insert into usuario (nome, email, telefone)
values ("Jobson", "jobson@gmail.com", "21999999999");

insert into docente (matricula, siape)
values ((select u.matricula
from usuario u
order by u.matricula DESC
LIMIT 1), (select u.matricula
from usuario u
order by u.matricula DESC
LIMIT 1));

-- insere diretor
insert into usuario(nome, email, telefone)
values ("Andreatta", "andreatta@gmail.com", "21999999999");

INSERT into diretor (matricula_diretor)
values ((select u.matricula
from usuario u
order by u.matricula DESC
LIMIT 1));

-- insere admin
insert into administrador (nome)
values ("Pedro");

-- insere sala
INSERT into sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
values ("Anexo II", "Sala normal", "Prédio do CCET", 15, "Televisão", 1, 1);

INSERT into sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
values ("Laboratório I", "Laboratório", "Prédio do CCET",40, "iMacs", 1, 3);

INSERT into sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
values ("Laboratório II", "Laboratório", "Prédio do CCET",40, "Computadores que funcionam :)", 0, 2);

INSERT INTO sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
VALUES ('Sala de Entrevistas', 'Entrevista', 'Edifício de Recursos Humanos, 5º Andar', 3, 'Cadeiras confortáveis, Mesa de entrevista, Iluminação adequada', 1, 1);

INSERT INTO sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
VALUES ('Sala de Estudos II', 'Estudo', 'Biblioteca, 2º Andar', 12, 'Mesas individuais, Iluminação regulável, Tomadas elétricas', 1, 3);

INSERT INTO sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
VALUES ('Sala de Palestras', 'Palestra', 'Edifício de Eventos, 1º Andar', 80, 'Palco, Projetor, Cadeiras', 0, 2);

INSERT INTO sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
VALUES ('Sala de Reuniões B', 'Reunião', 'Edifício Secundário, 3º Andar', 20, 'Projetor, Quadro branco, Cadeiras', 1, 1);

INSERT INTO sala (nome, tipo, localizacao, lotacao, recursos, disponivel, tipo_reserva_codigo)
VALUES ('Laboratório III', 'Laboratório', 'Edifício de Ciências, 4º Andar', 15, 'Equipamentos científicos, Bancadas, Computadores', 1, 3);


-- insere reserva automática
insert into reserva (descricao, aberta, dia_semana_1, tipo_reserva_codigo)
values ("Aluno quer estudar", 1, "SEGUNDA-FEIRA", 1);
insert into reserva_automatica (sala_codigo, usuario_matricula, "data", codigo)
values (1, 1, "2023-12-18", (SELECT r.codigo 
from reserva r
order by codigo desc
limit 1));

-- insere reserva recorrente
insert into reserva (descricao, aberta, dia_semana_1, dia_semana_2, tipo_reserva_codigo)
values ("Aulas de PCS/S1", 1, "SEGUNDA-FEIRA", "QUARTA-FEIRA", 3);

insert into reserva_recorrente(matricula_diretor, codigo_sala, data_inicio, data_fim,
docente_siape, docente_matricula, codigo)
values (3, 1, "2023-02-01", "2023-06-31", 2, 2, (SELECT r.codigo 
from reserva r
order by codigo desc
limit 1));

-- insere reserva sob autorizacao
insert into reserva (descricao, aberta, dia_semana_1, dia_semana_2, tipo_reserva_codigo)
values ("Aulas de deep learning", 0, "SEGUNDA-FEIRA", "QUARTA-FEIRA", 2);

insert into reserva_sob_autorizacao (sala_codigo, usuario_matricula, administrador_matricula,
aceito, "data", em_analise, codigo)
values (1, 1, 1, 0, "2023-01-25", 1,(SELECT r.codigo 
from reserva r
order by codigo desc
limit 1));

-- aprovação da reserva sob autorizacao:
UPDATE reserva_sob_autorizacao
set aceito = 1, justificativa = "É uma matéria muito importante", em_analise = 0
where codigo = 3;

UPDATE reserva
set aberta = 1
WHERE codigo = 3;

-- insere reserva sob autorizacao
insert into reserva (descricao, aberta, dia_semana_1, dia_semana_2, dia_semana_3 ,tipo_reserva_codigo)
values ("Aulas de Álgebra Linear", 0, "SEGUNDA-FEIRA", "QUARTA-FEIRA", "SEXTA-FEIRA" ,2);

insert into reserva_sob_autorizacao (sala_codigo, usuario_matricula, administrador_matricula,
aceito, "data", em_analise, codigo)
values (5, 3, 1, 0, "2024-12-25", 1,(SELECT r.codigo 
from reserva r
order by codigo desc
limit 1));


