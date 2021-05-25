import Link from 'next/link'

const Index = () => {
    return(
        <>
        <title>GitHub Pages test</title>
        <div>test page</div>
        <Link href="/linkSample">
            <a>link Sample Page</a>
        </Link>
        </>
    )
}

export default Index