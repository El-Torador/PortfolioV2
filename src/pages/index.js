import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import profilePic from '../../public/images/profile/torador-illustration.png'
import lightBlue from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · FullStack Developer</title>
        <meta name="description" content="ESIEA Graduate Student and Engineer. Talking about TypeScript, React, Node, Python and AWS." />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <section className="w-1/2 relative">
              {/* Make eye light in dark mode */}
              <div className="hidden absolute -z-10 bg-light px-20 xl:px-32 py-10 top-1/3 right-1/4 lg:inline-block" />
              <Image src={profilePic} alt="Torador" className="w-full h-auto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />
            </section>
            <section className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Engineering." className="!text-6xl !text-left" />
              <p className="my-4 text-base font-medium text-slate-700 dark:text-light">
                As a skilled full-stact developer, i am dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites and applications. I have a passion for writing clean, efficient, and accessible code that is easy to maintain and scale. I am a quick learner and a great team player who is always ready to take on new challenges and work with new technologies.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                   hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark transition-colors duration-300 ease-in-out
                    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-dark dark:hover:border-light"
                  download
                >
                  Resume <LinkArrow className="!w-6 !h-6 ml-1" />
                </Link>
                <Link
                  href="mailto:kagmeni77@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >Contact</Link>
              </div>
            </section>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBlue} alt="Mind Idea Innovation." className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
