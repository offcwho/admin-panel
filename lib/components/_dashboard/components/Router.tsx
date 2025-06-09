'use client'

import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "../../Loading";

export default function Router({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()

    if (loading) return <Loading />
    if (!user) {
        router.push('/login')
    }
    if (user) {
        return (
            <>
                {children}
            </>
        )
    }
}