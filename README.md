# Projetos dos cursos feitos na alura
<br>

---

## Rest com NodeJs

Neste projeto será construído uma aplicação com api em **REST** usando **NodeJs**

[curso-projeto](https://cursos.alura.com.br/formacao-node-js-12)

### Pré-requisitos

[mysqli](https://dev.mysql.com/downloads/)

[nodejs](https://nodejs.org/en/download/)

[yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
* utilizacao do yarn workspaces pois este é monorepo que irá contem os projetos feitos na plataforma alura

---

## Primeiros Passos

##### 1. instalar o gerenciador de pacotes Yarn:
   
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
### Primeiro Projeto
<br>

##### 1. Entrar na pasta servicoes instalar dependências com 'yarn' e iniciar a api clientes do projeto:

```
    cd package/1-rest-nodejs/servicos/
    yarn
    node cliente.js
```

##### 2. Modificar o arquivo connection.js dentro de database e mudar as variaveis do banco de dados local:
   
```
    cd database/

    host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'agenda-petshop',
```

##### 3. Na pasta raiz deste projeto basta rodar o comando abaixo:

```
    yarn start
```

##### 4. 🔥 Acessar as urls e utilizar a aplicação 🔥