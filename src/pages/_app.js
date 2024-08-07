import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/theme-context'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <ThemeProvider>
        <main className={`${montserrat.variable} font-montserrat bg-light dark:bg-dark w-full min-h-screen`}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main >
      </ThemeProvider>
    </>
  )
}
