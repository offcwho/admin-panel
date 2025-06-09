import { useState } from "react";
import TextInput from "../components/_dashboard/components/TextInput"
import FormGroup from "../components/_dashboard/components/FormGroup";
import useApi from "./useApi";

export function useForm({ params, link }: { params: string, link: string }) {
    const { post } = useApi()
    const [values, setValues] = useState<Record<string, string>>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await post({ values: values, link: link, params: params })
        } catch (error) {
            console.log('error')
        } finally {
            console.log('success')
        }
    }

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }
    const form = (children: React.ReactNode[], {gap, cols}: {gap?: number, cols?: number}) => {
        return (
            <form onSubmit={handleSubmit} className={`grid gap-${gap} grid-cols-${cols}`}>
                <>
                    {children}
                </>
                <button type="submit">asdas</button>
            </form>
        )
    }
    const group = (children: React.ReactNode[]) => {
        return <FormGroup><>{children}</></FormGroup>
    }
    const textInput = (
        {
            name,
            placeholder,
            label,
            type
        }: {
            name: string,
            placeholder?: string,
            label?: string
            type?: string
        }) => {
        return (
            <TextInput
                type={type || ''}
                key={name}
                placeholder={placeholder}
                name={name}
                label={label}
                value={values[name] || ''}
                onChange={handleChange(name)}
            />
        )
    }
    return ({ form, group, textInput, values })
}