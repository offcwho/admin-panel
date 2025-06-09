'use client'
import Error from "@/lib/components/Error"
import Loading from "@/lib/components/Loading"
import useApi from "@/lib/hooks/useApi"
import { Form, useForm } from "@/lib/hooks/useForm"
import { FormEvent, useEffect, useState } from "react"

interface Props {
    name: string
    email: string
}

export function Add() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Form>
            <TextInput value={name} onChange={setName} label="Name" placeholder="Name" />
            <TextInput value={email} onChange={setEmail} label="E-mail" placeholder="E-mail" />
        </Form>
    )
}
export function Edit({ params }: { params: string }) {
    const { get, data, post, loading, error } = useApi()
    const { form, group, textInput, values } = useForm();

    //input useStates
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        //Ссылка
        get(`/api/users/${params}`)
        //Обновить useStates
    }, [])
    useEffect(() => {
        setName(data.name)
        setEmail(data.email)
    }, [data])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const link = `/api/user/update`
        post(values, `/api/user/update`, params)
    }

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    const qwe = 'asd'
    return form(
        <>
            {group(
                [
                    textInput({ name: 'Name', placeholder: 'assd', label: 'asd' }),
                    textInput({ name: 'Email', placeholder: 'qweqwe', label: 'E-mail' })
                ]
            )}
            <button type="submit" onClick={handleSubmit}>asdas</button>
        </>
    )
}