# RoomBookingApp
This reposity will be used to do an application for a room booking in a hotel!!
Projeto: Sistema de Reservas de Quartos de Hotel
Descrição:
Desenvolva um sistema para reservas de quartos em um hotel. Os usuários devem se cadastrar, autenticar, visualizar os quartos disponíveis, efetuar reservas e ver o histórico de suas reservas. Utilize o Sequelize para modelagem de dados e JWT para autenticação.

Modelagem de Dados (Sequelize):

User: Representa os usuários do sistema (hóspedes).
Campos: ID, Nome, E-mail, Senha (criptografada).<br>

Room: Representa os quartos disponíveis no hotel.
Campos: ID, Número do Quarto, Tipo de Quarto, Preço por Noite.<br>

Reservation: Representa as reservas feitas pelos usuários.
Campos: ID, ID do Usuário (Chave Estrangeira), ID do Quarto (Chave Estrangeira), Data de Check-in, Data de Check-out.<br>

Requisitos Funcionais:

Autenticação de Usuários:

Cadastro de usuários com informações básicas.
Geração de token JWT para autenticação.
Quartos Disponíveis:

Listagem dos quartos disponíveis no hotel.
Informações sobre o tipo de quarto e preço por noite.
Reservas:

Usuários podem efetuar reservas de quartos, fornecendo as datas de check-in e check-out.
Validar se o quarto escolhido está disponível para as datas desejadas.
Histórico de reservas para cada usuário.
Visualização de Reservas:

Os usuários devem poder visualizar suas reservas passadas e futuras.
Exemplos de Endpoints (Express):
Autenticação:

POST /api/auth/register: Cadastro de usuários.
POST /api/auth/login: Login de usuários (geração de token JWT).
Quartos:

GET /api/rooms: Listagem de quartos disponíveis.
Reservas:

POST /api/reservations: Efetuar uma reserva.
GET /api/reservations: Visualizar histórico de reservas.
Observações:

Implemente middleware para verificar a autenticação em endpoints que exigem login.
Use boas práticas para manipulação de datas, evitando reservas conflitantes.
Considere a implementação de um sistema de pagamento simulado, se quiser adicionar mais complexidade.
