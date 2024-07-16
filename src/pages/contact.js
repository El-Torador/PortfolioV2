import AnimatedText from "@/components/AnimatedText";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

function contact() {
  return (<>
    <Head>
      <title>Jordan Kagmeni · Contact Page</title>
      <meta name="description" content="ESIEA Graduate Student and Engineer. Talking contact TypeScript, React, Node, Python and AWS." />
    </Head>
    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText text="Let's Build Together !" className="page-title" />
        <Contact />
      </Layout>
    </main>
  </>
  );
}

export default contact;