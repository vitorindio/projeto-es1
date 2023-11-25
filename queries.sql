-- queries para listar reservas automáticas
create view reservas_automaticas as
SELECT r.*, ra.sala_codigo, ra."data", u.matricula, u.nome,s.nome as "nome_sala",
s.codigo as "codigo_sala", s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel
from reserva r
left join reserva_automatica ra 
on r.codigo = ra.codigo
join usuario u
on ra.usuario_matricula  = u.matricula
join sala s 
on ra.sala_codigo = s.codigo;


-- queries para listar reservas recorrentes
create view reservas_recorrentes as
SELECT r.codigo, r.descricao, r.aberta, r.dia_semana_1, r.dia_semana_2, r.dia_semana_3,
rr.data_inicio, rr.data_fim, d.matricula, d.siape, d2.matricula_diretor, s.nome as "nome_sala",
s.codigo as "codigo_sala", s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel, u.nome as nome_docente,
u.email as email_docente, u2.nome as nome_diretor, u2.email as email_diretor
from reserva r
join reserva_recorrente rr 
on r.codigo = rr.codigo
join sala s
on s.codigo = rr.codigo_sala
join docente d 
on d.matricula = rr.docente_matricula
join usuario u 
on u.matricula = d.matricula
join diretor d2 
on d2.matricula_diretor = rr.matricula_diretor
join usuario u2
on d2.matricula_diretor = u2.matricula;


-- queries para listar reservas sob autorização
create view reservas_sob_autorizacao as
SELECT r.codigo, r.descricao, r.aberta, r.dia_semana_1, r.dia_semana_2, r.dia_semana_3 ,
rsa.justificativa, rsa.em_analise, rsa.aceito, rsa."data", u.*, s.nome as "nome_sala",
s.codigo as "codigo_sala", s.tipo, s.localizacao, s.lotacao, s.recursos, s.disponivel,
a.codigo as "codigo_adm", a.nome as "nome_adm", tr.descricao as "tipo_reserva"
from reserva r
join reserva_sob_autorizacao rsa
on r.codigo = rsa.codigo
join usuario u 
on rsa.usuario_matricula = u.matricula
join sala s
on s.codigo = rsa.sala_codigo
join administrador a
on rsa.administrador_matricula = a.codigo
join tipo_reserva tr 
on r.tipo_reserva_codigo = tr.codigo;


