# RoomBookingAPI :office:

## Descrição:
  <summary><strong>O que foi desenvolvido:</strong></summary>


1. Neste projeto foi desenvolvida uma API Restful e um banco de dados para reservas em um serviço de hotelaria;

2. As tecnologias utilizadas foram: `Node.js` usando o pacote `Sequelize` para a criação de um banco de dados em `MySQL`, além da utilização da ferramenta `JWT` para autorização de acesso em algumas rotas;

3. Foram desenvolvidos endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

##  Como executar o projeto:

  > :pushpin: Instale as dependências [**Caso existam**] com `npm install`
  
  - Lembre-se de usar o prefixo `env $(cat .env)` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo `.env`. Por exemplo:
  
    ```bash
    env $(cat .env) npm run dev
    ```
  
  - :pushpin: Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>

  

  ## Instruções de utilização do projeto:
  - ⚠️ TODAS AS ROTAS ABAIXO DA ROTA (`POST /user/register`) NECESSITAM DE UM TOKEN GERADO PELA ROTA (`POST /login`) PARA FUNCIONAR

## FUNCIONALIDADES DOS ENDPOINTS

| Rota                    | Link              | Funcionalidade                                               |
|-------------------------|-------------------|---------------------------------------------------------------|
| **CADASTRO DE USUÁRIOS**|                   |                                                               |
| POST                    | /users/register   | Registra um novo usuário no hotel                            |
| POST                    | /login            | Faz o login do usuário                                       |
| **USUÁRIOS**            |                   |                                                               |
| GET                     | /users            | Mostra todos os clientes cadastrados no hotel                |
| GET                     | /users/:id        | Encontra um usuário do hotel através de seu id               |
| PUT                     | /users/:id        | Atualiza dados de um usuário do hotel                        |
| DELETE                  | /users/:id        | Deleta o cadastro de um usuário do hotel                     |
| **QUARTOS**             |                   |                                                               |
| GET                     | /rooms            | Mostra todos os quartos do hotel                             |
| GET                     | /rooms/:id        | Encontra um quarto do hotel pelo seu id                      |
| POST                    | /rooms            | Adiciona um quarto ao hotel                                  |
| PUT                     | /rooms/:id        | Altera os dados de um quarto                                 |
| DELETE                  | /rooms/:id        | Deleta um quarto do hotel                                    |
| **RESERVAS**            |                   |                                                               |
| GET                     | /reservations     | Mostra todas as reservas realizadas                          |
| GET                     | /reservations/:id | Mostra as reservas realizadas pelo(s) usuário(s) a um quarto |
| POST                    | /reservations     | Realiza uma nova reserva a um quarto                         |
| PUT                     | /reservations/:id | Altera uma reserva realizada por um usuário                  |
| DELETE                  | /reservations/:id | Deleta uma reserva realizada em um quarto pelo usuário       |


  ### Utilização:
  :pushpin: Utilize algum aplicativo ou extensão do VSCode para realizar as requisições. 
  </br>
  > Exemplo: ThunderClient, Insomnia, entre outros.
  ## Gerando seu token:
 ### Ao fazer uma requisição para a rota POST /login, com email e password, será gerado um token para você. Exemplo:


  ```json
  {
    "email": "henriqueAvner@gmail.com",
    "password": "senhaPadraoParaToken"
  }
  ```
 - Ao realizar um login correto (como o exemplo), na rota, um token será gerado:
   
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```
    > :warning: O token acima é fictício, você deve utilizar seu próprio token gerado

<br />

  ## Utilizando o token:
  Resgatando seu token, antes de fazer a requisição para qualquer rota, você deve utilizá-lo no header de sua requisição. Utilizaremos o Insomnia como exemlo:

  1- Adicionando o token - Crie sua rota:
  
  <br />
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/a19b892c-a99c-472a-85f1-b5b64f54393c)

  <br />
  
  2 - Mude para a aba Headers, e no primeiro espaço escreva **Authorization**:
  
  <br />
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/cb77168a-0e6d-40b0-8990-3b41fae7a227)
  
  <br />
  
  3 - No espaço a frente de Authorization, cole o **token** criado em seu login, porém antes, escreva o parâmetro **Bearer**:
  
  </br>
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/6997babf-c3ec-4c2d-96d9-950596dd3b6e)
  
  <br />
  
  ## :white_check_mark:Assim, você estará permitido a realizar as requisições para todos os endpoints!:white_check_mark:

