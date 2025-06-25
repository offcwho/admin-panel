import { useEffect } from "react"
import styles from '../styles/useTable.module.scss'
import ColumnHeader from "../components/_dashboard/components/table/ColumnHeader"
import Table from "../components/_dashboard/components/table/Table"
import TableGroup from "../components/_dashboard/components/table/TableGroup"
import TableHeader from "../components/_dashboard/components/table/TableHeader"
import useApi from "./useApi"
import TableRow from "../components/_dashboard/components/table/TableRow"
import TableCell from "../components/_dashboard/components/table/TableCell"
import { AnimatePresence, motion } from "framer-motion"
import Loading from "../components/_loading/Loading"

export default function useTable(url: string, names: string[], { page }: { page: string }) {
    const { get, data, loading } = useApi();

    useEffect(() => {
        get(`/api/${url}`)
    }, [])

    const table = (renderRow: (item: any) => React.ReactNode[]) => {
        if (loading) return <Loading />

        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Table>
                        <TableHeader edit>
                            {names.map((name, index) => (
                                <ColumnHeader key={index}>{name}</ColumnHeader>
                            ))}
                        </TableHeader>
                        <TableGroup>
                            {data.map(item => (
                                <TableRow edit={item.id} key={item.id} pageName={page}>
                                    {renderRow(item)}
                                </TableRow>
                            ))}
                        </TableGroup>
                    </Table>
                </motion.div>
            </AnimatePresence>
        )
    }
    const image = (content: string, { rounded }: { rounded?: boolean }) => {
        return (
            <TableCell key={content}>
                <div className={styles.root}>
                    <img
                        src={content}
                        alt={`Изображение`}
                        className={`${styles.root__image} ${rounded && styles.root__rounded}`}
                    />
                </div>
            </TableCell>
        )
    }
    const title = (content: string) => {
        return (
            <TableCell key={content}>
                <div className={styles.root}>
                    <h3>{content}</h3>
                </div>
            </TableCell>
        )
    }
    const description = (content: string) => {
        return (
            <TableCell key={content}>
                <div className={styles.root}>
                    <p>{content}</p>
                </div>
            </TableCell>
        )
    }
    const column = (content: string) => {
        return(
            <TableCell key={content}>
                <span>{content}</span>
            </TableCell>
        )
    }
    return { table, image, title, description, column }
}