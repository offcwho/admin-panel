'use client'
import Error from "@/lib/components/Error"
import Loading from "@/lib/components/Loading"
import useApi from "@/lib/hooks/useApi"
import { useForm } from "@/lib/hooks/useForm"
import { useEffect, useState } from "react"

export function Add() { return (<></>) }
export function Edit({ params }: { params: string }) {
    const { loading, error } = useApi()
    const { form, group, textInput, textArea, fileInput } = useForm({ params: params, link: `/api/user/update` });

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                textInput({ name: 'email', placeholder: 'Type email', label: 'E-mail' }),
            ])
        ], {})
    )
}