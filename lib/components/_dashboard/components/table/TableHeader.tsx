import ColumnHeader from "./ColumnHeader";
import TableGroup from "./TableGroup";

export default function TableHeader({ children, edit }: { children: React.ReactNode, edit?: boolean }) {
    return (
        <TableGroup>
            <div role="row">
                {children}
                {edit ? <ColumnHeader> </ColumnHeader> : ''}
            </div>
        </TableGroup>
    )
}