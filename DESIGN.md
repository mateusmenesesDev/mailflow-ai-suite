# MailFlow AI — Design System

Documento de referência com todos os tokens de design usados no projeto. Todos os valores canônicos vivem em [`src/styles.css`](./src/styles.css) via `@theme inline` + variáveis CSS (`oklch`). **Nunca** use classes hardcoded (`bg-white`, `text-black`, `#hex`) — sempre use os tokens semânticos abaixo.

---

## 1. Tipografia

### Família

| Token        | Valor                                                 | Uso              |
| ------------ | ----------------------------------------------------- | ---------------- |
| `--font-sans`| `"Inter", ui-sans-serif, system-ui, sans-serif`        | Toda a interface |

Carregada via `<link>` no `src/routes/__root.tsx` (Google Fonts, pesos 400/500/600/700).
Features tipográficas ativas no `body`: `cv02, cv03, cv04, cv11` (variantes estilísticas do Inter).

### Escala de tamanhos (Tailwind)

| Classe        | Tamanho | Uso típico                          |
| ------------- | ------- | ----------------------------------- |
| `text-[10px]` | 10px    | Micro-labels, timestamps            |
| `text-xs`     | 12px    | Metadados, badges, descrições       |
| `text-sm`     | 14px    | Corpo padrão da UI                  |
| `text-base`   | 16px    | Corpo em áreas de leitura           |
| `text-lg`     | 18px    | Subtítulos de card                  |
| `text-xl`     | 20px    | Títulos de seção                    |
| `text-2xl`    | 24px    | Títulos de página                   |
| `text-3xl+`   | 30px+   | Hero, números de métricas grandes   |

### Pesos

`font-normal` (400) · `font-medium` (500) · `font-semibold` (600) · `font-bold` (700).

---

## 2. Paleta de Cores

Formato: **OKLCH**. Cada token tem versão light (`:root`) e dark (`.dark` — padrão do app).

### Cores base

| Token                    | Light                       | Dark                        | Uso                                |
| ------------------------ | --------------------------- | --------------------------- | ---------------------------------- |
| `--background`           | `oklch(0.99 0 0)`           | `oklch(0.145 0.01 265)`     | Fundo global                       |
| `--foreground`           | `oklch(0.18 0.02 265)`      | `oklch(0.97 0.005 265)`     | Texto principal                    |
| `--card`                 | `oklch(1 0 0)`              | `oklch(0.18 0.012 265)`     | Fundo de cards                     |
| `--card-foreground`      | `oklch(0.18 0.02 265)`      | `oklch(0.97 0.005 265)`     | Texto em cards                     |
| `--popover`              | `oklch(1 0 0)`              | `oklch(0.19 0.012 265)`     | Popovers / dropdowns               |
| `--popover-foreground`   | `oklch(0.18 0.02 265)`      | `oklch(0.97 0.005 265)`     | Texto em popovers                  |
| `--muted`                | `oklch(0.965 0.005 265)`    | `oklch(0.22 0.012 265)`     | Fundos suaves                      |
| `--muted-foreground`     | `oklch(0.5 0.02 265)`       | `oklch(0.62 0.02 265)`      | Texto secundário                   |
| `--border`               | `oklch(0.92 0.005 265)`     | `oklch(0.26 0.012 265)`     | Bordas                             |
| `--input`                | `oklch(0.94 0.005 265)`     | `oklch(0.26 0.012 265)`     | Bordas de inputs                   |
| `--ring`                 | `oklch(0.55 0.22 280)`      | `oklch(0.68 0.19 280)`      | Focus ring                         |

### Cores semânticas

| Token                       | Light                  | Dark                   | Uso                       |
| --------------------------- | ---------------------- | ---------------------- | ------------------------- |
| `--primary`                 | `oklch(0.55 0.22 280)` | `oklch(0.68 0.19 280)` | Violeta — marca / CTA     |
| `--primary-foreground`      | `oklch(0.99 0 0)`      | `oklch(0.15 0.02 265)` | Texto sobre primary       |
| `--secondary`               | `oklch(0.97 0.005 265)`| `oklch(0.23 0.015 265)`| Botões secundários        |
| `--secondary-foreground`    | `oklch(0.25 0.02 265)` | `oklch(0.95 0.005 265)`| Texto em secondary        |
| `--accent`                  | `oklch(0.96 0.01 280)` | `oklch(0.28 0.05 280)` | Hover / destaque suave    |
| `--accent-foreground`       | `oklch(0.3 0.05 280)`  | `oklch(0.95 0.02 280)` | Texto em accent           |
| `--destructive`             | `oklch(0.6 0.22 27)`   | `oklch(0.62 0.22 22)`  | Ações destrutivas / erros |
| `--destructive-foreground`  | `oklch(0.99 0 0)`      | `oklch(0.98 0 0)`      | Texto em destructive      |
| `--success`                 | `oklch(0.65 0.17 155)` | `oklch(0.7 0.17 155)`  | Sucesso / positivo        |
| `--warning`                 | `oklch(0.78 0.16 75)`  | `oklch(0.8 0.16 75)`   | Aviso / atenção           |

### Sidebar

| Token                            | Light                    | Dark                     |
| -------------------------------- | ------------------------ | ------------------------ |
| `--sidebar`                      | `oklch(0.985 0 0)`       | `oklch(0.155 0.01 265)`  |
| `--sidebar-foreground`           | `oklch(0.25 0.02 265)`   | `oklch(0.9 0.005 265)`   |
| `--sidebar-primary`              | `oklch(0.55 0.22 280)`   | `oklch(0.68 0.19 280)`   |
| `--sidebar-primary-foreground`   | `oklch(0.99 0 0)`        | `oklch(0.15 0.02 265)`   |
| `--sidebar-accent`               | `oklch(0.95 0.01 280)`   | `oklch(0.22 0.02 280)`   |
| `--sidebar-accent-foreground`    | `oklch(0.3 0.05 280)`    | `oklch(0.95 0.02 280)`   |
| `--sidebar-border`               | `oklch(0.92 0.005 265)`  | `oklch(0.22 0.012 265)`  |
| `--sidebar-ring`                 | `oklch(0.55 0.22 280)`   | `oklch(0.68 0.19 280)`   |

