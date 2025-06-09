import Link from "next/link"
import styles from './sidebar.module.scss';

interface links {
    links: [
        link: string,
        name: string
    ]
}

export default function Sidebar() {
    return (
        <nav className={styles.root}>
            <li className={styles.root__item}>
                <Link className={styles.root__link} href={`/dashboard/users`}>Users</Link>
            </li>
        </nav>
    )
}