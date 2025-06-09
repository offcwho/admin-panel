import styles from '../styles/formgroup.module.scss'
export default function FormGroup({ children }: { children: React.ReactNode }) { return <div className={styles.root}>{children}</div> }