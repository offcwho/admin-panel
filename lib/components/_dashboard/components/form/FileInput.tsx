import Image from 'next/image'
import styles from './formComponents.module.scss'

export default function FileInput({
    label,
    onChange,
    value,
    name,
    placeholder,
}: {
    placeholder?: string,
    label?: string,
    value: string,
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <div className={styles.root}>
            {label ? <label>{label}</label> : ''}
            <input
                type="file"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.root__fileInput}
            />
        </div>
    )
}