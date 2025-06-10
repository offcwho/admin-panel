'use client'

import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Router({children}: {children: React.ReactNode}) {
    const { user } = useAuth()
    const router = useRouter()
    return (
        <>
            {children}
        </>
    )
}