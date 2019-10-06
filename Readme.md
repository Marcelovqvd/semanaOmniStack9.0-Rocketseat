# Semana OmniStack 9.0 - Rocketseat

## Sobre API Rest

    $ yarn init -y

#### Express

Biblioteca Express

    $ yarn add express

É micro-framework do NodeJS.

### servidor

Inicializa o servidor

src/server.js

Para executar o servidor

    node src/server.js

#### JSON

É uma estrutura de dados. A API Rest é um serviço que disponibiliza dados para o front-end. A estrutura de dados é um formato no qual é possível enviar e receber dados em uma forma na qual back e front end consigam interpretar e manipular.
O JSON tem a forma de um objeto (propriedade e valor).

#### Nodemon

    $ yarn add nodemon -D

Criar script "dev" no package.json para o servidor ouvir as alterações no arquivo e executar automaticamente.

#### Insomina

Usar para testar as requisições à API.

#### Requisições à API

Query params: servem para filtrar informações ao enviar parâmetros para o Back-end. Ficam expostos na URL.

ex:

http://localhost:3333/users?idade=20

Aqui serão listados os usuários que têm idade maior que 20. Para enviar informações utilizando os query.params:

    app.get('/users', (req, res) => {
    return res.json({idade: req.query.idade});
    });

Para editar ou deletar um usuário é necessário utilizar o Route.param, que também vai na URL.

    app.put('/users/:id', (req, res) => {
    return res.json({id: req.params.id});
    });

Para criar ou editar:
Utilizar o JSON

    app.post('/users', (req, res) => {
    return res.json({req.body});
    });

Os dados vão estar dentro de 'req.body' (corpo da requisição).

É necessário informaro express sobre o uso do JSON

    app.use(express.json())

## Iniciando aplicação

#### Conexão com banco de dados
