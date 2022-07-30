import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Navegacao from '../components/Navegacao'

export default function Leyout(props) {
    return (
        <div>
            <Cabecalho 
                titulo={props.titulo} 
                descricao={props.descricao}/>
            <Corpo>
                <Navegacao 
                    opcoes={["Home", "Sobre", "Cadastro", "Lista"]}
                    icone={['home', 'info', 'address-card', 'list']}
                    link={['./', './Sobre', './', './']}
                />  
                {props.children}   
            </Corpo>
        </div>
    )
}