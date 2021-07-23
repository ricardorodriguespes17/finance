# Finance 💲

Uma aplicação contruida com ReactJS, onde permite ser analisado um gráfico das variação do valores de uma ação, usando a [API do IEX Cloud](https://iexcloud.io/docs/api/).

## 🌐 Acesso

https://finance-psi.vercel.app

![Captura de Tela (34)](https://user-images.githubusercontent.com/39037180/126722868-b2367c5a-2ca8-410b-8ffb-f19c23ce6029.png)

![Captura de Tela (33)](https://user-images.githubusercontent.com/39037180/126722865-b7fee0eb-21af-4232-9a3c-8e1c3b6d534d.png)

## 📝 Detalhes

Para buscar uma empresa, precirará saber o código ação dela. Por exemplo: AAPL - Apple, KO - Coca-Cola, FB - Facebook.

### ▶️ Operações básicas

1. Buscar uma empresa para obter os dados;
2. Salvar uma empresa nos favoritos;
 
### 📱 Detalhes da tela

- Na lateral esquerda tem uma barra que se estende por toda altura da tela com:
  - Uma logo de uma empresa fake.
  - Um menu para escolher a tela que será visível, por enquanto só tem uma opção
  - Um botão para alternar entre o tema light e dark.
- No centro tem um componente principal da tela com:
  - Um título da página com um icone à esquerda.
  - Um input para digitar o código da empresa, seguido à direta com um botão para pesquisar.
  - Um container para mostrar informações da empresa com o nome, preço atual, gráfico.
  - Uma lista com todas empresas pesquisadas no momento.
- Na lateral direita tem um container com:
  - Um box contendo informações da pessoa logada.
  - Uma lista com as empresas favoritas. 

Observações:
  O componente da empresa, que aparece na lista de recentes e na lista de favoritos tem as opções:
    - Clicando sobre ele, passará a ser mostrado os dados da empresa no gráfico.
    - Clicando no icone da estrela, alternará a empresa para favorito ou não.

## 🔨 Desenvolvimento

Aplicação frontend desenvolvida com o framework [ReactJS](https://pt-br.reactjs.org) com [Typescript](https://www.typescriptlang.org).

Usando também as bibliotecas 
- [React Icons](https://react-icons.github.io/react-icons/search) para uso de icones
- [Axios](https://axios-http.com) para fazer chamadas às APIs.
- [Recharts](https://recharts.org) para plotagem do gráfico na tela.
- [Redux](https://redux.js.org) para gerenciamento do estado global da aplicação.
- [React Redux](https://react-redux.js.org) para ligar o Redux ao React.

### 📁 Pastas

A organização da pasta "src" se deu usando um padrão de pastas que uso, onde
  - 📂 "src/components" ficam os componentes isolados utilizados na(s) página(s) da aplicação.
  - 📂 "src/pages" ficam as páginas principais da aplicação.
  - 📂 "src/styles" ficam folhas de estilização (css) padrões da aplicação como estilos e cores padrões.
  - 📂 "src/services" ficam arquivos para fazer a conexão com alguma api externa.
  - 📂 "src/store" ficam os arquivos da store, actions e reducers do Redux.
  - 📂 "src/types" fica o arquivo com as interfaces do projeto para Typescript.
  - 📂 "src/utils" ficam as funções usadas na aplicação.

Cada página ou componente tem uma pasta com o seu nome, contendo 
  - 📎 um arquivo tsx, para renderização do componente;
  - 📎 um aquivo css, para estilização daquele componente.

### 🔷 Detalhes dos componentes

Componentes e página foram desenvolvidos usando o conceito de *functional components*, ou seja, os componentes renderizados são funções javascript.

## 📥 Acesso ao Backend

Estou utilizando a API do [IEX Cloud](https://iexcloud.io) para buscar dados das ações.

Para fazer as chamadas é necessário o uso de um token fornecido pela IEX Cloud.

**API TOKEN deve estar em uma variável local**

Seguindo o [exemplo](https://github.com/ricardorodriguespes17/finance/blob/master/.env.example).

## ⬇️ Instalação

Com o código clonado no computador, use o seguinte comando para instalar os pacotes 👇

```
npm install
```

Após o termino da instalação, use o seguinte comando para iniciar a aplicação localmente 👇

```
npm start
```

A aplicação rodará se possível em 🌐 http://localhost:3000.

## 🚀 Aprenda mais sobre React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
