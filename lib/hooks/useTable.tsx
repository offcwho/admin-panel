import { useEffect } from "react"
import ColumnHeader from "../components/_dashboard/components/table/ColumnHeader"
import Table from "../components/_dashboard/components/table/Table"
import TableGroup from "../components/_dashboard/components/table/TableGroup"
import TableHeader from "../components/_dashboard/components/table/TableHeader"
import useApi from "./useApi"
import TableRow from "../components/_dashboard/components/table/TableRow"
import TableCell from "../components/_dashboard/components/table/TableCell"
import { AnimatePresence, motion } from "framer-motion"

export default function useTable(pageName: string) {
    const { get, data, loading } = useApi();

    useEffect(() => {
        get(`/api/${pageName}`)
    }, [])
    const table = (...names: string[]) => {
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
                            {names ?
                                names.map((name, index) => (
                                    <ColumnHeader key={index}>{name}</ColumnHeader>
                                )) : ''}
                        </TableHeader>
                        <TableGroup>
                            {data.map(item => (
                                <TableRow edit={item.id} key={item.id} pageName={pageName}>
                                    {names ?
                                        names.map(name => (
                                            <TableCell key={item[name]}>{item[name]}</TableCell>
                                        )) : ''
                                    }
                                </TableRow>
                            ))}
                        </TableGroup>
                    </Table>
                </motion.div>
            </AnimatePresence>
        )
    }
    return { table, loading }
}