import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Poketdex</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
