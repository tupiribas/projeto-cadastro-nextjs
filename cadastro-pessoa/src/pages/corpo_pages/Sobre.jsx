import Link from 'next/link'
import Cabecalho from '../../components/Cabecalho'
import Leyout from '../../components/Leyout'
import styles from './Index.module.css'

export default function Sobre() {
    return (
        <Leyout>
            <div className={styles.header}>
                <Cabecalho texto="Sobre Nós" />  
            </div> 
        </Leyout>       
    )
}