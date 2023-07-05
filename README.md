# API para cadastro de empresas

Este projeto é uma API desenvolvida para o processo seletivo da vaga de Full Stack na empresa Elite Consultores. A API permite o cadastro de empresas por meio de um CRUD (Create, Read, Update, Delete) utilizando as seguintes tecnologias: NestJS, Prisma e PostgreSQL.

## Como utilizar

Para utilizar a API, siga as instruções abaixo:

#### 1. Clone o repositório:

`git clone https://github.com/atilamariano/eliteConsultores-backEnd`

#### 2. Instale as dependências:

`npm install`

#### 3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

`DATABASE_URL=postgresql://username:password@localhost:5432/database_name`

Certifique-se de substituir `username`, `password` e `database_name` pelos valores corretos para a sua configuração do PostgreSQL.

#### 4. Rode as migrações do banco de dados:

`npx prisma migrate dev`

#### 5. Inicie o servidor:

`npm run start:dev`

Pronto! A API está funcionando e pronta para ser utilizada.

## Endpoints

A API possui os seguintes endpoints:

### POST /company

Cadastra uma nova empresa.

#### Parâmetros

Os seguintes parâmetros devem ser enviados no corpo da requisição:

| Nome                | Tipo   | Descrição                     |
|---------------------|--------|-------------------------------|
| code                | string | Código da empresa             |
| cnpj                | string | CNPJ da empresa               |
| corporateName       | string | Razão social da empresa       |
| fantasyName         | string | Nome fantasia da empresa      |
| contactPerson       | string | Nome da pessoa de contato     |
| contactPhone        | string | Telefone da pessoa de contato |
| contactEmail        | string | Email da pessoa de contato    |
| municipalRegistration | string | Registro municipal da empresa |

#### Resposta

A resposta será um objeto JSON contendo os dados da empresa cadastrada.

### GET /company

Retorna a lista de todas as empresas cadastradas.

#### Resposta

A resposta será um array de objetos JSON, onde cada objeto representa uma empresa cadastrada.

### GET /company/:id

Retorna os dados de uma empresa específica.

#### Parâmetros

| Nome | Tipo | Descrição        |
|------|------|------------------|
| id   | int  | ID da empresa desejada |

#### Resposta

A resposta será um objeto JSON contendo os dados da empresa.

### PUT /company/:id

Atualiza os dados de uma empresa específica.

#### Parâmetros

| Nome                | Tipo   | Descrição                     |
|---------------------|--------|-------------------------------|
| code                | string | Código da empresa             |
| cnpj                | string | CNPJ da empresa               |
| corporateName       | string | Razão social da empresa       |
| fantasyName         | string | Nome fantasia da empresa      |
| contactPerson       | string | Nome da pessoa de contato     |
| contactPhone        | string | Telefone da pessoa de contato |
| contactEmail        | string | Email da pessoa de contato    |
| municipalRegistration | string | Registro municipal da empresa |

#### Resposta

A resposta será um objeto JSON contendo os dadosAtualizados da empresa.

### DELETE /company/:id

Deleta uma empresa específica.

#### Parâmetros

| Nome | Tipo | Descrição        |
|------|------|------------------|
| id   | int  | ID da empresa a ser deletada |

#### Resposta

A resposta será um objeto JSON indicando que a empresa foi deletada com sucesso.

## Documentação com Swagger

A API possui documentação interativa fornecida pelo Swagger. Para acessar a documentação, siga os passos abaixo:

#### 1. Inicie o servidor da API:

`npm run star:dev`

#### 2. Abra o navegador e acesse o seguinte endereço:

`http://localhost:3333/docs`

A documentação do Swagger será exibida, fornecendo informações sobre os endpoints da API, seus parâmetros, respostas e exemplos de uso.

## Tecnologias utilizadas

- TypeScript
- NestJS
- Prisma
- MySql

## Observações

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Full Stack na empresa Elite Consultores. Ele implementa uma API para cadastro de empresas, utilizando as tecnologias mencionadas acima.

Este projeto é apenas uma implementação de exemplo e não possui recursos avançados, como autenticação de usuários ou validação de dados. Foi desenvolvido com o objetivo de demonstrar conhecimentos básicos em desenvolvimento backend com as tecnologias propostas.

Caso precise de mais informações, fique à vontade para entrar em contato, ficarei feliz em eslarecer qualquer duvida sobre o projeto.

**Autor:**   Átila Mariano.
**Contato:** atilamariano@hotmail.com

Obrigado por considerar este projeto!







