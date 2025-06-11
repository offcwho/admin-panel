'use client'

import { useAuth } from "@/lib/context/AuthContext"
import { LogOut } from 'lucide-react'
import styles from './header.module.scss'
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Header() {
    const { logout, user } = useAuth()
    const router = useRouter()

    const handleClick = () => {
        logout()
    }

    return (
        <header className={styles.root}>
            <Link href={'/dashboard'} className={styles.root__title}>Dashboard</Link>
            <button className={styles.root__button} onClick={handleClick}>
                <LogOut />
            </button>
        </header>
    )
}