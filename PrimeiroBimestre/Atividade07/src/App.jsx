import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

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