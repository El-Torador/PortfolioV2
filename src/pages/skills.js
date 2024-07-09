import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import SoftSkills from "@/components/SoftSkiils";

function about() {
  return (<>
    <Head>
      <title>Jordan Kagmeni · Skills Page</title>
      <meta name="description" content="ESIEA Graduate Student and Engineer. Talking about TypeScript, React, Node, Python and AWS." />
    </Head>
    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText text="Skills Make Wold Better!" className="page-title" />

        <Skills />
        <SoftSkills />
      </Layout>
    </main>
  </>
  );
}

export default about;
