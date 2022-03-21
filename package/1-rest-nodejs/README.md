## Rest com NodeJs

Neste projeto foi construído uma aplicação API em *REST* usando *NodeJs*

[NodeJS-streaming-repositorio](https://cursos.alura.com.br/course/nodejs-streaming-dados)

<br>

##### 1. Entrar na pasta servicos e instalar dependências 

```
    cd package/1-rest-nodejs/servicos/
    yarn
```

##### 2. Criar o arquivo default.js dentro de config/ e mudar as variaveis do banco de dados local:
   
```json
  {
   "mysql":{
        "host": "host",
        "port": "port",
        "username": "username",
        "password": "password",
        "database": "database"
   }
}
```
##### 3. Na pasta raiz deste projeto basta rodar os comandos abaixo na ordem iniciar a api de clientes e rodar o projeto:

```
    yarn service  
    yarn start 
```

##### 4. 🔥 Acessar as urls e utilizar a aplicação 🔥