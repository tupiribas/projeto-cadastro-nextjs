import styles from '../styles/Cabecalho.module.css'

export default function Cabecalho(props) {
    return (
        <div className={styles.cabecalho}>
            <h1>{props.titulo}</h1>
            <p>
                {props.descricao}
                {/* Lorem ipsum felis diam donec dictumst in hendrerit bibendum amet elementum. */}
            </p>
        </div>
    )
}