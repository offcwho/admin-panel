import Loading from "@/lib/components/_loading/Loading";
import useTable from "@/lib/hooks/useTable";

export default function TableBuilder() {
    const { table, loading } = useTable('users')
    if (loading) return <Loading />
    return table('id', 'name', 'email')
}