**README - Sistema de Gerenciamento de Reservas para Espaços Universitários**

## Objetivo e Visão Geral

### Objetivo do Projeto
Desenvolver um sistema de gerenciamento de reservas para espaços coletivos de uso acadêmico, visando a alocação eficiente, segura e transparente de ambientes como salas de aula, laboratórios, auditórios e demais espaços na universidade.

### Visão Geral
O sistema busca facilitar o processo de reserva, garantir transparência nas alocações e melhorar a experiência de docentes, discentes e funcionários administrativos na utilização dos espaços universitários. Ele oferece funcionalidades como cadastro detalhado de usuários e espaços, gerenciamento flexível de reservas, notificações, mural digital, consulta de agenda, histórico de ocupação, log de auditoria e uma interface adaptável para dispositivos móveis e desktop.

## Minimundo

A universidade necessita de um sistema que permita o cadastro de usuários e espaços, facilitando o processo de reserva de acordo com características e regras específicas. O sistema contempla:

- Cadastro detalhado de usuários, diferenciados por categoria (docente, discente, administrativo).
- Gerenciamento de espaços, incluindo características como capacidade, recursos e tipo.
- Processo de reserva flexível, atendendo a reservas imediatas, com autorização e recorrentes.
- Notificações sobre o status de reservas, alterações ou cancelamentos.
- Mural digital para eventos públicos.
- Consulta de agenda por diferentes filtros e geração de relatórios em PDF.
- Histórico de ocupação dos espaços e atividades dos usuários.
- Log de auditoria para rastreamento de ações no sistema.
- Interface responsiva para dispositivos móveis e desktop.
- Uso de soluções open source para a infraestrutura.

### Funcionalidades Importantes

1. **Cadastro de Usuários:**
   - Inserção de informações de docentes, discentes e funcionários administrativos.
   - Diferenciação por categoria.
   - Manutenção de dados como e-mail, matrícula e contato.

2. **Cadastro de Espaços:**
   - Adição, edição ou remoção de detalhes como capacidade, recursos, tipo e localização.
   - Bloqueio temporário com motivo e previsão de retorno.
   - Reservável com informações sobre a reserva.

3. **Reservas:**
   - Reservas imediatas, com autorização e recorrentes.
   - Notificações sobre o status.
   - Mural digital para eventos públicos.

4. **Consulta de Agenda:**
   - Visualização por diferentes filtros.
   - Relatórios em PDF.

5. **Histórico e Auditoria:**
   - Preservação de dados para consultas futuras.
   - Log de auditoria para rastreamento de ações.

## Instalação e Configuração

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sistema-gerenciamento-reservas.git
   cd sistema-gerenciamento-reservas
   ```

2. **Configuração do Backend:**
   - Navegue até a pasta do backend.
   - Execute `npm install` para instalar as dependências.
   - Configure o acesso ao banco de dados e outras variáveis no arquivo `.env`.
   - Execute `npm start` para iniciar o servidor.

3. **Configuração do Frontend:**
   - Navegue até a pasta do frontend.
   - Execute `flutter pub get` para instalar as dependências.
   - Configure a URL do backend no arquivo `lib/config.dart`.
   - Execute `flutter run` para iniciar o aplicativo.

4. **Acesse o Sistema:**
   - Abra o navegador e acesse `http://localhost:3000` para acessar o sistema.

## Contribuição

Contribuições são bem-vindas! Abra uma issue para discutir novas funcionalidades, relatar problemas ou sugerir melhorias. Pull requests também são encorajados.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

**Equipe de Desenvolvimento -


Pessoas que contribuíram no projeto Alocaçao de Espaços Brasil:

| ![Foto do Participante 1](https://avatars.githubusercontent.com/u/88738275?v=4) |![Foto do Participante 2](https://avatars.githubusercontent.com/u/39502131) |
|:--------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|
|                                       [Vitor Indio](https://github.com/vitorindio)                                        |[Mateus Evangelista](https://github.com/matEvangelista)|
