import Selecao from "./lista/Selecao"

interface ListaItemProps {
    valor: string
    concluido: boolean
    alterarStatus: () => void

}
export default function ListaItem(props: ListaItemProps) {
    const estiloTexto = props.concluido ? 
    'line-through text-gray-300' : 'text-gray-500'
    return (
        <li onClick={props.alterarStatus} className='
             text-black p-5 border-b border-x-gray-600
            flex items-center cursor-pointer text-xl'>
            <Selecao valor={props.concluido}/> 
            <span  className={`
            font-light ml-5 ${estiloTexto}`}>
                {props.valor}
            </span>
        </li>
    )
}