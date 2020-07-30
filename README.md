# Respostas do Desafio:

## Defina os principais requisitos de negócio e técnicos e os descreva em alto nível

### Requisitos são instruções que definem como atingir o objetivo do negócio. Em geral, refletem funções que o usuário precisa realizar para atingir o objetivo do sistema. Os principais requisitos são:

* O aplicativo é um e-commerce, o qual vende produtos da Marvel, especificamente, comics.

* O aplicativo deve utilizar a API disponibilizada pela própria Marvel.

* O aplicativo é destinado, principalmente, a um público mais jovem, visto que são os que mais usufruem dos comics atualmente.

* O aplicativo deve ter uma interface agradável, a qual disponibilize ao usuário fácil acesso às funcionalidades do sistema.

* O aplicativo deve ser programado em ReactJS, utilizando quaisquer bibliotecas ou livrarias as quais sejam convenientes.

* O aplicativo deve ter funcionalidades que facilitem a experiência do usuário ao escolher e comprar um produto.

* O aplicativo não deve expor o usuário de nenhuma maneira, mantendo controle seguro dos dados.

* O aplicativo deve oferecer informações de contato, para facilitar a comunicação.

## Priorizar pelo menos 5 requisitos de negócio e 2 requisitos técnicos, e justificar as escolhas

### Requisitos de negócios: 

* 1 - O aplicativo deve utilizar a API disponibilizada pela própria Marvel: a API da Marvel é oficial e segura, o que evita possíveis problemas.

* 2 - O aplicativo é um e-commerce, o qual vende produtos da Marvel, especificamente, comics: entender de forma clara o objetivo de um sistema é primordial para um projeto.

* 3 - O aplicativo não deve expor o usuário de nenhuma maneira, mantendo controle seguro dos dados: a segurança deve sempre ser mantida, nunca enviando dados para sistemas terceiros, ou utilizando tais dados para objetivos que não são do projeto.

* 4 - O aplicativo deve oferecer informações de contato, para facilitar a comunicação: saber quem desenvolveu o projeto é importante a fim de entender quem é responsável por ele.

* 5 - O aplicativo é destinado, principalmente, a um público mais jovem, visto que são os que mais utilizam comics atualmente: ter um público alvo define a natureza do próprio projeto, sendo mais fácil definir uma interface mais amigável para tal público. 

### Requisitos técnicos:

* 1 - O aplicativo deve ser programado em ReactJS: a tecnologia escolhida para um projeto é de suma importância, pois define a base do sistema. ReactJS é um framework que integra HTML, CSS e Javascript de forma eficiente e responsiva, sendo indispensável nas aplicações web modernas. 

* 2 - O aplicativo deve ter funcionalidades que facilitem a experiência do usuário ao escolher e comprar um produto: um carrinho de compras será uma funcionalidade útil do app, pois esta lista e resume os produtos escolhidos.

# README do Projeto:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode digitar:

### `npm start`

Roda o App no modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para o ver no navegador.

### O projeto abrirá, por padrão, a página mainPage, definida pela rota default ('/'). Esta renderizará outros componentes, facilitando a organização e reutilização do código. Com um design intuitivo, os botões presentes solicitarão requisições à API da Marvel de forma dinâmica, enquanto a resposta será listada na tela, os comics disponíveis vão oferecer a funcionalidade de os colocar no carrinho de comprar, renderizado no canto direito da tela. Ao terminar a seleção de comics, o botão "finalizar" redirecionará o usuário à página final, onde há um input para colher dados e enviar ao armazenamento. 

## Ferramentas Utilizadas

### create-react-app 
- Comando usado para criar um App React pronto e configurado.

### Material UI 
- Framework de UI, oferece diversas funcionalidades para o interface, focando não só a aparência, mas a funcionalidade.

### react-router-dom 
- Oferece meios para criar rotas na aplicação, o a deixa mais dinâmica, além de facilitar e organizar a adição de novas páginas/componentes, caso necessário.

### Axios 
- administra os serviços do app, fazendo o controle de URLs e permitindo fazer requisições.

### react-toastify 
- Oferece diversos alerts mais agradáveis na aparência que podem ser chamados por uma função.

## Ciclo de Vida dos Componentes React

Todo componente no React possui um ciclo de vida, dizemos que os componentes são montados em tela, podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos interceptando sua renderização tradicional ou captando informações desse ciclo. Esses métodos são definidos junto à classe do componente, o render é um deles.

* Constructor 
- O método constructor é a primeira função executada no componente.

* componentWillMount 
- ainda antes do render. Esse método é executado 1 vez por componente e pode inclusive realizar alterações no estado:

* Render 
- O método render é chamado construindo a View do nosso componente, esse método é chamado toda vez que uma alteração nas propriedades ou estado do componente é realizada. Você não deve utilizar qualquer função nesse método, apenas retornar conteúdo JSX.

* ComponentDidMount
- Chamado após o render indica que a renderização inicial do nosso componente foi finalizada, é o local recomendado para fazer qualquer processo assíncrono ou de efeito colateral como chamadas à API, referenciar componentes criados no render ou inclusive alterar o estado, disparando uma nova atualização no fluxo do componente.

* Os demais métodos são chamados ao atualizar alguma prop (componentWillReceiveProps), condicionar se o render deve ser chamado de novo (shouldComponentUpdate), e ao desmontar o componente (componentWillUnmount). 

## Pontos de Atenção

### Ponto 1
- A aplicação funciona de forma dinâmica, utilizando renderização condicional, o que oferece um interface organizado e agradável.

### Ponto 2
- Os serviços, utilizando Axios, já usam uma baseURL, comum a todas requisições, o que facilita o entendimento sobre o que a resposta trará.

### Ponto 3
- A componentização do projeto o deixa mais organizado e reutilizável.



