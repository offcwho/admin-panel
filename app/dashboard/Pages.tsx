'use client'
import usePages from "@/lib/hooks/usePages/usePages"

export default function Pages() {
    const { item, accordion, pages } = usePages()
    return pages([
        item('users'),
        accordion([
            item(`userss`),
            item(`data`)
        ], 'userss'),
        accordion([
            item(`posts`),
            item(`messages`)
        ], 'qwe'),
        accordion([
            item(`support`),
            item(`etc`)
        ], 'rew'),
        accordion([
            item(`etc`),
            item(`etc`)
        ], 'ete'),
        accordion([
            item(`etc`),
            item(`etc`)
        ], 'poi'),
    ])
}