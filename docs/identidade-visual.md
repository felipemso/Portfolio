# Guia de Estilo: Cores e Tipografia (Tema Claro)

> Este documento especifica a distribuição de cores e a padronização tipográfica para o desenvolvimento do website na versão clara.

---

## 1. Esquema e Hierarquia de Cores

A interface é estruturada com base nas proporções clássicas de design de interface (**60%** fundo, **30%** estrutura/texto, **10%** destaque).

### 1.1 Cores Dominantes (Superfície e Fundos — ~60%)

* **Fundo Principal (Canvas):** `#F8F3D1`
  * **Função:** Background geral da página e de seções completas. Substitui o branco puro por um tom off-white suave, reduzindo fadiga visual.
* **Fundo Secundário (Cartões e Painéis):** `#DDE1CF`
  * **Função:** Superfícies elevadas, fundos de cards, caixas de citação e áreas de formulários.
* **Fundo Terciário (Subseções/Bandejas):** `#E6DFB3`
  * **Função:** Blocos de contraste sutil, cabeçalhos de tabelas ou áreas de rodapé.

### 1.2 Cores Estruturais (Tipografia e Linhas — ~30%)

* **Texto Primário:** `#090807`
  * **Função:** Títulos principais (`<h1>`, `<h2>`), subtítulos (`<h3>`) e parágrafos de leitura principal. Garante contraste máximo acessível sobre os fundos claros.
* **Texto Secundário e Ícones Neutros:** `#1B323D`
  * **Função:** Parágrafos de apoio, datas, legendas de imagens, metadados e ícones informativos.
* **Bordas e Divisórias:** `#2A4861` *(ou em opacidade `rgba(42, 72, 97, 0.2)`)*
  * **Função:** Linhas horizontais (`<hr>`), contornos de cards, bordas de inputs e divisores de navegação.

### 1.3 Cores Acessórias e Destaque (Interações — ~10%)

* **Destaque Principal / Call to Action (CTA):** `#82B246`
  * **Função:** Botões de ação primária, botões de envio, links ativos, badges de status e indicadores de progresso.
* **Hover / Interação:** `#2A573F`
  * **Função:** Estado ativo ou de foco (`hover`/`focus`) de botões primários e links em geral, garantindo alto contraste no momento da interação.
* **Destaque Suave / Tag:** `#B5E364`
  * **Função:** Realces pontuais, seleções de texto, tags de categoria ou notificações de alerta brando.

---

## 2. Mapa de Aplicação em Elementos

| Elemento de UI | Cor Aplicada | Código HEX |
| :--- | :--- | :--- |
| `<body>` *(Fundo geral)* | Fundo Bege Claro | `#F8F3D1` |
| Cards / Caixas de Conteúdo | Fundo Branco Esverdeado | `#DDE1CF` |
| Bordas de Containers | Azul Petróleo / Marinho | `#2A4861` |
| Títulos (`<h1>`, `<h2>`, `<h3>`) | Preto Profundo | `#090807` |
| Texto Corrido (`<p>`) | Preto Profundo | `#090807` |
| Legendas / Metadados | Azul Petróleo Escuro | `#1B323D` |
| Botão Primário (Fundo) | Verde Musgo | `#82B246` |
| Botão Primário (Texto) | Bege Claro | `#F8F3D1` |
| Botão Primário (Hover) | Verde Floresta Escuro | `#2A573F` |
| Botão Secundário (Borda/Texto) | Azul Petróleo Escuro | `#1B323D` |
| Links (`<a>`) | Verde Floresta Escuro | `#2A573F` |
| Linhas divisórias (`<hr>`) | Azul Marinho | `#2A4861` |

---

## 3. Tipografia

### 3.1 Família Principal

* **Família Tipográfica:** `Optima, Candara, Segoe UI, sans-serif`
* **Características:** Sans-serif humanista com modulação de traço (espessura variável de inspiração romana clássica), oferecendo sofisticação editorial com excelente clareza digital.
* **Aplicações:**
  * **Títulos e Cabeçalhos (`<h1>` a `<h6>`):** Pesos *Medium* e *Bold*. O contraste de traço da Optima dá presença e elegância aos cabeçalhos.
  * **Corpo de Texto (`<p>`, `<li>`, `<blockquote>`):** Peso *Regular* com entrelinha padrão confortável (`line-height: 1.5` a `1.6`).

### 3.2 Família Secundária (Funcional)

* **Família Tipográfica:** `Segoe UI, system-ui, -apple-system, sans-serif`
* **Aplicações:**
  * **Rótulos de botões (CTAs), inputs de formulário, tabelas de dados e textos utilitários micro:** Fontes de sistema neutras para interfaces onde a densidade da informação exige neutralidade imediata.

---

## 4. Tokens CSS Sugeridos (`:root`)

```css
:root {
  /* 60% — Superfícies e Fundos */
  --color-bg-canvas: #F8F3D1;
  --color-bg-surface: #DDE1CF;
  --color-bg-tertiary: #E6DFB3;

  /* 30% — Estrutura e Tipografia */
  --color-text-primary: #090807;
  --color-text-secondary: #1B323D;
  --color-border: #2A4861;
  --color-border-subtle: rgba(42, 72, 97, 0.2);

  /* 10% — Interações e Destaques */
  --color-accent-cta: #82B246;
  --color-accent-hover: #2A573F;
  --color-accent-soft: #B5E364;

  /* Famílias Tipográficas */
  --font-primary: Optima, Candara, 'Segoe UI', sans-serif;
  --font-secondary: 'Segoe UI', system-ui, -apple-system, sans-serif;
}
```