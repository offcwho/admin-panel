import styles from './formComponents.module.scss'

export default function ToggleComponent({ onChange, name, label, checked }: { checked: boolean, onChange: React.ChangeEventHandler<HTMLInputElement>, name: string, label?: string }) {
    return (
        <div className={styles.root__switchContainer}>
            <span className={styles.root__label}>{label}</span>
            <input
                className={`${styles.root__toggle} ${styles.root__toggleIOS}`}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                id={name}
            />
            <label htmlFor={name} className={styles.root__toggleButton}></label>
        </div>
    )
}