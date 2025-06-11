'use client'

import Loading from "@/lib/components/_loading/Loading"
import { useAuth } from "@/lib/context/AuthContext"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const { user, loading } = useAuth()

  useEffect(() => {
    redirect('/login')
  }, [user])
  if (loading) return <Loading />
}