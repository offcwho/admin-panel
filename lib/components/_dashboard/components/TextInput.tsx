'use client'

import styles from '../styles/textinput.module.scss'

export default function TextInput({ 
    label, 
    onChange, 
    value, 
    name, 
    placeholder,
    type
}: { 
    placeholder?: string, 
    label?: string, 
    value: string, 
    name: string, 
    onChange: React.ChangeEventHandler<HTMLInputElement> 
    type: string
}) {
    return (
        <div className={styles.root}>
            {label ? <label>{label}</label> : ''}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.root__input}
            />
        </div>
    )
}