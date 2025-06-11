'use client'

import { useAuth } from "@/lib/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../../_loading/Loading";

export default function Router({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            redirect('/login')
        } 
    }, [user])

    if(loading) return <Loading />

    return (
        <>
            {children}
        </>
    )
}