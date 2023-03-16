import ListaTarefas from "../models/ListaTarefas";
import Tarefa from "../models/Tarefas";
import TipoFiltro from "../models/TipoFiltro";

const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, "Estudar next"),
    Tarefa.criarConcluida(2,"Estudar React", false),
    Tarefa.criarAtiva(3,"Concluir o curso")

]
export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)