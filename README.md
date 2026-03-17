# Academic Management API

> API RESTful para gerenciamento acadêmico de **alunos** e **professores**, desenvolvida com NestJS, arquitetura DDD e banco de dados PostgreSQL via Drizzle ORM.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Endpoints da API](#endpoints-da-api)
- [Banco de Dados](#banco-de-dados)
- [Contribuintes](#contribuintes)

---

## Sobre o Projeto

Sistema de gerenciamento acadêmico que expõe uma API REST para operações de CRUD sobre entidades de **Alunos** e **Professores**. O projeto segue os princípios de **Domain-Driven Design (DDD)**, separando claramente as camadas de domínio, aplicação e infraestrutura.

---

## Arquitetura

O projeto segue a estrutura de **DDD (Domain-Driven Design)** organizada por módulos:

```
src/
├── modules/
│   └── academic/
│       ├── students/
│       │   ├── application/       # DTOs e Services (casos de uso)
│       │   ├── domain/            # Entidades e interfaces de repositório
│       │   └── infra/             # Controllers, schemas e repositórios Drizzle
│       └── teacher/
│           ├── application/
│           ├── domain/
│           └── infra/
└── shared/
    └── infra/
        └── database/              # Módulo Drizzle + migrações PostgreSQL
```

---

## Tecnologias

- [NestJS](https://nestjs.com/) — Framework Node.js para construção da API
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática
- [Drizzle ORM](https://orm.drizzle.team/) — ORM type-safe para PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [node-postgres (pg)](https://node-postgres.com/) — Driver de conexão com o banco

---

## Pre-requisitos

- Node.js `>= 18`
- PostgreSQL em execução
- npm ou yarn

---

## Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/academic-management-api.git
cd academic-management-api

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (veja a seção abaixo)
cp .env.example .env

# 4. Execute as migrações do banco de dados
npm run drizzle:migrate

# 5. Inicie a aplicação
npm run start:dev
```

---

## Variaveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/academic_db
```

---

## Endpoints da API

### Alunos — `/students`

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| GET    | `/students`     | Lista todos os alunos         |
| GET    | `/students/:id` | Busca um aluno por ID         |
| POST   | `/students`     | Cadastra um novo aluno        |
| PUT    | `/students/:id` | Atualiza os dados de um aluno |
| DELETE | `/students/:id` | Remove um aluno               |

**Corpo da requisição (POST / PUT):**

```json
{
  "name": "João da Silva",
  "email": "joao@email.com",
  "document": "123.456.789-00",
  "registration": "2024001"
}
```

---

### Professores — `/teachers`

| Método | Rota            | Descrição                         |
| ------ | --------------- | --------------------------------- |
| GET    | `/teachers`     | Lista todos os professores        |
| GET    | `/teachers/:id` | Busca um professor por ID         |
| POST   | `/teachers`     | Cadastra um novo professor        |
| PUT    | `/teachers/:id` | Atualiza os dados de um professor |
| DELETE | `/teachers/:id` | Remove um professor               |

**Corpo da requisição (POST / PUT):**

```json
{
  "name": "Maria Oliveira",
  "email": "maria@email.com",
  "department": "Ciência da Computação",
  "birthDate": "1985-04-20T00:00:00.000Z",
  "nationality": "Brasileira",
  "phone": "(44) 99999-9999",
  "maritalStatus": "Casada"
}
```

---

## Banco de Dados

O projeto utiliza **Drizzle ORM** com migrações versionadas em `src/shared/infra/database/drizzle/`.

### Tabela `students`

| Coluna       | Tipo                     | Restrições                  |
| ------------ | ------------------------ | --------------------------- |
| id           | uuid (PK)                | default `gen_random_uuid()` |
| name         | text                     | NOT NULL                    |
| email        | text                     | NOT NULL, UNIQUE            |
| document     | varchar(20)              | NOT NULL, UNIQUE            |
| registration | varchar(20)              | NOT NULL, UNIQUE            |
| created_at   | timestamp with time zone | NOT NULL                    |
| updated_at   | timestamp with time zone | NOT NULL                    |

### Tabela `teachers`

| Coluna         | Tipo                     | Restrições                  |
| -------------- | ------------------------ | --------------------------- |
| id             | uuid (PK)                | default `gen_random_uuid()` |
| name           | text                     | NOT NULL                    |
| email          | text                     | NOT NULL, UNIQUE            |
| department     | text                     | NOT NULL                    |
| birth_date     | timestamp with time zone | NOT NULL                    |
| nationality    | varchar(100)             | NOT NULL                    |
| phone          | varchar(20)              | NOT NULL                    |
| marital_status | varchar(20)              | NOT NULL                    |
| created_at     | timestamp with time zone | NOT NULL                    |
| updated_at     | timestamp with time zone | NOT NULL                    |

---

## Contribuintes — Grupo 03

<table>
  <tr>
    <td align="center">Carolina Michelon Gorriti</td>
    <td align="center">Matheus Emanuel Giombelli</td>
    <td align="center">Marcos Vinicius Tavares</td>
    <td align="center">Matheus Felipe Queiroz Pinto</td>
    <td align="center">Vitor Bernhard Calliari</td>
  </tr>
</table>

---

<p align="center">Desenvolvido pelo Grupo 03</p>
