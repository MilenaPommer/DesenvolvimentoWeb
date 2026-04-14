import './App.css'

function Navigation() {
  return(
    <nav>
      <ul>
         <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  )
}

function Header() {
  return(
    <header>
      <h1>Meu Blog de Viagens</h1>
      <Navigation/>
    </header>
  );
}

function Sidebar() {
  return(
    <aside>
        <h3>Posts Relacionados</h3>
        <ul>
            <li><a href="#">Descobrindo as Praias de Santa Catarina</a></li>
            <li><a href="#">Descobrindo as Startups de Cascavel</a></li>
            <li><a href="#">Endrews Ross</a></li>
        </ul>
    </aside>
  )
}

function Footer() {
  return(
    <footer>
        <p>&copy; 2026 - Todos os direitos reservados.</p>
    </footer>
  )
}

function Article(props) {

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

function App() {

  const dados = {
    titulo:"Descobrindo as Praias do Nordeste",
    autor: "Seu Nome",
    data: "01 de abril de 2005",
    texto1: "As praias do Nordeste do Brasil são conhecidas pelas águas cristalinas, areia clara e clima quente praticamente o ano todo. Muitas delas têm coqueiros, piscinas naturais formadas por recifes e um mar que varia entre tons de azul e verde, criando paisagens paradisíacas.",
    texto2: "Além da beleza natural, as praias nordestinas também oferecem rica cultura, gastronomia típica e hospitalidade marcante. Destinos como Porto de Galinhas, Jericoacoara e Praia do Forte atraem turistas que buscam descanso, aventura e contato com a natureza."
  }

  return (
    <>
      <Header/>
      <main>
        <Article 
          titulo={dados.titulo} 
          autor={dados.autor} 
          data={dados.data} 
          texto1={dados.texto1}
          texto2={dados.texto2}
        />
      </main>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App