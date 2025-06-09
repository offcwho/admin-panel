import { SquarePen } from 'lucide-react'
import TableCell from './TableCell'
import { useRouter } from 'next/navigation'
export default function TableRow({ children, edit, header, pageName }: { children: React.ReactNode, edit?: string, header?: boolean, pageName?: string }) {
    const router = useRouter()
    const submit = () => { router.push(`/dashboard/${pageName}/${edit}`) }
    return (
        <div role="row" className={header ? `background` : ''}>
            {children}
            {edit ?
                <TableCell>
                    <button onClick={submit} className="edit">
                        Edit
                        <SquarePen size={18} />
                    </button>
                </TableCell> : ''}
        </div>
    )
}