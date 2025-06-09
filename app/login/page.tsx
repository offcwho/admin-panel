'use client'

import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react"
import styles from './login.module.scss'

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)

    const { user, login, loading } = useAuth()
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/dashboard')
        }
    }, [user, router])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setDisabled(true)
        try {
            await login(email, password)
        } catch (err) {
            setError('Неверные данные')
            setDisabled(false)
        } finally {
            setDisabled(false)
            setEmail('')
            setPassword('')
            router.push('/dashboard')
        }
    }
    if (loading) return <div className="">Loading...</div>

    return (
        <section className={styles.root}>
            <form action="" onSubmit={handleSubmit} className={styles.root__form}>
                <h1 className={styles.root__title}>Войти</h1>
                <div className={styles.root__blockInput}>
                    <label
                        htmlFor=""
                        className={styles.root__label}
                    >
                        E-mail
                    </label>
                    <input
                        type="text"
                        className={styles.root__input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourmail@gmail.com"
                    />
                </div>
                <div className={styles.root__blockInput}>
                    <label
                        htmlFor=""
                        className={styles.root__label}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className={styles.root__input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </div>
                <button type='submit' className={styles.root__button} disabled={disabled}>
                    {disabled ? 'Загрузка' : 'Войти'}
                </button>
            </form>
        </section>
    )
}
