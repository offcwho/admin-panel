'use client'

import styles from './sidebar.module.scss';
import Pages from "@/app/dashboard/config/Pages";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface links {
    links: [
        link: string,
        name: string
    ]
}

export default function Sidebar() {
    return (
        <nav className={styles.root}>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <Pages />
            </SimpleBar>
        </nav>
    )
}