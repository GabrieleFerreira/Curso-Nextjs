

export default function Cabecalho(props) {
       return (
            <>
                <div className='flex h-1/3 bg-tarefas bg-no-repeat bg-cover'>
                <div className={` 
                    flex flex-1  justify-center items-center 
                    h-full bg-gradient-to-r via-transparent from-purple-600 to-blue-400
                `}>
                        {props.children}
                    </div>
                </div>
            </>
       )
       

}