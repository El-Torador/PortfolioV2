import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from '../../public/images/profile/Torador.jpg'

function about() {
  return (<>
    <Head>
      <title>Jordan Kagmeni · About Page</title>
      <meta name="description" content="ESIEA Graduate Student and Engineer. Talking about TypeScript, React, Node, Python and AWS." />
    </Head>
    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="page-title" />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <section className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-semibold uppercase text-dark/75 dark:text-light/75">Biography</h2>
            <p className="font-medium">
              Hi, I&apos;m Jordan KAGMENI, a fullstack developer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
              new and innovative ways to bring my clients&apos; visions to life.
            </p>
            <p className="my-4 font-medium">
              I believe that design is about more than just making things look pretty - it&apos;s about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or
              other digital product, I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </section>

          <section className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePic}
              alt="Jordan Kagmeni"
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </section>

          <section className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied employers</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={30} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects completed</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
            </div>
          </section>
        </div>

        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  </>
  );
}

export default about;
