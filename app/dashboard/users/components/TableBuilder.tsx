import ColumnHeader from "@/lib/components/_dashboard/components/ColumnHeader";
import TableCell from "@/lib/components/_dashboard/components/TableCell";
import TableGroup from "@/lib/components/_dashboard/components/TableGroup";
import TableHeader from "@/lib/components/_dashboard/components/TableHeader";
import TableRow from "@/lib/components/_dashboard/components/TableRow";

export default function TableBuilder({ data, pageName }: { data: never[], pageName: string }) {
    return (
        <>
            <TableHeader edit>
                <ColumnHeader>Id</ColumnHeader>
                <ColumnHeader>Name</ColumnHeader>
                <ColumnHeader>E-mail</ColumnHeader>
            </TableHeader>
            <TableGroup>
                {data?.map(item => (
                    <TableRow edit={item.id} key={item.id} pageName={pageName}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                    </TableRow>
                ))}
            </TableGroup>
        </>
    )
}