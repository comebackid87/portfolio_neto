import { Container } from 'reactstrap'
import Head from 'next/head'

const BasePage = props => {
    
    const { className = '', indexPage, header, title="Portfolio - Samm Neto", children } = props

    const pageType = indexPage ? 'index-page' : 'base-page'

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" key="description" content="Samm Neto, a Software Engineer based in the United Kingdom with several years of experience in building full stack applications software and working on projects ranging from C# development for large-scale, corporate business applications to smaller-scale, modern mobile and web applications." />
            </Head>
            <div className={`${pageType} ${className}`}>
                <Container>
                    {
                        header &&
                        <div className="page-header">
                            <h1 className="page-header-title">{header}</h1>
                        </div>
                    }
                    { children }
                </Container>
            </div>
        </>
    )
}

export default BasePage