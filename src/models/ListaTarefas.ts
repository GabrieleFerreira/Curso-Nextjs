import Tarefa from "./Tarefas";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro

    /**
     *
     */
    constructor( todas: Tarefa[] , filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas,
        this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM
        
    }

    get itens() {
        return this.aplicarFiltroEm(this.#todas)
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado }
   
    

    adicionarTarefa(novaTarefa: Tarefa): ListaTarefas {
        const todas = [...this.#todas]
        todas.push(novaTarefa)
        return new ListaTarefas(todas, this.#filtroUtilizado )
    }

    modificarTarefa(tarefaModicada: Tarefa) : ListaTarefas{
       const todas = this.#todas.map(tarefa => {
            return tarefa.id === tarefaModicada.id ? tarefaModicada : tarefa
       })
       return new ListaTarefas(todas, this.#filtroUtilizado)
    }
    filtrarAtivas() {
        if(!this.exibirAtivas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
        } else {
            return this
        }
    }

    filtrarConcluidas() {
        if(!this.exibirConcluidas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
        } else {
            return this
        }
    }

    removerFiltro() {
        if(!this.exibirTodas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
        } else {
            return this
        }
    }

    excluirConcluidas() {
      const somenteAtivas = this.#todas.filter(tarefa => tarefa.ativa)
      return new ListaTarefas(somenteAtivas, TipoFiltro.NENHUM)
    }

    

    exibirTodas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }

    exibirConcluidas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }

    exibirAtivas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }


    private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {  
        if(this.exibirAtivas()){
            return this.aplicarFiltroAtivas(tarefas)
        } else if (this.exibirConcluidas()){
            return this.aplicarFiltroConcluida(tarefas)
        } else {
            return[...tarefas]
        }
      
    } 

    private aplicarFiltroAtivas(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefas => tarefas.ativa)
    }

    private aplicarFiltroConcluida(tarefas: Tarefa[]): Tarefa[] {
        return tarefas.filter(tarefas => tarefas.concluida)
    }
}