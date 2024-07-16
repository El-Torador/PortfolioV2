/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import AnimatedNumbers from "@/components/AnimatedNumbers";
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
            <p className="font-normal">
              Computer science is involved in several stages of my life. First of all, between my 6 and 12 years old, I'm a video game geek and my friends hated playing against me every time. Sometimes I pretended to be weak, but in the end, I always won them. Then, between the ages of 12 and 16, I continued playing in parallel with my studies. My father offered me my first computer as a reward after my award for the best student in mathematics at my high school (Manengouba High School in Cameroon) in the 3rd grade.<br /> I've always wondered how video games work, so I decided to start with them. I fall on several sites, including <b>Developpez.com and the site Du Zero</b>. I start learning things and after two months, I create my first <b>RPG game in C</b>, and that's where my passion for computing starts to take off.
            </p>
            <p className="my-4 font-normal">
              After getting my bachelor's degree, my parents decide to enroll me in physics school (a field I also love) for financial troubles where I'm a year old and I learn so much while discovering other computer enthusiasts like me. After this year, I take an entrance contest to an <b>IAI (African Institute of Computer Science)</b> computer engineering school that I obtain and thanks to the sacrifices of my parents and older sisters, I manage to get closer to my dream of being in computer science and practising my passion.<br /> Today, I am an expert in software engineering and I am able to intervene throughout the technical and managerial chain of software construction thanks to my 3 years of training at <b>IAI and ESIEA</b> and my experience accumulated in my different achievements and learning missions.
            </p>
            <p className="font-normal">

              When I don't program, I do a lot of different things like sports (muscle training, basketball, boxing, running...), reading, tutoring (algorithm & programming, mathematics, physics) and even karaoke. I also discover new things. Right now, I'm immersed in economics and astronomy while learning how to play the guitar.
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
                <AnimatedNumbers value={new Date().getFullYear() - 2019} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
            </div>
          </section>
        </div>
        <div className="grid xl:grid-cols-1 grid-cols-2">
          <Experience />
          <Education />
        </div>
      </Layout>
    </main>
  </>
  );
}

export default about;
