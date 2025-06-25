'use client'

import { useForm } from "@/lib/hooks/useForm"

export function Add() {

    const { form, group, textInput, fileInput } = useForm({ link: `/api/news/post` });
    return (
        form([
            group([
                group([
                    textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                    textInput({ name: 'description', placeholder: 'Type description', label: 'Description' }),
                ], { className: 'grid-cols-2 gap-6', name: 'group-1' }),
                fileInput({ name: 'image' })
            ], { className: 'col-span-3 gap-6', name: 'group-2' }),
        ], { className: 'grid-cols-3 gap-10' })
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
            ], { className: 'flex gap-6', name: 'group-3' }),
            group([
                toggle({ name: 'is_active', label: 'is active' })
            ], { name: 'group-4' })
        ], {})
    )
}