import Link from "next/link";

export default function Leyout(props) {
    return (
        <div>
            <Link href="./">Voltar</Link>
            {props.children}
        </div>
    )
}