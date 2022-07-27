import Link from 'next/link'
import Leyout from '../components/Leyout'

import Cabecalho from './cabecalho_pages/Cabecalho'
import Corpo from './corpo_pages/Corpo'
import Navegacao from './corpo_pages/Navegacao'

import styles from './Index.module.css'

export default function Index() {
    return (
        <div>
            <Cabecalho 
                titulo="Home" 
                descricao="Esse texto é ilustrativo."/>
            <Corpo>
                <Navegacao 
                    opcoes={["Home", "Sobre", "Cadastro", "Lista"]}
                    icone={['home', 'info', 'address-card', 'list']}
                    link={['./', './Sobre', './', './']}
                />  
                <Leyout>

                </Leyout>   
            </Corpo>
        </div>
    )
}