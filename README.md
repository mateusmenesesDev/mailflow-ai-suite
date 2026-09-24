# MailFlow AI Suite

Crie a UI de um SaaS moderno chamado **MailFlow AI**, uma plataforma que combina funcionalidades de Gmail, Mailchimp, Brevo, PostHog e ChatGPT.

O objetivo é criar uma aplicação extremamente profissional, com aparência de produto pronto para produção, seguindo o estilo visual de empresas como Linear, Vercel, Stripe, Notion e Raycast.

## Objetivo

Esta aplicação será utilizada como referência para alunos aprenderem desenvolvimento Full Stack, então a UI deve ser completa, organizada e escalável.

Não implemente backend.

Não utilize dados reais.

Crie apenas uma UI totalmente funcional utilizando dados mockados.

Todo o layout deve ser responsivo.

---

# Design

Utilize um design minimalista.

Espaçamento generoso.

Muito clean.

Tipografia moderna.

Bordas suaves.

Sombras discretas.

Cards elegantes.

Animações suaves.

Dark Mode como padrão.

Deve existir suporte para Light Mode.

Utilize componentes semelhantes ao shadcn/ui.

Ícones Lucide.

Evite cores exageradas.

Utilize apenas uma cor primária (azul ou violeta).

---

# Layout

A aplicação deve possuir três colunas.

## Sidebar

Logo

Workspace Switcher

Menu

• Inbox

• Sent

• Drafts

• Starred

• Spam

• Trash

Separador

Marketing

• Campaigns

• Contacts

• Lists

• Templates

• Automations

• Analytics

Separador

AI

• AI Assistant

• AI Templates

• AI Insights

Separador

Settings

---

## Segunda coluna

Lista de emails.

No topo:

Campo de pesquisa

Filtros

Botão Compose

Cada email possui

- avatar

- nome

- assunto

- preview

- labels

- anexo

- horário

- favorito

- indicador de não lido

Ao clicar, selecionar visualmente.

---

## Terceira coluna

Visualização completa do email.

Mostrar

Assunto

Remetente

Destinatário

Data

Corpo do email

Anexos

Botões

Reply

Reply All

Forward

Archive

Delete

No canto superior direito adicionar botão

✨ Ask AI

---

# Composer

Criar modal semelhante ao Gmail.

Campos

To

CC

BCC

Subject

Editor Rich Text

Toolbar

- bold

- italic

- underline

- list

- numbered list

- link

- image

- emoji

Upload de anexos

Botão Send

Botão Schedule

Botão Save Draft

---

# Contacts

Tabela moderna.

Colunas

Avatar

Nome

Email

Empresa

Cargo

Tags

Última interação

Status

No topo

Pesquisar

Filtros

Adicionar contato

Importar CSV

---

# Lists

Visual semelhante ao Notion.

Cada lista mostra

Nome

Quantidade de contatos

Última atualização

Criador

---

# Campaigns

Tela inspirada no Mailchimp.

Cards no topo

Emails enviados

Open Rate

CTR

Bounce

Unsubscribe

Tabela

Nome

Status

Lista

Agendamento

Performance

Ações

Botão

Nova campanha

---

# Nova campanha

Wizard em quatro etapas.

1

Informações

- Nome

- Assunto

- Remetente

2

Selecionar Lista

3

Escolher Template

4

Revisar e Agendar

---

# Templates

Grid de templates.

Cada card possui preview.

Categorias

Newsletter

Welcome

Promotion

Announcement

Course

Product Launch

Botão

Criar Template

---

# Editor de Template

Editor visual drag-and-drop.

Painel esquerdo

Blocos

Texto

Imagem

Botão

Spacer

Divider

Columns

Hero

Banner

Vídeo

Painel central

Canvas

Painel direito

Propriedades

---

# Automations

Tela semelhante ao n8n.

Canvas infinito.

Blocos conectados.

Exemplos

Trigger

↓

Delay

↓

Send Email

↓

Condition

↓

Send Coupon

Cada bloco deve possuir ícone.

---

# Analytics

Dashboard extremamente bonito.

Cards

Emails enviados

Open Rate

CTR

Revenue

Bounce

Spam

Gráficos

Linha

Área

Barras

Pizza

Tabela

Top campanhas

Top templates

Melhores horários

Mapa mundial mostrando origem das aberturas.

Dispositivos

Desktop

Mobile

Tablet

Clientes

Gmail

Outlook

Apple Mail

Yahoo

---

# AI Assistant

Tela semelhante ao ChatGPT.

Sidebar com histórico.

Área principal de conversa.

Sugestões iniciais

"Escreva uma newsletter"

"Gerar campanha"

"Criar assunto"

"Melhorar email"

"Resumir conversa"

"Traduzir"

---

# AI no Composer

Adicionar um painel lateral.

Botões rápidos.

✨ Escrever email

✨ Melhorar texto

✨ Tornar mais persuasivo

✨ Corrigir gramática

✨ Resumir

✨ Traduzir

✨ Gerar assunto

✨ Gerar CTA

---

# AI Insights

Dashboard mostrando recomendações.

Exemplos

"Sua taxa de abertura caiu 14%."

"O melhor horário para envio é terça às 09:00."

"Usuários da lista React possuem CTR 28% maior."

"Criar uma campanha de reengajamento pode recuperar cerca de 320 contatos."

Cada insight deve aparecer em cards elegantes.

---

# Configurações

Perfil

Workspace

Equipe

SMTP

Domínios

API Keys

Integrações

Webhooks

Billing

Tema

Notificações

---

# Componentes

Utilize

Cards

Dropdowns

Context Menus

Dialogs

Command Palette

Breadcrumbs

Badges

Tabs

Charts

Toasts

Progress

Tooltips

Data Tables

Date Pickers

---

# Microinterações

Hover elegante

Transições suaves

Loading Skeleton

Estados vazios

Estados de erro

Estados de sucesso

Animações discretas

---

# Dados

Utilize dados fictícios.

Criar dezenas de emails mockados.

Campanhas mockadas.

Analytics mockado.

Templates mockados.

Contatos mockados.

---

# Resultado esperado

A interface deve parecer um SaaS premium avaliado em milhões de dólares.

O usuário deve sentir que está utilizando uma mistura entre:

- Gmail

- Mailchimp

- Brevo

- Linear

- Notion

- Stripe

- PostHog

- ChatGPT

Priorize uma experiência extremamente refinada, consistente e profissional, com atenção aos detalhes de UX e UI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c481592e-bf4d-4e71-a3cc-24366319ec79).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
