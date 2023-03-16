interface SelecooProps{
    valor: boolean
}
export default  function Selecao(props: SelecooProps) {

    const gradiente = props.valor ? ' bg-gradient-to-br from-blue-400 to-purple-500' : ''
    return (
        <div className={`
        flex justify-center items-center
        h-7  w-7 cursor-pointer rounded-full
        border border-gray-400 text-white ${gradiente}
        `}
       

       
        >x</div>
    )
}