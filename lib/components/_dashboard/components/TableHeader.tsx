import ColumnHeader from "./ColumnHeader";
import TableGroup from "./TableGroup";
import TableRow from "./TableRow";

export default function TableHeader({ children, edit }: { children: React.ReactNode, edit?: boolean }) {
    return (
        <TableGroup>
            <TableRow header>
                {children}
                {edit ? <ColumnHeader> </ColumnHeader> : ''}
            </TableRow>
        </TableGroup>
    )
}