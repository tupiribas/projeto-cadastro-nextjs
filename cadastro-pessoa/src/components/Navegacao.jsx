import styles from '../styles/Navegacao.module.css'
import Link from "next/link";

export default function Navegacao(props) {
    return (
        <div className={styles.opcoes}>
            <Link href={props.link[0]}>
                <div className={styles.area_opcao_menu}>
                    <div className={styles.opcao}>
                        <i className={`fa fa-${props.icone[0]}`}></i>
                    </div>
                    <p>{props.opcoes[0]}</p>
                </div>
            </Link>
            <Link href={props.link[1]}>
                <div className={styles.area_opcao_menu}>
                    <div className={styles.opcao}>
                        <i className={`fa fa-${props.icone[1]}`}></i>
                    </div>
                    <p>{props.opcoes[1]}</p>
                </div>
            </Link>
            <Link href={props.link[2]}>
                <div className={styles.area_opcao_menu}>
                    <div className={styles.opcao}>
                        <i className={`fa fa-${props.icone[2]}`}></i>
                    </div>
                    <p>{props.opcoes[2]}</p>
                </div>
            </Link>
            <Link href={props.link[3]}>
                <div className={styles.area_opcao_menu}>
                    <div className={styles.opcao}>
                        <i className={`fa fa-${props.icone[3]}`}></i>
                    </div>
                    <p>{props.opcoes[3]}</p>
                </div>
            </Link>
        </div>      
    )
}