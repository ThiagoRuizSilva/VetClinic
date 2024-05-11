# Projeto VetClinica 🐶🐱

VetClinica é um CRUD API desenvolvida para facilitar o cadastro de tutores e seus pets. A API visa oferecer uma solução eficiente para gerenciar informações sobre tutores e seus pets, incluindo algumas verificações e validações específicas para garantir a integridade dos dados.

## Objetivos da API

- **Cadastro de Tutores**: Permitir o registro de novos tutores na plataforma.
- **Cadastro de Pets**: Facilitar o registro de pets associados a cada tutor.
- **Verificações e Validações**: Implementar verificações para garantir a integridade dos dados inseridos, como validação de campos obrigatórios e formatos de dados.

## Tecnologias Utilizadas 🛠

- **Backend**: Node.js (versão 14.17.0) com Express (versão 4.19.2)
- **Banco de Dados**: SQLite (versão 5.1.1)
- **ORM**: Sequelize (versão 6.37.3)
- **Middleware**: Body-Parser (versão 1.20.2), Cors (versão 2.8.5)
- **Ferramenta de Desenvolvimento**: Nodemon (versão 3.1.0)

### Documentação com Swagger

A documentação completa da API VetClinica está disponível através do Swagger. Esta ferramenta oferece uma interface intuitiva para testar os endpoints da API, além de fornecer um arquivo .json com as configurações de todos os endpoints.

Para acessar a documentação localmente, basta rodar o projeto e abrir o seguinte link em seu navegador:
```bash
http://localhost:3333/doc
```

Isso permitirá que você explore todos os endpoints, parâmetros e exemplos de requisições diretamente em seu ambiente de desenvolvimento.

### Acessando a Documentação

Na documentação, você encontrará:

- **Descrições detalhadas de cada endpoint**: Incluindo os métodos HTTP permitidos, parâmetros esperados, e exemplos de requisições.
- **Respostas esperadas**: Informações sobre os códigos de status HTTP e os formatos de resposta.
- **Exemplos interativos**: A capacidade de testar requisições diretamente na documentação, o que facilita a experimentação e o desenvolvimento.


## Configuração Local para usar a API

Para configurar o projeto localmente, siga estes passos:

 Clone o repositório:

```bash
 git clone https://github.com/ThiagoRuizSilva/VetClinic.git
```

## Navegue até o diretório do projeto:

```bash
  cd .\VetClinic\
```

## Instale as dependências:

```bash
  npm install
```

### Configuração

 Configure as variáveis de ambiente necessárias no arquivo `.env`.
## Executar a aplicação

Para executar a aplicação, rode o seguinte comando no terminal:

```bash
  npm run dev
```
