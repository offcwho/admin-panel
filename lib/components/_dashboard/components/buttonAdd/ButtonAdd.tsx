import { useRouter } from "next/navigation";
import styles from './buttonAdd.module.scss'

export default function ButtonAdd(pageName: { pageName: string }) {
    const router = useRouter()
    const link = () => {
        router.push(`/dashboard/${pageName.pageName}/add`)
    }
    return (
        <div className={styles.root}>
            <button className={styles.root__button} onClick={link}>Создать запись</button>
        </div>
    )
}