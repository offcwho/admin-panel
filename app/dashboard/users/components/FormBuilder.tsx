'use client'
import Error from "@/lib/components/Error"
import Loading from "@/lib/components/Loading"
import useApi from "@/lib/hooks/useApi"
import { useForm } from "@/lib/hooks/useForm"
import { useEffect, useState } from "react"

export function Add() { return }
export function Edit({ params }: { params: string }) {
    const { get, data, loading, error } = useApi()
    const { form, group, textInput } = useForm({ params: params, link: `/api/user/update` });

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        get(`/api/users/${params}`)
    }, [])
    useEffect(() => {
        setName(data.name)
        setEmail(data.email)
    }, [data])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: name, label: 'Name' }),
                textInput({ name: 'email', placeholder: email, label: 'E-mail' })]
            ),
            group([
                textInput({name: 'qe'})
            ])
        ], {})
    )
}