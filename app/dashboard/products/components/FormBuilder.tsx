'use client'

import { useForm } from "@/lib/hooks/useForm"

export function Add() {

    const { form, group, textInput, toggle, fileInput, select } = useForm({ link: `/api/products/add` });
    return (
        form([
            group([
                group([
                    textInput({ name: 'name', placeholder: 'Type name', label: 'Name' }),
                    textInput({ name: 'descrption', placeholder: 'Type description', label: 'Description' }),
                ], { className: 'grid-cols-2 gap-6', name: 'group-1' }),
                fileInput({ name: 'image' })
            ], { className: 'col-span-2 gap-6', name: 'group-2' }),
            group([
                select({ name: 'category_id', url: '/api/categories', title: 'Select Category', label: 'Выберите категорию' }),
                toggle({ name: 'is_active', label: 'is active' })
            ], { className: 'col-span-1', name: 'group-3' })
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
            ], { className: 'flex gap-6' }),
            group([
                toggle({ name: 'is_active', label: 'is active' })
            ], {})
        ], {})
    )
}