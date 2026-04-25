import { useState } from 'react'
import './App.css'

interface Tarefa {
  id: number
  text: string
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  function adicionarTarefa() {
    if (inputValue.trim() !== '') {
      const novaTarefa: Tarefa = {
        id: Date.now(),
        text: inputValue,
      }
      setTarefas([...tarefas, novaTarefa])
      setInputValue('')
    }
  }

  function removerTarefa(id: number) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Tarefas</h1>
      </header>

      <main>
        <section className="adicionar-section">
          <h2>Adicionar Tarefa:</h2>
          <label htmlFor="tarefa">Digite uma tarefa:</label>
          <div className="input-row">
            <input
              id="tarefa"
              type="text"
              placeholder="Lavar a louça..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar à lista</button>
          </div>
        </section>

        <section className="lista-section">
          <h2>Minha Lista:</h2>
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id}>
                <input type="checkbox" />
                <span>{tarefa.text}</span>
                <button
                  className="btn-remover"
                  onClick={() => removerTarefa(tarefa.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App