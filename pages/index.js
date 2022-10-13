import Head from 'next/head'
import Hero from '@components/Hero'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Energicity &#8211; Providing abundant, clean electricity to empower communities and enable households to thrive.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
      </main>

      <Footer />
    </div>
  )
}
