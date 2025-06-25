'use client'

import { useEffect, useState, useRef } from "react"
import api from "@/lib/api/api"
import { ChevronDown, Check } from "lucide-react"
import styles from './formComponents.module.scss'

type Option = {
    id: number
    name: string
}

export default function CustomSelect({
    name,
    label,
    value,
    onChange,
    url,
    title,
    className = ""
}: {
    name: string
    label?: string
    value: number | string
    onChange: (value: number | string) => void
    url: string
    title: string
    className?: string
}) {
    const [options, setOptions] = useState<Option[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const selectRef = useRef<HTMLDivElement>(null)

    // Загрузка опций
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await api.get(url)
                setOptions(response.data)
            } catch (error) {
                console.error("Error fetching options:", error)
            }
        }
        fetchOptions()
    }, [url])

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Фильтрация опций
    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Получение выбранного значения
    const selectedOption = options.find(option => option.id === value)

    return (
        <div className={`relative ${className} ${styles.root}`} ref={selectRef}>
            {label && (
                <label htmlFor={name} className={styles.root__label}>
                    {label}
                </label>
            )}

            <div className="relative">
                {/* Кастомный триггер */}
                <button
                    type="button"
                    className={styles.root__selectButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <span className={`truncate ${selectedOption && styles.root__selectSelected}`}>
                        {selectedOption ? selectedOption.name : title}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
                </button>

                {/* Выпадающий список */}
                {isOpen && (
                    <div className={styles.root__select}>
                        {/* Поиск */}
                        <div className={styles.root__SearchContainer}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={styles.root__selectSearch}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </div>

                        {/* Список опций */}
                        <ul
                            role="listbox"
                            className={styles.root__selectList}
                        >
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li
                                        key={option.id}
                                        className={`${styles.root__selectItem} ${value === option.id && styles.root__selectItemSelected}`}
                                        onClick={() => {
                                            onChange(option.id)
                                            setIsOpen(false)
                                            setSearchTerm("")
                                        }}
                                    >
                                        <span>{option.name}</span>
                                        {value === option.id && <Check className="h-4 w-4 text-blue-600" />}
                                    </li>
                                ))
                            ) : (
                                <li className="px-3 py-2 text-gray-500">No options found</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            {/* Скрытый нативный select для форм */}
            <select
                name={name}
                value={value}
                onChange={() => { }} // Пустая функция, обработка через кастомный интерфейс
                className="hidden"
            >
                <option value="">{title}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}