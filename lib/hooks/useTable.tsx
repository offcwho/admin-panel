import { useEffect } from "react"
import ColumnHeader from "../components/_dashboard/components/ColumnHeader"
import Table from "../components/_dashboard/components/Table"
import TableGroup from "../components/_dashboard/components/TableGroup"
import TableHeader from "../components/_dashboard/components/TableHeader"
import useApi from "./useApi"
import TableRow from "../components/_dashboard/components/TableRow"
import TableCell from "../components/_dashboard/components/TableCell"
import Loading from "../components/Loading"

export default function useTable(api_link: string) {
    const { get, data } = useApi();

    useEffect(() => {
        get(api_link)
    }, [])

    const table = (...names: string[]) => {
        return (
            <Table>
                <TableHeader edit>
                    {names ?
                        names.map((name, index) => (
                            <ColumnHeader key={index}>{name}</ColumnHeader>
                        )) : ''}
                </TableHeader>
                <TableGroup>
                    <>
                        {
                            data.map(item => (
                                <TableRow edit={item.id} key={item.id} pageName='users'>

                                    {names ?
                                        names.map(name => (
                                            <TableCell key={item[name]}>{item[name]}</TableCell>
                                        ))
                                        : ''}
                                </TableRow>
                            ))
                        }
                    </>
                </TableGroup>
            </Table>
        )
    }
    return { table }
}