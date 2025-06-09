'use client'

import { FormEvent } from "react"
import FormButton from "./FormButton"
import styles from '../styles/form.module.scss'

export default function Form({ children, handleSubmit }: { children: React.ReactNode, handleSubmit?: FormEvent<Element> }) {

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.root}>
                {children}
            </div>
            <FormButton />
        </form>
    )
}