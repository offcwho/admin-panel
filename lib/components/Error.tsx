interface Error {
    message: string
}

export default function Error({error}: {error: Error}) {
    return (
        <>
            {error.message}
        </>
    )
}