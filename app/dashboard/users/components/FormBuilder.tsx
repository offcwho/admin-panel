'use client'
import Error from "@/lib/components/Error"
import Loading from "@/lib/components/_loading/Loading"
import useApi from "@/lib/hooks/useApi"
import { useForm } from "@/lib/hooks/useForm"
import { useEffect, useState } from "react"

export function Add() { return (<></>) }
export function Edit({ params }: { params: string }) {
    const { form, group, textInput } = useForm({ params: params, link: `/api/user/update` });
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                textInput({ name: 'email', placeholder: 'Type email', label: 'E-mail' }),
            ], {className: 'flex gap-6'})
        ], {})
    )
}