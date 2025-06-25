'use client'

import styles from './formComponents.module.scss'
import React from 'react';

export const TextInput = React.memo(({
    name,
    placeholder,
    label,
    type,
    value,
    onChange
}: {
    name: string;
    placeholder?: string;
    label?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className={styles.root}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type || 'text'}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.root__input}
            />
        </div>
    );
});