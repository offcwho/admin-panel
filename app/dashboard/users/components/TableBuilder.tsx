import ColumnHeader from "@/lib/components/_dashboard/components/ColumnHeader";
import TableCell from "@/lib/components/_dashboard/components/TableCell";
import TableGroup from "@/lib/components/_dashboard/components/TableGroup";
import TableHeader from "@/lib/components/_dashboard/components/TableHeader";
import TableRow from "@/lib/components/_dashboard/components/TableRow";
import useTable from "@/lib/hooks/useTable";

export default function TableBuilder({ data, pageName }: { data: Record<string, string>[], pageName: string }) {
    const { table } = useTable('api/users')
    return table('id', 'name', 'email')
}