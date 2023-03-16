import ListaTarefas from "@/src/models/ListaTarefas"
import TipoFiltro from "@/src/models/TipoFiltro"
import ListaBotao from "./ListaBotao"


interface ListaRodapeProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void

}
export default function ListaRodape(props: ListaRodapeProps) {
    const {tarefas, mudou} =props
    function renderizarQtdeItens() {
        
        return (
           <>
                <span className='text-gray-300 hidden lg:inline '>
                    {tarefas.quantidade}
                    {tarefas.quantidade === 0
                     ? " Nenhuma tarefa encontrada" 
                     : tarefas.quantidade === 1
                        ? " Tarefas encontradas"
                        : " Tarefas encontradas"}
                </span>

                <span className='flex-1 hidden lg:inline '>

                </span>
           </>
        )
    }

    function renderizarBotaoesFiltro() {
        return (
           <>
                <ListaBotao selecionado={tarefas.exibirTodas()} 
                    onClick={() => {
                    mudou(tarefas.removerFiltro())}}
                    classname="hidden md:inline " >
                    Todas
                </ListaBotao> 

                <ListaBotao selecionado={tarefas.exibirAtivas()} 
                    onClick={() => {
                    mudou(tarefas.filtrarAtivas())}}
                    classname="hidden md:inline mx-4" >
                    Ativas
                </ListaBotao> 

                <ListaBotao selecionado={tarefas.exibirConcluidas()} 
                    onClick={() => {
                    mudou(tarefas.filtrarConcluidas())}}
                    classname="hidden md:inline " >
                    Concluidas
                </ListaBotao> 
            
               
           </>
        )
    }

    function renderizarExcluirConcluidas() {
        return (
           <>
            <span className='flex-grow'>

            </span>
                <ListaBotao onClick={() => mudou(tarefas.excluirConcluidas())} >
                    Excluir <span className='hidden md:inline'>Concluídas</span>
                </ListaBotao>
           </>
        )
    }
    
    return (
        <li className=' flex p-5'>
             {renderizarQtdeItens()}
             {renderizarBotaoesFiltro()}
             {renderizarExcluirConcluidas()}
        </li>
        
    )
}