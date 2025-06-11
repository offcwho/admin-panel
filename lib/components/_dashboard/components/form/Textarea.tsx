import styles from './formComponents.module.scss'
export default function Textarea({
    value,
    name,
    onChange,
    label,
    placeholder
}: {
    placeholder?: string,
    label?: string,
    value: string,
    name: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}) {
    return (
        <div className={styles.root}>
            {label ? <label>{label}</label> : ''}
            <textarea
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={styles.root__textarea}
            ></textarea>
        </div>
    )
}