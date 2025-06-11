'use client'

import { useAuth } from '@/lib/context/AuthContext'
import styles from './styles/welcome.module.scss'
import Loading from '../_loading/Loading'
import { useRouter } from 'next/navigation'

export default function Welcome() {
    const { user } = useAuth()
    return (
        <div className={styles.root}>
            <h1 className={styles.root__title}>Welcome, {user?.name}!</h1>
        </div>
    )
}