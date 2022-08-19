# challenge-inicie

### Deve ser realizado o clone do projeto

- Após o clone, abra o terminal e execute o comando <b>yarn install</b> ou <b>npm install</b>

- Esta sendo utilizado variáveis de ambiente no projeto, então é necessário que após instalar as dependências no passo acima,
 você procure pelo arquivo <b>.env.sample</b> na pasta raiz do sistema, copie, cole e renomeie o arquivo para <b>.env</b>
 
- Dentro do arquivo <b>.env</b> você pode editar a porta em que o servidor ira rodar e também será necessário colocar o token que a api fornece para autenticação.

#### Url para o site que fornece as informações para realizações de testes e também para gerar o token de autenticação
    https://gorest.co.in/ - Site
    
    https://gorest.co.in/consumer/login - Gerar token
    

## Rotas
- exemplo de baseUrl: http://localhost:3001

### User Routes 

```
http://localhost:3001/user

- Criar usuários
  /createuser - POST
    
- Buscar usuários
  /finduserall - GET
    
- Buscar usuário por id
  /finduserbyid/:id - GET
```

### Posts Routes 
```
http://localhost:3001/post

- Criar postagens
  /createpost - POST
  
- Buscar postagens por id do usuário
  /findpostbyuserid/:id - GET
  
- Buscar postagens mais recentes
  /searchforthelatest - GET
```

### Comments Routes 
```
http://localhost:3001/comments

- Criar comentários
  /createcomment - POST
  
- Criar comentário no primeiro post da lista publica
  /createcommentinfistpostpublic - POST
  
- Buscar comentários por id da postagem
  /findcommentsbypublicpostid/:id - GET
  
- Deletar um comentário
  /deletecomment/:id - DELETE
```

## Realização de testes na aplicação
- Esta sendo utilizado o JEST como ferramenta para relização de testes

- Comando para rodar os testes na aplicação inteira

```
npm test
ou
yarn test
```

- Caso queira rodar o teste somente de um arquivo, deve ser executado o comando utilizado como exemplo abaixo
```
npm test NOME_DO_ARQUIVO.test.ts
ou
yarn test NOME_DO_ARQUIVO.test.ts
```

## A documentação do projeto esta na pasta raiz do sistema, documentation.txt


