# Buscador com Autocomplete
Este projeto é um buscador com funcionalidade de autocomplete desenvolvido em PHP, JavaScript e MySQL. Ele permite aos usuários pesquisar informações de livros a partir de um banco de dados, fornecendo sugestões instantâneas à medida que digitam na barra de pesquisa.

## Funcionalidades
**Autocomplete Dinâmico:** À medida que os usuários digitam na barra de pesquisa, o sistema sugere automaticamente resultados com base nas entradas correspondentes no banco de dados.

**Exibição de Detalhes:** Ao selecionar um resultado da lista de sugestões e clicar em pesquisar, os detalhes do livro, incluindo nome, imagem, gênero e autor, são exibidos em uma área de informações.

**Banco de Dados MySQL:** O projeto utiliza um banco de dados MySQL com uma tabela que possui as seguintes colunas: id, name, image, gender e author. A estrutura da tabela é a seguinte:
```
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    genre VARCHAR(50),
    author VARCHAR(100)
);
```
**PDO para Conexão com o Banco de Dados:** O sistema utiliza o PHP Data Objects (PDO) para estabelecer uma conexão segura e eficiente com o banco de dados MySQL.

**Ajax para Requisições Assíncronas:** As solicitações de pesquisa e autocomplete são realizadas de forma assíncrona usando Ajax, tornando a experiência do usuário rápida e suave.

## Tecnologias Utilizadas
**PHP:** Linguagem de programação principal para o desenvolvimento do servidor web e a interação com o banco de dados.

**MySQL:** Banco de dados relacional utilizado para armazenar informações de livros.

**PDO (PHP Data Objects):** Interface de acesso a banco de dados utilizada para realizar a conexão segura com o banco de dados MySQL.

**JavaScript:** Usado para manipular a interface do usuário e fazer solicitações Ajax.

**HTML/CSS:** Linguagens de marcação e estilo utilizadas para criar a interface do sistema.
