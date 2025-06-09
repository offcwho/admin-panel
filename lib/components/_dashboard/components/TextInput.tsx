'use client'

import { SetStateAction } from "react"
import styles from '../styles/textinput.module.scss'

export default function TextInput({ label, onChange, value, name, placeholder }: { placeholder?: string, label?: string, value: string, name: string, onChange: React.ChangeEvent<HTMLInputElement> }) {
    return (
        <div className={styles.root}>
            {label ? <label>{label}</label> : ''}
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.root__input}
            />
        </div>
    )
}