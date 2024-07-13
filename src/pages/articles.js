import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Tag from "@/components/tag";
import vpcMongoArticle from "../../public/images/articles/article1.jpeg";
import tdd from "../../public/images/articles/tdd.png";
import reactImage from "../../public/images/articles/react.webp";
import vui from "../../public/images/articles/vui.png";
import surferLogo from "../../public/images/articles/surfer.png";
import leadershipImage from "../../public/images/articles/leadership.webp";
import perfectionnism from "../../public/images/articles/perfectionniste.webp";
import autonomyImage from "../../public/images/articles/autonomy.jpg";
import hgImage from "../../public/images/articles/hg.jpeg"


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

const FeaturedArticle = ({ imgUrl, title, time, summary, link, type = "Compétences" }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-dark dark:border-light border-solid rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
      <Link href={link} className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={imgUrl}
          alt={title}
          className="w-full max-h-[300px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </Link>
      <Link href={link} className="hover:underline underline-offset-2">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 xs:text-lg">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
        <ul>
          <Tag tag={type} />
        </ul>
      </div>
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
            imgUrl={reactImage}
            title="How I discovered React JS"
            time="4 min read"
            summary="Discover how I discovered React JS and how it changed my career vision."
            link="/articles/reactJourney"
            type="Réalisation"
          />
          <FeaturedArticle
            imgUrl={vpcMongoArticle}
            title="Create a secure connection between App Runner and Mongo DB Atlas in an AWS infra-structure using VPC"
            time="5 min read"
            summary="Discover how to create a secure connection with Mongo DB Atlas in an AWS infra-structure using VPC."
            link="https://www.linkedin.com/pulse/cr%2525C3%2525A9er-une-connexion-s%2525C3%2525A9curis%2525C3%2525A9-entre-app-runner-et-mongo-jordan-kagmeni-dolxe/?trackingId=5qSj9Ce9RDuNwT7WQubxhA%3D%3D"
            type="Compétences"
          />
          <FeaturedArticle
            imgUrl={vui}
            title="The Voice: A Technologically Disruptive Interface"
            time="3 min read"
            summary="Discover the voice interface and its impact on the future of technology."
            link="/articles/vui"
            type="Compétences"
          />
          <FeaturedArticle
            imgUrl={tdd}
            title="Thinking 'Behavior' and 'Feedback' through TDD"
            time="3 min read"
            summary="Gain efficiency and quality through Test Driven Development."
            link="/articles/tdd"
            type="Compétences"
          />
          <FeaturedArticle
            imgUrl={surferLogo}
            title="Surfer : The professional social network based on your topics of interest for passionate people."
            time="4 min read"
            summary="I will share you one of my great expirience on apps development. Good reading !😉"
            link="/articles/surfer"
            type="Réalisation"
          />
          <FeaturedArticle
            imgUrl={leadershipImage}
            title="Leadership: A Remarkable Quality for Developers and Managers"
            time="4 min read"
            summary="Discover the importance of leadership in the professional world."
            link="/articles/leadership"
            type="Transverse"
          />
          <FeaturedArticle
            imgUrl={perfectionnism}
            title="Perfectionnism: A Quality or a Defect?"
            time="4 min read"
            summary="Discover the impact of perfectionism on your personal and professional life."
            link="/articles/perfectionnism"
            type="Transverse"
          />
          <FeaturedArticle
            imgUrl={autonomyImage}
            title="Automony: A trap or an advantage?"
            time="4 min read"
            summary="Autonomy is a quality that is highly sought after in the professional world. But is it really an advantage? Discover it in this article."
            link="/articles/autonomy"
            type="Transverse"
          />
          <FeaturedArticle
            imgUrl={hgImage}
            title="Health Genius: Expansion at the heart of Covid 19"
            time="4 min read"
            summary="Discover the impact of Covid 19 on the Health Genius platform."
            link="/articles/heathGenius"
            type="Réalisation"
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
