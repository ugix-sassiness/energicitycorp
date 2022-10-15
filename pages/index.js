import Head from 'next/head'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Impact from '@components/Impact'
import Footer from '@components/Footer'
import Jobs from '@components/Jobs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Energicity &#8211; Providing abundant, clean electricity to empower communities and enable households to thrive.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <main className="lg:relative">
        <Hero/>
        <Impact />
        <Jobs />
      </main>

      <Footer />
    </div>
  )
}
