import { useState } from "react";
import TextInput from "../components/_dashboard/components/TextInput"
import FormGroup from "../components/_dashboard/components/FormGroup";

interface InputConfig {
    name: string,
    label?: string,
    placeholder?: string,
}

export function Form({ inputs, group }: { inputs: InputConfig[], group: boolean[] }) {

    const [formData, setFormData] = useState<Record<string, string>>(
        inputs.reduce((acc, input) => ({ ...acc, [input.name]: '' }), {})
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    return (
        <>
            {inputs.map(input => (
                <TextInput
                    key={input.name} // Используем имя как ключ (оно должно быть уникальным)
                    placeholder={input.placeholder}
                    name={input.name}
                    label={input.label}
                    value={formData[input.name] || ''} // Используем соответствующее поле из formData
                    onChange={handleChange}
                />
            ))}
        </>
    )
}
export function useForm() {

    const [values, setValues] = useState<Record<string, string>>({})

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }
    const form = (children: React.ReactNode) => {
        return (
            <form>
                {children}
            </form>
        )
    }
    const group = (children: Element[]) => {
        return <FormGroup>{children}</FormGroup>
    }
    const textInput = (
        { 
            name, 
            placeholder, 
            label 
        }: { 
            name: string, 
            placeholder?: string, 
            label?: string 
        }) => {
        return (
            <TextInput
                key={name} // Используем имя как ключ (оно должно быть уникальным)
                placeholder={placeholder}
                name={name}
                label={label}
                value={values[name] || ''} // Используем соответствующее поле из formData
                onChange={handleChange(name)}
            />
        )
    }
    return ({ form, group, textInput, values })
}