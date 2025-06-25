import { useCallback, useEffect, useState } from "react";
import { TextInput } from "../components/_dashboard/components/form/TextInput"
import FormGroup from "../components/_dashboard/components/formGroup/FormGroup";
import useApi from "./useApi";
import Textarea from "../components/_dashboard/components/form/Textarea";
import FileInput from "../components/_dashboard/components/form/FileInput";
import FormButton from "../components/_dashboard/components/form/FormButton";
import styles from '../../app/dashboard/users/page.module.scss';
import ToggleComponent from "../components/_dashboard/components/form/Toggle";
import api from "../api/api";
import { AxiosProgressEvent } from "axios";
import Select from "../components/_dashboard/components/form/Select";

export function useForm({ params, link }: { params?: string, link: string }) {
    const { post } = useApi()

    const [values, setValues] = useState<Record<string, any>>({})
    const [files, setFiles] = useState<{ url: string, path: string }>()
    const [progress, setProgress] = useState<number>(0)
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(values)
        try {
            await post({ values: values, link: link, params: params })
        } catch (error) {
            console.log('error')
        } finally {
            console.log('success')
        }
    }

    useEffect(() => {
        setValues(prev => ({
            ...prev,
            image: files?.url
        }))
    }, [files])

    const handleChange = useCallback((name: string) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValues(prev => ({
                ...prev,
                [name]: e.target.value
            }));
        }, []);
    const handleToggleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [name]: e.target.checked
        }))
    }
    const handleChangeSelect = (name: string, value: string | number) => {
        setValues(prev => ({
            ...prev,
            [name]: Number(value)
        }))
    }
    const handleUpload = () => async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0]

        if (!file) return

        const formData = new FormData();
        formData.append('image', file)
        formData.append('_method', 'POST');

        try {
            setUploadStatus('uploading')

            const response = await api.post('/api/upload/image', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.total) {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setProgress(percentCompleted)
                    }
                }
            });

            setUploadStatus('success')
            setFiles(response.data)
        } catch (error) {
            setUploadStatus('error')
            console.error('Uploaded file:', error)
        }
    }

    const form = (children: React.ReactNode[], { className }: { className?: string }) => {
        return (
            <>
                <form onSubmit={handleSubmit} className={`${className} ${styles.root__form}`}>
                    <>
                        {children}
                        <FormButton />
                    </>
                </form>
            </>
        )
    }
    const group = (children: React.ReactNode[], { className, name }: { className?: string, name: string }) => {

        return <FormGroup className={className} key={name}><>{children}</></FormGroup>
    }
    const textInput = useCallback((
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
    }, [values, handleChange])
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
        return <FileInput
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={files}
            onChange={handleUpload()}
            status={uploadStatus}
            progress={progress}
        />
    }
    const toggle = ({ name, label }: { name: string, label?: string }) => {
        return <ToggleComponent
            key={name}
            name={name}
            label={label}
            onChange={handleToggleChange(name)}
            checked={values[name] || false}
        />
    }
    const select = ({ name, label, url, title }: { name: string, label?: string, url: string, title: string }) => {
        return <Select
            key={name}
            name={name}
            label={label}
            value={values[name] || ''}
            onChange={(value) => handleChangeSelect(name, value)}
            url={url}
            title={title}
        />
    }
    return ({ form, group, textInput, textArea, fileInput, values, toggle, select })
}