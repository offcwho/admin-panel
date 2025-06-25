'use client'
import { useParams } from "next/navigation";
import { Edit } from "../components/FormBuilder";
import styles from '../page.module.scss'

export default function Page() {
    const params = useParams()

    const id = params.id as string

    return (
        <div className={styles.root}>
            <Edit params={id} />
        </div>
    )
}