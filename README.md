# Trabalho de Conclusão – Integração Contínua com GitHub Actions

## Objetivo

Este projeto foi desenvolvido como trabalho de conclusão da disciplina de Integração Contínua (CI).

O objetivo é demonstrar a implementação de pipelines automatizadas utilizando GitHub Actions para execução de testes unitários em aplicações Node.js, aplicando conceitos fundamentais de Integração Contínua, tais como automação, validação contínua de código e geração de evidências de execução.

---

## Tecnologias Utilizadas

* GitHub Actions
* Node.js
* Mocha
* Mochawesome

---

## Funcionalidades Implementadas

Foram implementadas três estratégias de execução de pipeline:

### 1. Execução Manual

Pipeline configurada para execução sob demanda através da interface do GitHub Actions.

**Objetivo:** permitir a validação manual do projeto sempre que necessário.

---

### 2. Execução por Push

Pipeline executada automaticamente após o envio de alterações para a branch principal do repositório.

**Objetivo:** garantir que todo código integrado ao projeto seja validado automaticamente.

---

### 3. Execução Agendada

Pipeline configurada utilizando expressões Cron para execução periódica.

**Objetivo:** realizar validações automáticas em intervalos definidos, independentemente de alterações no código.

---

## Processo Executado pelas Pipelines

Todas as pipelines realizam as seguintes etapas:

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências do projeto.
4. Execução dos testes unitários utilizando Mocha.
5. Geração de relatório utilizando Mochawesome.
6. Publicação dos relatórios como artefatos da execução.

---

## Execução Local

Instalação das dependências:

```bash
npm install
```

Execução dos testes:

```bash
npm test
```

---

## Relatórios de Teste

Os testes são executados utilizando o reporter Mochawesome.

Após cada execução é gerado um relatório contendo:

* Quantidade de testes executados;
* Testes aprovados;
* Testes reprovados;
* Tempo de execução;
* Evidências da execução.

Os relatórios são disponibilizados como artefatos nas execuções das GitHub Actions.

---

## Estrutura do Projeto

```text
.github/
└── workflows/
    ├── manual.yml
    ├── push.yml
    └── scheduled.yml

test/
package.json
README.md
```

---

## Resultados Obtidos

Com a implementação das pipelines foi possível automatizar a execução dos testes unitários em diferentes cenários de disparo, garantindo validação contínua do código e disponibilização automática de relatórios de execução.

---

## Conclusão

A atividade permitiu aplicar na prática os conceitos de Integração Contínua utilizando GitHub Actions. Foram implementadas diferentes estratégias de automação, incluindo execução manual, execução por eventos de push e execução agendada.

Além da automação dos testes unitários, o projeto também contempla a geração e armazenamento de relatórios, fornecendo rastreabilidade e evidências das execuções realizadas.

Essas práticas contribuem para aumentar a qualidade do software, reduzir falhas em integrações e agilizar o processo de validação de alterações.
