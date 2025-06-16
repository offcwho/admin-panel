'use client'

import { useForm } from "@/lib/hooks/useForm"

export function Add() { return (<></>) }
export function Edit({ params }: { params: string }) {
    const { form, group, textInput, toggle, fileInput } = useForm({ params: params, link: `/api/user/update` });
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                textInput({ name: 'email', placeholder: 'Type email', label: 'E-mail' }),
            ], { className: 'flex gap-6' }),
            group([
                toggle({ name: 'is_active', label: 'is active' }),
                fileInput({ name: 'image' })
            ], {})
        ], {})
    )
}