'use client'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import '@/styles/global.css'

// export const metadata = {
//     title: 'Next App Promtopia',
//     description: 'Discover and share AI prompt '
// }

type Props = {
    children: React.ReactNode
}
function Layout({ children }: Props) {

    return (
        <html>
            <head>
                <title>Promtopia</title>
                <meta name="title" content="Promtopia"/>
                <meta name="description" content="Discover and share AI prompt"/>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default Layout