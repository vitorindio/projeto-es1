-- Table: usuario
CREATE TABLE usuario (
                         matricula VARCHAR(250) NOT NULL PRIMARY KEY,
                         nome VARCHAR(250) NOT NULL,
                         email VARCHAR(250) NOT NULL,
                         telefone VARCHAR(11) NOT NULL
);

-- Table: docente
CREATE TABLE docente (
                         matricula_docente VARCHAR(250) NOT NULL,
                         siape VARCHAR(250) NOT NULL,
                         PRIMARY KEY (siape, matricula_docente),
                         FOREIGN KEY (matricula_docente) REFERENCES usuario (matricula)
);

-- Table: discente
CREATE TABLE discente (
                          matricula_discente VARCHAR(250) NOT NULL PRIMARY KEY,
                          FOREIGN KEY (matricula_discente) REFERENCES usuario (matricula)
);

-- Table: diretor
CREATE TABLE diretor (
                         matricula_diretor VARCHAR(250) NOT NULL PRIMARY KEY,
                         FOREIGN KEY (matricula_diretor) REFERENCES usuario (matricula)
);

-- Table: administrador
CREATE TABLE administrador (
                               id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                               nome VARCHAR(250) NOT NULL
);

/*-- TODO: retirar essa tabela, vai virar um ENUM
  Table: tipo_reserva
CREATE TABLE tipo_reserva (
                              id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                              descricao VARCHAR(250) NOT NULL
);*/

-- Table: sala
CREATE TABLE sala (
                      id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                      nome VARCHAR(250) NOT NULL,
                      tipo VARCHAR(250) NOT NULL,
                      localizacao VARCHAR(250) NOT NULL,
                      lotacao INTEGER NOT NULL,
                      recursos VARCHAR(250) NOT NULL,
                      disponivel INTEGER NOT NULL
);

-- Table: reserva
CREATE TABLE reserva (
                         id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                         descricao VARCHAR(250) NOT NULL,
                         aberta INTEGER NOT NULL,
                         dia_semana_1 VARCHAR(250) NOT NULL,
                         dia_semana_2 VARCHAR(250),
                         dia_semana_3 VARCHAR(250),
                         tipo_reserva VARCHAR(250) NOT NULL
);

-- Table: reserva_automatica
CREATE TABLE reserva_automatica (
                                    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    sala_id INTEGER NOT NULL,
                                    usuario_matricula VARCHAR(250) NOT NULL,
                                    data DATE,
                                    FOREIGN KEY (sala_id) REFERENCES sala (id),
                                    FOREIGN KEY (usuario_matricula) REFERENCES usuario (matricula),
                                    FOREIGN KEY (id) REFERENCES reserva (id)
);

-- Table: reserva_recorrente
CREATE TABLE reserva_recorrente (
                                    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    matricula_diretor VARCHAR(250) NOT NULL,
                                    sala_id INTEGER NOT NULL,
                                    data_inicio DATE NOT NULL,
                                    data_fim DATE NOT NULL,
                                    docente_siape VARCHAR(250) NOT NULL,
                                    docente_matricula VARCHAR(250) NOT NULL,
                                    FOREIGN KEY (matricula_diretor) REFERENCES diretor (matricula_diretor),
                                    FOREIGN KEY (sala_id) REFERENCES sala (id),
                                    FOREIGN KEY (docente_siape, docente_matricula) REFERENCES docente (siape, matricula_docente),
                                    FOREIGN KEY (id) REFERENCES reserva (id)
);

-- Table: reserva_sob_autorizacao
CREATE TABLE reserva_sob_autorizacao (
                                         id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                         sala_id INTEGER NOT NULL,
                                         usuario_matricula VARCHAR(250) NOT NULL,
                                         administrador_id INTEGER NOT NULL,
                                         justificativa VARCHAR(250),
                                         em_analise INTEGER,
                                         aceito INTEGER,
                                         data DATE,
                                         FOREIGN KEY (sala_id) REFERENCES sala (id),
                                         FOREIGN KEY (usuario_matricula) REFERENCES usuario (matricula),
                                         FOREIGN KEY (administrador_id) REFERENCES administrador (id),
                                         FOREIGN KEY (id) REFERENCES reserva (id)
);
