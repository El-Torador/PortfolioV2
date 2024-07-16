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
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <section className="w-1/2 relative md:w-full">
              {/* Make eye light in dark mode */}
              <div className="lg:hidden absolute -z-10 bg-light px-20 xl:px-16 xl:py-7 py-10 top-[36%] right-1/4 md:inline-block sm:px-16 sm:py-5 xs:px-8 xs:py-6" />
              <Image src={profilePic} alt="Torador" className="w-full h-auto lg:hidden md:inline-block md:w-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />
            </section>
            <section className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Engineering." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <p className="my-4 text-base font-medium text-slate-700 dark:text-light md:text-sm sm:text-xs">
                As a skilled full-stact developer, i am dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites and applications. I have a passion for writing clean, efficient, and accessible code that is easy to maintain and scale. I am a quick learner and a great team player who is always ready to take on new challenges and work with new technologies.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/RESUME-JK.pdf"
                  target='_blank'
                  className="resume-btn"
                  download
                >
                  Resume <LinkArrow className="!w-6 !h-6 ml-1" />
                </Link>
                <Link
                  href="/CV-JK.pdf"
                  target='_blank'
                  className="cv-btn md:hidden"
                  download
                >
                  CV <LinkArrow className="!w-6 !h-6 ml-1" />
                </Link>
                <Link
                  href="/contact"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </section>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBlue} alt="Mind Idea Innovation." className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
