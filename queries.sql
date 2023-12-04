-- queries para listar reservas automáticas
create view reservas_automaticas as
SELECT r.*, ra.sala_id, ra.data, u.matricula, u.nome,s.nome as 'nome_sala',
s.id as 'codigo_sala', s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel
from reserva r
left join reserva_automatica ra 
on r.id = ra.id
join usuario u
on ra.usuario_matricula  = u.matricula
join sala s 
on ra.sala_id = s.id;


-- queries para listar reservas recorrentes
create view reservas_recorrentes as
SELECT r.id, r.descricao, r.aberta, r.dia_semana_1, r.dia_semana_2, r.dia_semana_3,
rr.data_inicio, rr.data_fim, d.matricula_docente, d.siape, d2.matricula_diretor, s.nome as 'nome_sala',
s.id as 'sala_id', s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel, u.nome as nome_docente,
u.email as email_docente, u2.nome as nome_diretor, u2.email as email_diretor
from reserva r
join reserva_recorrente rr
on r.id = rr.id
join sala s
on s.id = rr.sala_id
join docente d
on d.matricula_docente = rr.docente_matricula
join usuario u
on u.matricula = d.matricula_docente
join diretor d2
on d2.matricula_diretor = rr.matricula_diretor
join usuario u2
on d2.matricula_diretor = u2.matricula;


-- queries para listar reservas sob autorização
create view reservas_sob_autorizacao as
SELECT r.id, r.descricao, r.aberta, r.dia_semana_1, r.dia_semana_2, r.dia_semana_3 ,
       rsa.justificativa, rsa.em_analise, rsa.aceito, rsa.data, u.*, s.nome as 'nome_sala',
       s.id as 'sala_id', s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel,
       a.id as 'id_adm', a.nome as 'nome_adm', r.tipo_reserva as 'tipo_reserva'
from reserva r
         join reserva_sob_autorizacao rsa
              on r.id = rsa.id
         join usuario u
              on rsa.usuario_matricula = u.matricula
         join sala s
              on s.id = rsa.sala_id
         join administrador a
              on rsa.administrador_id = a.id;


