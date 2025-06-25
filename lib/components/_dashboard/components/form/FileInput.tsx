import styles from './formComponents.module.scss'
export default function FileInput({
    label,
    name,
    placeholder,
    onChange,
    value,
    progress,
    status
}: {
    placeholder?: string,
    label?: string,
    value?: {
        url: string,
        path: string
    },
    name: string,
    progress: number,
    status: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <div className={styles.root}>
            {label ? <label>{label}</label> : ''}
            <label htmlFor={name} className={styles.root__fileInputLabel}>
                {status === 'uploading' && (
                    <div className={styles.root__progress}>
                        <progress value={progress} max="100" />
                        <span>{progress}%</span>
                    </div>
                )}
                {value ? (
                    <>
                        <h3 className={styles.root__imageTitle}></h3>
                        <img
                            src={value.url}
                            alt='Изображение'
                            className={styles.root__image}
                        />
                    </>
                ) : 'Выберите изображение'}
            </label>
            <input
                type="file"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.root__fileInput}
                id={name}
            />

        </div>
    )
}