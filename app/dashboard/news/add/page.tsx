import { Add } from "../components/FormBuilder";
import styles from '../page.module.scss'

export default function Page() {
    return (
        <div className={styles.root}>
            <div className={styles.root__formPage}>
                <Add />
            </div>
        </div>
    )
}