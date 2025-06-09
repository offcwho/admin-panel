import styles from './loading.module.scss'
export default function Loading(){
    return <div className={styles.root}>
        <span className={styles.root__loader}></span>
    </div>
}