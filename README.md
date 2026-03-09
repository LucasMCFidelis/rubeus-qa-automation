# rubeus-qa-automation

Projeto de automação de testes E2E para os módulos **Certificação** e **Site** da plataforma Rubeus, utilizando [Cypress](https://www.cypress.io/) e TypeScript.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

---

## Instalação

```bash
npm install
```

---

## Executando os testes

### Abrir o Cypress interativamente

```bash
npx cypress open
```

### Executar todos os testes em modo headless

```bash
npx cypress run
```

---

## Executando por tag

O projeto utiliza o plugin [cypress-tags](https://www.npmjs.com/package/cypress-tags) para filtrar testes por tag durante a execução. As tags disponíveis estão definidas no enum `Tag`:

| Tag          | Descrição                                         |
| ------------ | ------------------------------------------------- |
| `WIP`        | Testes em desenvolvimento / trabalho em progresso |
| `REGRESSION` | Suíte de regressão completa                       |
| `SMOKE`      | Verificações rápidas de sanidade                  |
| `FEATURE`    | Testes de funcionalidades específicas             |

### Como aplicar tags nos testes

As tags são passadas como **primeiro argumento** do `describe` ou `it`, na forma de array de strings:

```typescript
import { Tag } from "../support/enums/tag";

// Tagueando um bloco describe inteiro
describe([Tag.SMOKE], "Página Certificação", () => {
  it("visitar página", () => {
    certificacaoPage.visit();
  });
});

// Tagueando um it específico
describe("Página Certificação", () => {
  it([Tag.SMOKE, Tag.REGRESSION], "visitar página", () => {
    certificacaoPage.visit();
  });
});
```

> **Atenção:** o `cypress-tags` processa os testes via AST antes da execução. Por isso, os valores de tag devem ser literais de string ou referências a enum — **não podem ser gerados dinamicamente** (ex: resultado de funções).

### Executar testes por tag via CLI

As variáveis de ambiente devem ser definidas **antes** do comando `npx cypress run`. No bash/git bash:

```bash
# Executar apenas testes marcados como SMOKE
CYPRESS_INCLUDE_TAGS=SMOKE npx cypress run

# Executar apenas testes marcados como REGRESSION
CYPRESS_INCLUDE_TAGS=REGRESSION npx cypress run

# Executar apenas testes marcados como WIP
CYPRESS_INCLUDE_TAGS=WIP npx cypress run

# Combinar tags (inclui testes com SMOKE OU REGRESSION)
CYPRESS_INCLUDE_TAGS=SMOKE,REGRESSION npx cypress run

# Excluir uma tag (executa todos exceto WIP)
CYPRESS_EXCLUDE_TAGS=WIP npx cypress run

# Combinar inclusão e exclusão
CYPRESS_INCLUDE_TAGS=REGRESSION CYPRESS_EXCLUDE_TAGS=WIP npx cypress run
```

No **Windows** (CMD ou PowerShell), use a flag `--env` em vez de variáveis de ambiente inline:

```bash
npx cypress run --env CYPRESS_INCLUDE_TAGS=SMOKE
npx cypress run --env CYPRESS_EXCLUDE_TAGS=WIP
npx cypress run --env CYPRESS_INCLUDE_TAGS=SMOKE,REGRESSION
```

### Lógica AND entre tags (todas devem estar presentes)

Por padrão, basta que **qualquer** tag passada coincida para o teste ser incluído/excluído. Para exigir que o teste possua **todas** as tags simultaneamente:

```bash
# Inclui apenas testes que possuam SMOKE E REGRESSION ao mesmo tempo
CYPRESS_INCLUDE_USE_BOOLEAN_AND=true CYPRESS_INCLUDE_TAGS=SMOKE,REGRESSION npx cypress run

# Exclui apenas testes que possuam WIP E FEATURE ao mesmo tempo
CYPRESS_EXCLUDE_USE_BOOLEAN_AND=true CYPRESS_EXCLUDE_TAGS=WIP,FEATURE npx cypress run
```

### Expressões booleanas avançadas

Para estratégias mais complexas, habilite o modo de expressão:

```bash
CYPRESS_USE_INCLUDE_EXCLUDE_EXPRESSIONS=true \
CYPRESS_INCLUDE_EXPRESSION='(SMOKE AND REGRESSION) AND (FEATURE OR WIP)' \
CYPRESS_EXCLUDE_EXPRESSION='WIP' \
npx cypress run
```

---

## Estrutura do projeto

```
cypress/
├── e2e/                        # Arquivos de teste
│   ├── certificacao.cy.ts
│   └── site.cy.ts
├── pages/                      # Page Objects
│   ├── components/             # Componentes de página
│   │   ├── subscribe-form-first-step.ts
│   │   └── subscribe-form-second-step.ts
│   ├── base-page.ts
│   ├── certificacao-page.ts
│   └── site-page.ts
└── support/
    ├── constants/
    │   └── links.ts            # URLs e links utilizados nos testes
    ├── enums/
    │   └── tag.ts              # Enum de tags disponíveis
    ├── factories/
    │   └── subscribe-form-factory.ts  # Factories de dados de teste
    ├── selectors/              # Seletores organizados por página
    │   ├── certificacao-page-selectors.ts
    │   └── site-page-selectors.ts
    ├── types/
    │   └── subscribe-form-data.ts     # Tipos compartilhados
    ├── commands.ts             # Comandos customizados do Cypress
    └── e2e.ts                  # Configuração global de suporte
cypress.config.ts               # Configuração principal do Cypress
```

---

## Documentação de testes

A gestão dos casos de teste e report de bugs está documentada na planilha abaixo:

[📋 Gestão de Testes QA — Rubeus](https://docs.google.com/spreadsheets/d/1RyGojeJBRcXwhmXZDCf6TDV7KkdSQuvAeKauEXXsJv8/edit?usp=sharing)

---

## Ambiente de teste

A `baseUrl` está configurada para o ambiente de qualidade:

```
https://qualidade.apprbs.com.br
```

Os módulos cobertos são:

- `/certificacao` — Página de Certificação
- `/site` — Página do Site

---

## Scripts utilitários

```bash
# Verificar problemas de lint
npm run lint

# Aplicar formatação automática
npm run format

# Verificar formatação sem alterar arquivos
npm run format:check
```
