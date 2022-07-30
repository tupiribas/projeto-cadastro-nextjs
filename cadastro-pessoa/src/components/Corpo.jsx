import styles from '../styles/Corpo.module.css'

export default function Corpo(props) {
    return (
        <div className={styles.corpo}>
            <div className={styles.barra_suspensa}>
                <p></p>
            </div>
            {props.children}
        </div>
    )
}