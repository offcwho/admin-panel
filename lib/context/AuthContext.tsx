'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import api from "../api/api"
import { redirect, useRouter } from "next/navigation"


interface User {
    id: number
    name: string
    email: string
    username: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>
    loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUser() {
            try {
                const token = Cookies.get('auth_token')
                if (token) {
                    const response = await api.get('/api/user')
                    setUser(response.data)
                }
            } catch (error) {
                console.error('Failed to load user', error)
            } finally {
                setLoading(false)
            }
        }
        loadUser()
        console.log(user)
    }, [])

    const login = async (email: string, password: string) => {
        try {
            await api.get('/sanctum/csrf-cookie', {
                withCredentials: true,
            })

            const response = await api.post(
                '/api/login',
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
            Cookies.set('auth_token', response.data.access_token)

            const userResponse = await api.get('/api/user')
            setUser(userResponse.data)
        } catch (error) {
            console.error('Login failed', error)
            throw error
        }
    }

    const logout = async () => {
        try {
            await api.post('/api/logout')
            Cookies.remove('auth_token')
            setUser(null)
            
        } catch (error) {
            console.log(error)
            throw error
        }
        redirect('/login')
    }

    const register = async (name: string, email: string, password: string, password_confirmation: string) => {
        try {
            await api.get('/sanctum/csrf-cookie')

            const response = await api.post('/api/register', { name, email, password, password_confirmation })
            Cookies.set('auth_token', response.data.access_token)

            const userResponse = await api.get('/api/user')
            setUser(userResponse.data)
        } catch (error) {
            console.error('Register failed', error)
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}