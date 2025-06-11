'use client'

import Section from "@/lib/components/_dashboard/components/Section"
import styles from './page.module.scss'
import TableBuilder from "./components/TableBuilder"

export default function Page() {
    return (
        <div className={styles.root}>
            <Section> 
                <TableBuilder/>
            </Section>
        </div>
    )
}