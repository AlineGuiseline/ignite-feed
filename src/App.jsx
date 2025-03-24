import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AlineGuiseline.png",
      name: "Aline Guiseline",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-03-19 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/summerlee-design.png",
      name: "Bia Fernandes",
      role: "UI Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-03-18 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

/* 
nós temos o arquivo index.html dentro deste projeto e ele é o primeiro arquivo carregado pela aplicação web. Neste index nós temos apenas uma div vazia (id="root") e um script do tipo "module" (lembrando que o Vite utiliza dos ECMAScripts modules nativos do browser, ou seja, o fomrato de importação e exportação que existe nativamente nos novos browsers) que informa que o arquivo .js que a nossa aplicação vai carregar é o main.jsx

Mas como tem tanta coisa sendo exibida na tela se a div root está vazia?

Se nós entrarmos no arquivo main.jsx nós vemos que ele está importando o React, o "react-dom/client". O "react" é o core da biblioteca, onde tem as funcionalidades que são compartilhadas entre todas as interfaces, seja React para web, React Native, React para a televisão... Já o "react-dom/client" é a integração do core do React com a DOM (Document Object Model, ou seja, a representação do HTML através do JS), então quando nós improtamos o react dom, nós integramos o react para funcionar no ambiente web do browser. 

Nós chamamos o método .createRoot() de dentro do ReactDOM, e ele recebe um parâmetro, que é o elemento raiz da nossa página HTML (no caso, o "root"), e o React vai criar o HTML, o CSS e todo o JS da aplicação dentro da div root com o método .render(). O render vai renderizar algo interno do React ("React.StrictMode") e dentro desse "React.StrictMode" será renderizado o nosso App (que nada mais é do que uma função que retorna um HTML).

Ou seja, diferente de uma aplicação tradicional, a aplicação SPA terá toda a interface construída a partir do JS (a interface não fica dentro do HTML, mas sim do JS, o que torna mais fácil de manipulá-la).
*/
