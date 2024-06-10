import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import vpcMongoArticle from "../../public/images/articles/article1.jpeg";
import roleOfTechnology from "../../public/images/articles/article2.jpg";
import resilienceImage from "../../public/images/articles/resilience.png";
import leadershipImage from "../../public/images/articles/leadership.webp";
import perfectionnisteImage from "../../public/images/articles/perfectionniste.webp";
import optimisationbd from "../../public/images/articles/optimisationbd.png";
import surferLogo from "../../public/images/articles/surfer.png";



const FramerImage = motion(Image);

const MovingImg = ({ title, imgUrl, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouveLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return <Link
    href={link}
    target="_blank"
    className="hover:underline underline-offset-2"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouveLeave}
  >
    <h2 className="font-semibold text-xl capitalize">{title}</h2>
    <FramerImage
      style={{ x, y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      ref={imgRef}
      src={imgUrl}
      alt={title}
      className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      priority
    />
  </Link>
}

const Article = ({ imgUrl, title, date, link }) => {
  return <motion.li
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    viewport={{ once: true }}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4"
  >
    <MovingImg title={title} imgUrl={imgUrl} link={link} />
    <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
  </motion.li>
}

const FeaturedArticle = ({ imgUrl, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-dark dark:border-light border-solid rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={imgUrl}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </Link>
      <Link href={link} target="_blank" className="hover:underline underline-offset-2">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 xs:text-lg">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  )
}

function articles() {
  return <>
    <Head>
      <title>Jordan Kagmeni · Articles Page</title>
      <meta name="description" content="ESIEA Graduate Student and Engineer. Talking about TypeScript, React, Node, Python and AWS." />
    </Head>
    <TransitionEffect />
    <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light">
      <Layout className="pt-16">
        <AnimatedText text="Words Can Change the World!" className="page-title" />
        <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          <FeaturedArticle
            imgUrl={vpcMongoArticle}
            title="Create a secure connection between App Runner and Mongo DB Atlas in an AWS infra-structure using VPC (Virtual Private Cloud)"
            time="5 min read"
            summary="Secure your connection between App Runner and Mongo DB Atlas in an AWS infra-structure using VPC safely."
            link="https://www.linkedin.com/pulse/cr%2525C3%2525A9er-une-connexion-s%2525C3%2525A9curis%2525C3%2525A9-entre-app-runner-et-mongo-jordan-kagmeni-dolxe/?trackingId=5qSj9Ce9RDuNwT7WQubxhA%3D%3D"
          />
          <FeaturedArticle
            imgUrl={surferLogo}
            title="Surfer : Réseau Social Professionnel Axé sur les Intérêts"
            time="4 min read"
            summary="I will share you one of my great expirience on apps development. Good reading !😉"
            link="/articles/surfer"
          />
          <FeaturedArticle
            imgUrl={resilienceImage}
            title="Resilience: The Key to Success in Engineering and Beyond"
            time="4 min read"
            summary="Resilience is one of the most essential qualities for a developer who wants to be flexible. In this article, I'll talk about it in a little more detail and show you how it helped me overcome my challenges."
            link="/articles/resilience"
          />
          <FeaturedArticle
            imgUrl={leadershipImage}
            title="Leadership: Inspiring and Guiding towards Excellence"
            time="4 min read"
            summary="Leadership is a remarkable quality for both developers and managers. But how does it make you stand out from the crowd? I share my experience with you in this article."
            link="/articles/leadership"
          />
          <FeaturedArticle
            imgUrl={perfectionnisteImage}
            title="Perfectionnisme : viser toujours plus haut... mais à quel prix ?"
            time="6 min read"
            summary="Perfectionism is a controversial attribute. Sometimes identified as a quality, a flaw or both, it's an adjective that characterizes me a lot."
            link="/articles/perfectionnist"
          />
          <FeaturedArticle
            imgUrl={optimisationbd}
            title="Optimisation de la Base de Données et Migration vers une Architecture de Microservices pour Azatys"
            time="4 min read"
            summary="Take a look on my realisation to optimize infrastructure process in SAAS Application."
            link="/articles/optimisationBD"
          />
          <FeaturedArticle
            imgUrl={roleOfTechnology}
            title="The essential role of technology consulting in modern software engineering"
            time="3 min read"
            summary="The software engineering industry is evolving at a breathtaking pace, with new technologies, tools and services constantly emerging. In this ever-changing context, the skill
        of consulting on technologies, tools and services is becoming crucial for software engineering professionals."
            link="/articles/roleTech"
          />
        </ul>
        {/* <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
        <ul>
          <Article
            imgUrl={SurferImg}
            title="Create a secure connection between App Runner and Mongo DB Atlas in an AWS infra-structure using VPC (Virtual Private Cloud)"
            date="5 min read"
            link="https://www.linkedin.com/pulse/cr%2525C3%2525A9er-une-connexion-s%2525C3%2525A9curis%2525C3%2525A9-entre-app-runner-et-mongo-jordan-kagmeni-dolxe/?trackingId=5qSj9Ce9RDuNwT7WQubxhA%3D%3D"
          />
        </ul> */}
      </Layout>
    </main>
  </>;
}

export default articles;
