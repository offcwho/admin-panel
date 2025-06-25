import useTable from "@/lib/hooks/useTable";

export default function TableBuilder() {
    const { table, image, title, description } = useTable('news/get', [
        'Название',
        'Описание',
        'Изображение'
    ], { page: 'news' })


    return table((item) => [
        title(item['name']),
        description(item['description']),
        image(item['image'], { rounded: true})
    ])
}