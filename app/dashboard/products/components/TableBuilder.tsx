import Loading from "@/lib/components/_loading/Loading";
import useTable from "@/lib/hooks/useTable";

export default function TableBuilder() {
    const { table, image, title, description, column } = useTable(
        'products',
        [
            'Id',
            'Название',
            'Описание',
            'Картинка'
        ],
        { page: 'products' }
    )

    return table((item) => [
        column(item['id']),
        title(item['name']),
        description(item['description']),
        image(item['image'], { rounded: true })
    ])
}