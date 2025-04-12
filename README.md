# Gerenciador RPG

## 📖 Descrição do Projeto

O **Gerenciador RPG** é um sistema desenvolvido para gerenciar personagens e itens mágicos em um jogo de RPG (Role-Playing Game). Ele permite a criação, atualização, listagem e exclusão de personagens e itens mágicos, além de gerenciar a relação entre eles. Cada personagem pode possuir vários itens mágicos, e cada item mágico está vinculado a um personagem.

## 🎮 Problemática Resolvida

O sistema foi projetado para atender às seguintes necessidades:

- **Gerenciamento de Personagens:**
  - Criação de personagens com atributos personalizados (Força e Defesa) respeitando um limite de 10 pontos.
  - Exibição dos atributos de Força e Defesa considerando os bônus dos itens mágicos associados ao personagem.
  - Restrição de classes permitidas: Guerreiro, Mago, Arqueiro, Ladino e Bardo.
  - Garantia de que cada personagem pode possuir apenas um item mágico do tipo Amuleto.
- **Gerenciamento de Itens Mágicos:**
  - Criação de itens mágicos com validações específicas para cada tipo (Arma, Armadura e Amuleto).
  - Garantia de que itens mágicos tenham atributos válidos (Força e Defesa entre 1 e 10).
  - Restrição de itens mágicos com Força e Defesa iguais a zero.

## 🧝‍♂️ Entidades e Atributos

### Personagem

**Definições:**

- Cada personagem possui **10 pontos** para distribuir entre **Força** e **Defesa** no momento da criação.
- Os atributos de Força e Defesa exibidos incluem os bônus dos itens mágicos associados ao personagem.
- Apenas as seguintes classes são permitidas: Guerreiro, Mago, Arqueiro, Ladino, Bardo.
- Um personagem pode possuir **apenas 1 Amuleto**.

**Atributos do Personagem:**

- **Identificador:** ID único do personagem.
- **Nome:** Nome do personagem.
- **Nome Aventureiro:** Nome alternativo do personagem.
- **Classe:** Classe do personagem (Guerreiro, Mago, Arqueiro, Ladino ou Bardo).
- **Level:** Nível do personagem.
- **Lista de Itens Mágicos:** Itens mágicos associados ao personagem.
- **Força:** Atributo de força do personagem (incluindo bônus dos itens mágicos).
- **Defesa:** Atributo de defesa do personagem (incluindo bônus dos itens mágicos).

### Item Mágico

**Definições:**

- Apenas os seguintes tipos de itens mágicos são permitidos: Arma, Armadura, Amuleto.
- Os atributos Força e Defesa devem estar entre 1 e 10.
- Não podem existir itens mágicos com Força e Defesa iguais a 0.

**Atributos do Item Mágico:**

- **Identificador:** ID único do item mágico.
- **Nome:** Nome do item mágico.
- **Tipo do Item:** Tipo do item (Arma, Armadura ou Amuleto).
- **Força:** Atributo de força do item mágico.
- **Defesa:** Atributo de defesa do item mágico.

## ⚙️ Funcionalidades

### Personagem

- **Cadastrar Personagem:** Criação de um novo personagem com validações de atributos e classe.
- **Listar Personagens:** Exibição de todos os personagens cadastrados.
- **Buscar Personagem por Identificador:** Retorna os detalhes de um personagem específico.
- **Atualizar Nome Aventureiro por Identificador:** Permite alterar o nome aventureiro de um personagem.
- **Remover Personagem:** Exclui um personagem e seus itens mágicos associados.
- **Buscar Amuleto do Personagem:** Retorna o amuleto associado a um personagem.
- **Listar Itens Mágicos por Personagem:** Exibe todos os itens mágicos de um personagem.

### Item Mágico

- **Cadastrar Item Mágico:** Criação de um novo item mágico com validações específicas para cada tipo.
- **Listar Itens Mágicos:** Exibição de todos os itens mágicos cadastrados.
- **Buscar Item Mágico por Identificador:** Retorna os detalhes de um item mágico específico.
- **Adicionar Item Mágico ao Personagem:** Associa um item mágico a um personagem.
- **Remover Item Mágico do Personagem:** Remove a associação de um item mágico com um personagem.

## 🛠️ Tecnologias Utilizadas

- **NestJS:** Framework para construção de APIs robustas.
- **Prisma:** ORM para gerenciamento do banco de dados.
- **PostgreSQL:** Banco de dados relacional.
- **Jest:** Framework de testes unitários.
- **Docker:** Contêiner para o banco de dados PostgreSQL.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker (opcional, para o banco de dados)
- PostgreSQL (caso não utilize Docker)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/renanjava/gerenciador-rpg
   cd gerenciador-rpg
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados:
   Renomeie o arquivo `.env.example` para `.env` e configure a variável `DATABASE_URL`.
4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   npm run start
   ```

## 📋 Testando a API com Postman

Importando as Rotas:

1. Coleção das rotas: [https://.postman.co/workspace/My-Workspace~3074cebe-086b-4728-8310-3a6e0b4bb079/collection/30576907-048d049a-cf18-4760-8296-b95480e00d20?action=share&creator=30576907](URL)
2. Importar a coleção do Postman

**Rotas Disponíveis:**

- **Personagem:**
  - POST /personagem: Cadastrar um novo personagem.
  - GET /personagem: Listar todos os personagens.
  - GET /personagem/:id: Buscar um personagem por ID.
  - PATCH /personagem/:id: Atualizar o nome aventureiro de um personagem.
  - DELETE /personagem/:id: Remover um personagem.
  - GET /personagem/:id/amuleto: Buscar o amuleto de um personagem.
  - GET /personagem/:id/itens-magicos: Listar os itens mágicos de um personagem.
- **Item Mágico:**
  - POST /item-magico: Cadastrar um novo item mágico.
  - GET /item-magico: Listar todos os itens mágicos.
  - GET /item-magico/:id: Buscar um item mágico por ID.
  - PATCH /item-magico/:id: Atualizar os atributos de um item mágico.
  - DELETE /item-magico/:id: Remover um item mágico.

## 🧪 Testes

Para executar os testes unitários:

```bash
npm run test
```
