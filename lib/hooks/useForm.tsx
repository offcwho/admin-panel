import { useState } from "react";
import TextInput from "../components/_dashboard/components/formComponents/TextInput"
import FormGroup from "../components/_dashboard/components/FormGroup";
import useApi from "./useApi";
import Textarea from "../components/_dashboard/components/formComponents/Textarea";
import FileInput from "../components/_dashboard/components/formComponents/FileInput";
import FormButton from "../components/_dashboard/components/formComponents/FormButton";

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

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }
    const form = (children: React.ReactNode[], { gap, cols }: { gap?: number, cols?: number }) => {
        return (
            <form onSubmit={handleSubmit} className={`grid gap-${gap} grid-cols-${cols}`}>
                <>
                    {children}
                </>
                <FormButton/>
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
                name={name}
                label={label}
                placeholder={placeholder}
                value={values[name] || ''}
                onChange={handleChange(name)}
            />
        )
    }
    const textArea = ({
        name,
        placeholder,
        label,
    }: {
        name: string,
        placeholder?: string,
        label?: string
        type?: string
    }) => {
        return <Textarea
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={values[name] || ''}
            onChange={handleChange(name)}
        />
    }
    const fileInput = ({
        name,
        placeholder,
        label,
    }: {
        name: string,
        placeholder?: string,
        label?: string,
    }) => {
        console.log(values[name])
        return <FileInput 
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={values[name] || ''}
            onChange={handleChange(name)}
        />
    }
    return ({ form, group, textInput, textArea, fileInput, values })
}