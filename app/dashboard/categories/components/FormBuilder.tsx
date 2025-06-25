'use client'

import { useForm } from "@/lib/hooks/useForm"

export function Add() {

    const { form, group, textInput, toggle, fileInput, select } = useForm({ link: `/api/categories/post` });
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                textInput({ name: 'slug', placeholder: 'Type description', label: 'Slug' }),
            ], { className: 'flex gap-6' }),
        ], {})
    )
}
export function Edit({ params }: { params: string }) {
    const { form, group, textInput, toggle, fileInput } = useForm({ params: params, link: `/api/user/update` });
    return (
        form([
            group([
                textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                textInput({ name: 'descrption', placeholder: 'Type description', label: 'Description' }),
                fileInput({ name: 'image' })
            ], { className: 'flex gap-6' }),
            group([
                toggle({ name: 'is_active', label: 'is active' })
            ], {})
        ], {})
    )
}