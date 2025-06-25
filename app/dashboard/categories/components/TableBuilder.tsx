import Loading from "@/lib/components/_loading/Loading";
import useTable from "@/lib/hooks/useTable";

export default function TableBuilder() {
    const { table, column, title } = useTable(
        'categories',
        [
            'Id',
            'Название категории'
        ],
        { page: 'categories' }
    )
    return table((item) => [
        column(item['id']),
        title(item['name'])
    ])
}