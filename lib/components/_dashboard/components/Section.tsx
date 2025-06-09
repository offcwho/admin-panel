import styles from '../styles/section.module.scss'
export default function Section({ children }: { children: React.ReactNode }) { return <div className={styles.root}>{children}</div> }