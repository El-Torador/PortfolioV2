/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import autonomyImage from "../../../public/images/articles/autonomy.jpg";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Automony</title>
        <meta name="description" content="Automony: A trap or an advantage?" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Automony: A trap or an advantage?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              A controversial quality
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={autonomyImage}
              width={1250}
            />
          </figure>
          <div>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Definition of autonomy</h3>
            <p>
              Autonomy can be defined as the ability for an individual or entity to make decisions independently, based on their own values, knowledge and goals. Mathieu Nebra, founder of the siteduzero now known as OpenClassRomms, said in 2020 that: <b>80% of engineers admit to having acquired 70% of their knowledge independently</b>. <br /><br /> It is widely seen as a quality, sometimes at the expense of teamwork among developers. It has been scientifically proven that depending on our ability to be either extraverted or intraverted, we will be more comfortable working independently or in a team. There are always exceptions, but this is a bias that is often observed.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">
              B. Importance of autonomy in society
            </h3>
            <p>
              The importance of autonomy in society turns out to be a crucial element for individual and collective development. The more an individual is going to work on it, the more it will have an impact on society on a large scale.<br /> That is why it is important to know how to get the most out of it when working independently and when working as a team.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">I. Autonomy as a trap</h2>
          <div>
            <p>
              Self-reliance can also be seen as a trap because of the increased responsibility that accompanies it. By taking decisions independently without consulting an external opinion, our choices can be biased and sometimes we do not have a 360-degree view of the situation. In my case, for example, I am often faced with doing so even though I have not fully understood what to do where if I am stuck. <br /> I will try to find a solution on my own or to start on a solution before asking for external advice and this may turn out to be a trap because not only am I going to waste time but also, lose confidence because I have not achieved the desired goal.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Risk of isolation</h3>
            <p>
              Self-reliance can also lead to risks of social isolation, in an increasingly connected world. As far as I am concerned, when I make decisions independently, I may find myself isolated from my community and my social network, which can have adverse consequences for my emotional and mental well-being.<br /> Today, I am trying to make progress on this aspect and really know how to share things in my way of working and it is a very difficult but beneficial exercise for me.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. Autonomy as an advantage
          </h2>
          <div>
            <p>
              In the Tech job market, <b>85% of job offers ask candidates to be self-employed and in this percentage, we have 90% of startups</b>. If I had to define in one word what autonomy has brought me, I would say "free will". My training in computer science went through a lot of self-teaching where I learned how to search for solutions myself (which is a great asset as an Engineer...).<br /> The more I worked independently, the more progress I made and the more confidence I had in myself. I've always assumed that everything starts with one head before expanding and growing in a team. And working alone allows me to control what I do and therefore be more productive even though some things may escape us.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">III. The autonomy apply to me</h2>
          <p>
            My perfectionist side has always put me in that bubble where I feel compelled to control everything. It has also often prevented me from taking full advantage of my experiences and opening up to new opportunities. As I became aware of this, I began to explore ways to let go and trust the process.<br /><br /> Autonomy has accompanied me at every stage of my life from designing my first RPG game two months later after receiving my first computer to my discovery of the Web and mobile application development. It also taught me in life to rely on myself first and always believe in myself and say it as it sounds simple but it is a therapy that is beneficial for any human development.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>Alexander Frank Pasquel Cajas, Verónica Tomasa Cajas Bravo, Roberto Carlos Dávila Morán, "Remote Work in Peru during the COVID-19 Pandemic", 2023</li>
              <li>Beňo, Michal, "The Advantages and Disadvantages of E-working: An Examination using an ALDINE Analysis", 'Ital Publication', 2021</li>
              <li>Longo, Paulo Jorge Mendes Forte, "A study into telework: its advantages, disadvantages, and future business practices", 2022</li>
              <li>Naina Kumar, "Vaginal contraception: a roadmap to women's reproductive autonomy-a narrative review", 2023</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}