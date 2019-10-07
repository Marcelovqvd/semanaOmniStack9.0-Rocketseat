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

Mongo DB - Não relacional, performático. Oferece serviço gratuito de hospedagem de dados.

Acessar MongoDB Atlas

- Cluster
- Build a Cluster - p criar um servidor
- Create Cluster
- Database Access - acessar o servidor pelo Node
- Criar usuário (obs. User e senha = omnistack)
- Network Access - Allow access from anywhere
- Em Clusters - Connect your application; Driver - NodeJS; Copiar URL.

#### Mongoose

    $ yarn add mongoose

Biblioteca p trabalhar com dados no MongoDB.

Configurar URL.

Se der erro para executar o servidor, deve-se trocar a versão do Clusters.

37` do vídeo - possíveis erros e suas soluções.

#### Padrão MVC

39` Aqui, o View vai ser com o React. Aqui só teremos Model e Controllers.

- Model - representa uma tabela no banco de dados, um Schema

  src/models/Users.js

- Controller - Recebe a requisição, faz as regras de negócios e devolve resposta. onde vão estar as regras de negócios da aplicação (somente enquanto a aplicação não for muito grande)

src/controllers/SessionControllers.js

Dentro do controller vão estar os métodos para cada rota do padrão MVC.

Métodos:

- index - lista as sessões;
- show - lista uma só sessão;
- store - cria sessão;
- update - alterar sessão;
- destroy - deletar sessão.

Criar a base_url no Environment do Insomnia

## Criação e listagem dos spots

Quando o usuário logar, vai poder cadastrar um novo spot que vai ter: imagem, empresa, tecnologis e valor da diária do spot.

Criar model 'Spot.js' e spotController

56`passando imagem do spot:
O formato json não suporta imagem.
Então, no insomnia deve-se usar Multport Form.

instalar lib para formato Multport (upload de imagens, arquivos, etc)

    $ yarn add multer

src/config/upload.js

criar pasta uploads na raiz

Importar multer e uploadConfig em routes.js

#### finalizado com erros...
