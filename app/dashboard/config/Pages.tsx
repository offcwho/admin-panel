'use client'
import usePages from "@/lib/hooks/usePages/usePages"

export default function Pages() {
    const { item, accordion, pages } = usePages()
    return pages([
        item('users'),
        item('products'),
        item('categories'),
        item('news')
    ])
}