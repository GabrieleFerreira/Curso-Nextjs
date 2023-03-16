import ListaTarefas from "../models/ListaTarefas"
import Tarefa from "../models/Tarefas"
import TarefasIniciais from "../data/mock"
import Lista from "../components/lista/Lista"
import { useState } from "react"
import ListaRodape from "../components/lista/ListaRodape"
import Conteudo from "../components/template/Conteudo"
import Cabecalho from "../components/template/Cabecalho"
import Formulario from "../components/formulario/Formulario"





export default function Home() {
 
  const [tarefas, setTarefas] = useState(TarefasIniciais)
  
  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }

  return (
    <div className='flex flex-col  h-screen bg-gray-300'>
       <Cabecalho>
          <Formulario novaTarefaCriada={novaTarefaCriada}></Formulario>
      </Cabecalho>
      <Conteudo>
          <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas)}}>
          </Lista>
      </Conteudo>
    </div>
    
  )
}
