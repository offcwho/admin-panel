export default function TableMap({ data, children }: {data: [], children: React.ReactNode}) {
    return (
        <>
            {
                data?.map(item => {
                    { children }
                })
            }
        </>
    )
}