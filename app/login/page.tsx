'use client'

import { useAuth } from "@/lib/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react"
import styles from './login.module.scss'
import Loading from "@/lib/components/_loading/Loading";
import LoaderSpec from "@/lib/components/_loaderSpec/LoaderSpec";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [num, setNum] = useState(0)

    const { user, login, loading } = useAuth()
    const router = useRouter();

    useEffect(() => {
        if (user) {
            redirect('/dashboard')
        }
    }, [user])

    if (loading) return <Loading />

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setDisabled(true)
        setNum(randomNumberInRange())
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

    function randomNumberInRange() {
        return Math.floor(Math.random() * (100 - 0 + 1)) + 1;
    }

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
                    <LoaderSpec/>
                    {disabled ? (
                        <>
                            {num < 99 ? 'загрузка' : 'Вотч демо, вотч демо'}
                        </>) : 'Войти'}
                </button>
            </form>
        </section>
    )
}
