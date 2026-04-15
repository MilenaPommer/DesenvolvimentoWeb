export default function Article(props) {

  return(
    <article>
      <h2>{props.titulo}</h2>
      <time dateTime="2005-04-01">{props.data}</time>
      <p>Autor: {props.autor}</p>
      <p>{props.texto1}</p>
      <p>{props.texto2}</p>
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2LQAGK2Y8lhyXfVrwoNAudqNGL1UMw_k6A&s" alt="Imagem de uma praia do Nordeste com uma igreja branca e verde ao meio e muitos coqueiros"/>
        <figcaption>Exemplo de uma praia do Nordeste com uma igreja branca e verde ao meio e muitos coqueiros</figcaption>
      </figure>
    </article>
  )
}