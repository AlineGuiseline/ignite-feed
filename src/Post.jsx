// minhas props serão um objeto, onde eu terei o meu "author" e o "content", que foram as informações enviadas. Basicamente assim:
// props: { "author", "content" }

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

/* Default Exports vs Named Exports

No Default Exports (export default Post) a grande vantagem é que você pode dar um nome pra esse componente na importação e não na exportação (ou seja, se lá no arquivo App.jsx, onde eu estou usando esse componente, eu quiser importá-lo como "PostComponent", tudo vai funcionar corretamente, mesmo que o nome verdadeiro que está sendo exportado seja "Post"). Porém, isso ão é muito vantajoso, porque é muito comum quando nós estamos construindo múltiplos componentes, nós copiarmos e colarmos outro componente para ser mais fácil a criação desses novos componentes - e é super comum esquecermos de mudar o nome.

Named Exports (export function Post() {}) nao deixa o nosso código ser executado se nós errarmos ou tentarmos alterar o nome da importação, o que evita erros. Lembrando que para importar um componente com Named Exports nós precisamos fazer import { Post } from "./Post.jsx", envolvendo o nome da função nas chaves.
*/
