# Boas-vindas ao repositório do exercício CloneTwitter

## 1 - Criar as rotas da aplicação

A aplicação deve possuir três rotas principais:

- Rota `/`: deve renderizar o componente `Home`.
- Rota `/profile/:username`: deve renderizar o componente `Profile`.
- Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`.

> Os componentes das páginas já estão criados e se encontram na pasta `/src/pages`

> Não esqueça de utilizar o componente `BrowserRouter` pra criar as rotas
>
> A biblioteca React Router Dom já está instalada.

## 2 - Implementar o componente `Layout`

Esse componente será o responsável por renderizar o menu de navegação da aplicação. O menu deve ser renderizado em todas as rotas mapeadas.

- O componente já está criado e pode ser acessado no arquivo `/src/components/layout/index.tsx`;
- O menu de navegação deve possuir dois _links_:
  - Um para a rota `/`;
  - Outro para a rota `/profile/betrybe`;
- Além do menu de navegação, o componente `Layout` deverá renderizar o componente correspondente à página atual. Para isso, utilize o componente `Outlet`, disponibilizado pela biblioteca React Router.

> **Dica 👀**: Para o menu de navegação, utilize o componente `NavLink` disponibilizado pela biblioteca React Router.

## 3 - Implementar o componente `Home`

Esse componente será o responsável por renderizar as informações da rota `/`. Ao acessar a página, todos os tweets deverão ser renderizados.

- Para renderizar os _tweets_, você deverá utilizar o componente `Tweet`, que está no arquivo `src/components/tweet/index.tsx`.
- As informações dos _tweets_ podem ser obtidas por meio de uma requisição ao _endpoint_ `https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/tweets`, que devem ser enviadas via _props_ para o componente `Tweet`.

<details>
<summary>retorno da API</summary><br />

```json
    [
        {
          "id": 1,
          "owner": {
            "name": "Trybe",
            "username": "betrybe",
            "profilePicture": "https://pbs.twimg.com/profile_images/1574869347079692296/QpY7cGuV_400x400.jpg"
          },
          "commentsCount": 125,
          "retweetsCount": 56,
          "likesCount": 2500,
          "tweet": "Fala tribo! Já visitaram a nova documentação do React?"
        },
        // ...
    ]
```
</details>

- Enquanto a requisição está sendo realizada, você deve indicar que as informações estão sendo carregadas.
- Cada _tweet_ deverá apresentar o _tweet_ em si (ou seja, a mensagem) e as informações de quem o realizou (nome, _username_ e imagem do perfil);
  - O _username_ deverá ser um _link_ que, quando clicado, redirecionará para a página `/profile/username`. Por exemplo, em um _tweet_ da Trybe, ao clicar em `@betrybe`, a página deverá ser redirecionada para `/profile/betrybe`.

> Dica: Você pode acessar o arquivo `/src/utils/types.ts` e utilizar o tipo `TweetCard` para _tipar_ o retorno da API.

## 4 - Implementar o componente `Profile`

O componente `Profile` será o responsável por renderizar as informações da página `/profile/:username`. Essa página deve renderizar as informações do perfil selecionado, bem como todos os _tweets_ realizados por esse perfil.

- As informações de todas as pessoas cadastradas podem ser acessadas por meio de uma requisição ao _endpoint_ `https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/twitter-users`.

<details>
<summary>retorno da API</summary><br />

```json
[
    {
      "name": "Trybe",
      "username": "betrybe",
      "id": 1,
      "profilePicture": "https://pbs.twimg.com/profile_images/1574869347079692296/QpY7cGuV_400x400.jpg",
      "backgroundPicture": "https://pbs.twimg.com/profile_banners/1133443092399493120/1664313179/1500x500",
      "tweetsId": [
        1,
        14,
        15
      ],
      "following": 100,
      "followers": 20000,
      "bio": "A escola mais orientada para o desenvolvimento de uma carreira de sucesso."
    },
    // ...
]
```

</details>

- Enquanto a requisição está sendo realizada, você deve indicar que as informações estão sendo carregadas.
- Ao acessar a página, a aplicação deverá renderizar apenas informações do perfil que está na URL. Por exemplo, na rota `/profile/betrybe`, a página deverá renderizar as informações do perfil `@betrybe`.
- As informações que deverão ser renderizadas são:
  - a imagem da capa (backgroundImage);
  - imagem do perfil;
  - nome;
  - _username_;
  - todos os _tweets_ feitos por esse perfil.
- Para renderizar os _tweets_, você deverá utilizar o componente `Tweet`, que está no arquivo `src/components/tweet/index.tsx`.
