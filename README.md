# Projetos dos cursos feitos na alura
---
### Pré-requisitos

[mysqli](https://dev.mysql.com/downloads/)
[nodejs](https://nodejs.org/en/download/)
[yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

* utilizacao do yarn workspaces pois este é monorepo que irá contem os projetos feitos na plataforma alura
---
### Primeiros Passos

##### 1. instalar o gerenciador de pacotes Yarn, pois usa o workspaces para esse monorepo:
   
```
   npm install --global yarn
```

##### 2. Clonar o repositorio:

```
   git clone https://github.com/lucassrlkz/Alura-monorepo
```

##### 3. Entrar na pasta do projeto e digitar o comando **yarn** para instalar as dependências do projeto:

```
    cd Alura-monorepo/
    yarn
```
---

<<<<<<< HEAD
##### 1. Entrar na pasta servicos instalar dependências com 'yarn' e iniciar a api clientes do projeto:

```
    cd package/1-rest-nodejs/servicos/
    yarn

    node cliente.js
```

##### 2. Modificar o arquivo default.json dentro da pasta config e mudar o valor das variaveis do banco de dados local:
   
```
    cd config/

    host: 'seu valor',
	port: 000,
	user: 'root',
	password: '',
	database: 'agenda-petshop',
```

##### 3. Na pasta raiz deste projeto basta rodar o comando abaixo:

```
    cd package/1-rest-nodejs
    yarn start
```

##### 4. 🔥 Acessar as urls e utilizar a aplicação 🔥
=======
### SUMÁRIO

**1.** [Rest-NodeJs](/package/1-rest-nodejs/README.md)

**2.** [Api-escalavel](/package/2-api-escalavel/README.md)

**3.** [Node-JWT](/package/3-node-jwt/README.md) 

**4.** [Typescript]()
>>>>>>> dev
