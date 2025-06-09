'use client'

import { useAuth } from "@/lib/context/AuthContext"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Page(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [error, setError] = useState('')
    const router = useRouter()

    const { user, register, loading} = useAuth()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await register(name, email, password, passwordConfirm)
            router.push('/dashboard')
        } catch (err) {
            setError("reg failt")
        }
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <button type="submit">asdasd</button>
        </form>
    )
}