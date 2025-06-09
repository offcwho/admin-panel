'use client'

import { useAuth } from "@/lib/context/AuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const route = useRouter()

  const { user, loading } = useAuth()

  route.push('/login')
}