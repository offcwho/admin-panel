'use client'

import Section from "@/lib/components/_dashboard/components/Section"
import { useEffect } from "react"
import styles from './page.module.scss'
import TableBuilder from "./components/TableBuilder"
import useApi from "@/lib/hooks/useApi"
import Loading from "@/lib/components/Loading"
import Error from "@/lib/components/Error"
import Table from "@/lib/components/_dashboard/components/Table"

export default function Page() {
    const { get, data, loading, error } = useApi()

    useEffect(() => { get('/api/users') }, [])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    return (
        <div className={styles.root}>
            <Section> 
                <TableBuilder data={data} pageName={`users`} />
            </Section>
        </div>
    )
}