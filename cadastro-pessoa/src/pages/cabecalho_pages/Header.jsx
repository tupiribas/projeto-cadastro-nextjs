import styles from './Header.module.css'

export default function Header(props) {
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