### Charts (Analytics)

| Token       | Light                  | Dark                   | Cor         |
| ----------- | ---------------------- | ---------------------- | ----------- |
| `--chart-1` | `oklch(0.55 0.22 280)` | `oklch(0.68 0.19 280)` | Violeta     |
| `--chart-2` | `oklch(0.65 0.17 200)` | `oklch(0.7 0.17 200)`  | Ciano       |
| `--chart-3` | `oklch(0.7 0.17 155)`  | `oklch(0.72 0.17 155)` | Verde       |
| `--chart-4` | `oklch(0.78 0.16 75)`  | `oklch(0.8 0.16 75)`   | Âmbar       |
| `--chart-5` | `oklch(0.65 0.2 15)`   | `oklch(0.68 0.2 15)`   | Vermelho    |

### Uso via Tailwind

Cada token vira uma classe utilitária automaticamente:
`bg-background`, `text-foreground`, `bg-card`, `border-border`, `bg-primary`, `text-primary-foreground`, `bg-muted`, `text-muted-foreground`, `bg-destructive`, `text-success`, `bg-sidebar`, etc.

---

## 3. Border Radius

Base: `--radius: 0.75rem` (12px).

| Token         | Cálculo                    | Valor  | Uso                         |
| ------------- | -------------------------- | ------ | --------------------------- |
| `--radius-sm` | `calc(var(--radius) - 4px)`| 8px    | Badges, inputs pequenos     |
| `--radius-md` | `calc(var(--radius) - 2px)`| 10px   | Botões, inputs              |
| `--radius-lg` | `var(--radius)`            | 12px   | Cards, dialogs              |
| `--radius-xl` | `calc(var(--radius) + 4px)`| 16px   | Cards em destaque           |
| `--radius-2xl`| `calc(var(--radius) + 8px)`| 20px   | Hero, containers grandes    |
| `--radius-3xl`| `calc(var(--radius) + 12px)`| 24px  | Elementos decorativos       |

Classes: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`.

---

## 4. Spacing (Margin / Padding / Gap)

Escala padrão do Tailwind (`1 unidade = 0.25rem = 4px`).

| Classe | Valor | Uso comum                              |
| ------ | ----- | -------------------------------------- |
| `0.5`  | 2px   | Micro-ajustes                          |
| `1`    | 4px   | Gap entre ícone e texto denso          |
| `1.5`  | 6px   | Gap em labels                          |
| `2`    | 8px   | Padding interno pequeno, gap padrão    |
| `3`    | 12px  | Padding de itens de lista, gap médio   |
| `4`    | 16px  | Padding padrão de cards, gap de grid   |
| `5`    | 20px  | Espaçamento entre seções pequenas      |
| `6`    | 24px  | Padding de páginas (desktop)           |
| `8`    | 32px  | Espaçamento entre grandes blocos       |
| `10+`  | 40px+ | Hero sections, gaps generosos          |

### Convenções do projeto

- **Padding de página**: `p-4 md:p-6`
- **Gap em grids/flex**: `gap-2` (denso), `gap-4` (padrão), `gap-6` (arejado)
- **Padding de card**: `CardHeader`/`CardContent` já vem com padding do shadcn
- **Padding de item de lista**: `p-3`
- **Container centralizado**: `mx-auto max-w-6xl p-4 md:p-6`
- **Espaço vertical entre elementos empilhados**: `space-y-2` / `space-y-3` / `space-y-4`

---

## 5. Layout

- **Sidebar**: componente `SidebarProvider` + `AppSidebar` + `SidebarInset` no root.
- **Header de página**: componente `PageHeader` (título + ações).
- **Áreas roláveis**: `ScrollArea` do shadcn, com `flex-1` para preencher.
- **Max-width comum**: `max-w-6xl` (páginas de settings/config), sem limite em views densas (Inbox, Analytics).
- **Breakpoints Tailwind**: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

---

## 6. Tema (Dark / Light)

- **Default**: `dark` (aplicado em `<html class="dark">` no `RootShell`).
- **Toggle**: `ThemeProvider` (`src/components/theme-provider.tsx`) — persiste em `localStorage` sob a chave `theme`.
- **Variante Tailwind**: `@custom-variant dark (&:is(.dark *))` — use `dark:` prefix quando necessário, mas prefira tokens semânticos que já se adaptam.

---

## 7. Componentes

- **Biblioteca**: [shadcn/ui](https://ui.shadcn.com) — estilo `new-york`, base color `slate`, ícones `lucide-react`.
- **Aliases** (`components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
- **Notificações**: `sonner` (`<Toaster />` no root).

---

## 8. Regras de ouro

1. **Nunca** hardcode cores (`text-white`, `bg-black`, `bg-[#...]`) — use tokens semânticos.
2. **Nunca** crie `tailwind.config.js` — Tailwind v4 é CSS-first, config vive em `src/styles.css`.
3. **Nunca** faça `@import` de URL de fonte no CSS — use `<link>` no `__root.tsx`.
4. Novas cores → adicionar em `:root` **e** `.dark`, e mapear em `@theme inline`.
5. Utilidades customizadas → `@utility nome { ... }` (não `@layer utilities`).
