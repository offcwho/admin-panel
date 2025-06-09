import { Edit } from "../components/FormBuilder";
import styles from '../page.module.scss'
interface PageProps {
    params: {
        id: string;
    };
}
export default function Page({ params }: PageProps) {
    return (
        <div className={styles.root}>
            <Edit params={params.id} />
        </div>
    )
}