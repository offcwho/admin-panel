'use client'

import Loading from "@/lib/components/Loading";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const route = useRouter()

  const { user, loading } = useAuth()

  
}