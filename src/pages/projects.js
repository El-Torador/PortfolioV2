import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Tag from "@/components/tag";
import TransitionEffect from "@/components/TransitionEffect";
import DemineurImg from "../../public/images/projects/Demineur-light.png";
import DemineurImgDark from "../../public/images/projects/Demineur-dark.png"
import SurferImg from "../../public/images/projects/Surfer-light.png";
import SurferImgDark from "../../public/images/projects/Surfer-dark.png";
import communityProject from "../../public/images/projects/community.png";
import TysDataImg from "../../public/images/projects/TysData.png";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const FramerImage = motion(Image);

/**
 * FEATURED PROJECT COMPONENT
 * @param {{ type: string, title: string, summary: string, imgUrl: string, darkImgUrl?:string, link: string, github: string, skills: string[] }} props 
 * @returns {JSX.Element}
 */
const FeaturedProject = ({ type, title, summary, imgUrl, darkImgUrl, link, github, skills = [] }) => {
  const [mode] = useThemeSwitcher();
  return <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:text-light bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative">
    <div className="absolute top-0 -right-3 -z-10 w-[100.7%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
    <Link href={link} target="_blank" className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg">
      <FramerImage
        src={mode === 'light' ? imgUrl : darkImgUrl || imgUrl}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        priority
      />
    </Link>
    <div className="w-1/2 flex flex-col items-start justify-between pl-6">
      <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
      <Link href={link} target="_blank" className="hover:underline underline-offset-2">
        <h2 className="my-2 w-full text-left font-bold text-4xl">{title}</h2>
      </Link>
      <p className="my-2 font-medium text-dark">{summary}</p>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold hover:shadow transition-shadow">View Project</Link>
      </div>
      <ul className="flex flex-wrap mt-4 gap-2">
        {skills.map((tag, index) => <Tag key={index} tag={tag} />)}
      </ul>
    </div>
  </article>;
}

/**
 * PROJECT COMPONENT
 * @param {{ title: string, type: string, imgUrl: string, darkImgUrl?: string, link: string, github: string, skills: string[] }} props 
 * @returns {JSX.Element}
 */
const Project = ({ title, type, summary, imgUrl, darkImgUrl, link, github, skills = [] }) => {
  const [mode] = useThemeSwitcher();
  return <article className="relative bg-light dark:bg-dark rounded-3xl p-8 border border-solid border-dark dark:border-light dark:text-light min-h-full">
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
    <Link href={link} target="_blank" className="w- inline-block cursor-pointer overflow-hidden rounded-lg">
      <FramerImage
        src={mode === 'light' ? imgUrl : darkImgUrl || imgUrl}
        alt={title}
        className="w-full h-auto rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        priority
      />
    </Link>
    <div className="w-full flex flex-col items-start justify-between pl-6">
      <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
      <Link href={link} target="_blank" className="hover:underline underline-offset-2">
        <h2 className="my-2 w-full text-left font-bold text-3xl">{title}</h2>
      </Link>
      <p className="my-2 font-medium">{summary}</p>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold hover:shadow transition-shadow">View</Link>
      </div>
      <ul className="flex flex-wrap mt-4 gap-2">
        {skills.map((tag, index) => <Tag key={index} tag={tag} />)}
      </ul>
    </div>
  </article>
}

function projects() {
  return <>
    <Head>
      <title>Jordan Kagmeni · Projects Page</title>
      <meta name="description" content="ESIEA Graduate Student and Engineer. Talking about TypeScript, React, Node, Python and AWS." />
    </Head>
    <TransitionEffect />
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              imgUrl={SurferImg}
              darkImgUrl={SurferImgDark}
              title="Surfer"
              type="Featured Project"
              summary="Professional social network to publish articles based on interests, to follow people, to create Spaces Topics around a community."
              link="https://surfer.web.app"
              github="https://gitlab.com/Torador/surfer"
              skills={["NextJS", "RecoilJS", "AdonisJS", "TypeScript", "PostgreSQL", "SSE", "TailwindCSS", "Machine Learning", "CI/CD", "Docker", "Scrum Methodology", "Dark Mode", "Leadership"]}
            />
          </div>
          <div className="col-span-6">
            <Project
              imgUrl={communityProject}
              title="Torador Community"
              type="Side Project"
              link="https://torador-community.vercel.app"
              github="https://github.com/El-Torador/torador-community"
              summary="Web Application based on communication channels like Slack to exchange text or voice messages, videos, photos, and files. It also includes vocal recognition with transcription and emojis."
              skills={["Angular", "RxJS", "ExpressJS", "TypeScript", "ArangoDB", "Socket.io", "WebRTC", "SpeechRecognition", "Clean Architecture"]}
            />
          </div>

          <div className="col-span-6">
            <Project
              imgUrl={DemineurImg}
              darkImgUrl={DemineurImgDark}
              title="Demineur"
              type="School Project"
              link="https://demineur-game-torador.web.app"
              github="https://gitlab.esiea.fr/kagmeni/intech-javascript-kagmeni-laoudi"
              summary="Minesweeper Games consisting of 03 levels of difficulty and timed by player game. The player can pause and resume the game later."
              skills={["Algorithms", "JavaScript", "HTML", "CSS", "Dark Mode", "Responsive Design", "Animation"]}
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              imgUrl={TysDataImg}
              title="Azatys Platform"
              type="FreeLance Project"
              summary="Platform for monitoring digital indicators (website, social networks, etc.), enabling companies to make decisions based on their data and traffic."
              link="https://app.azatys.fr"
              github=""
              skills={["React", "Redux", "TailwindCSS", "Python", "Flask", "AWS Amplify", "AWS Lambda", "Tour-Guide", "Stripe", "CI/CD", "Scrum Methodology"]}
            />
          </div>

          {/* <div className="col-span-6">
            Project 3
          </div>
          <div className="col-span-6">
            Project 4
          </div> */}
        </div>
      </Layout>
    </main>
  </>;
}

export default projects;
