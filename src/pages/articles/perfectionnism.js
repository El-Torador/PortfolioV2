/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import perfectionnismImage from "../../../public/images/articles/perfectionniste.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Perfectionnism</title>
        <meta name="description" content="Perfectionnism: A Quality or a Defect?" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Perfectionnism: A Quality or a Defect?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              The intersection of passion and technology
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={perfectionnismImage}
              width={1250}
            />
          </figure>
          <div>
            <p className="mt-8">
              Perfection is a pretty word, but it reflects more of the irreal than the real. Even our nature is not perfect, but it is its imperfection that makes it beautiful and gives it all its meaning. Perfectionism in society may be seen as an advantage by some and as a disadvantage not by others, but, shouldn't we just take it as it is and take it out of the game? <br />Ever since I was a kid, I've always wanted to do things perfectly and every time I couldn't do it, I started again so much that today, if I miss the 49th pump, I start my 50 pump series again. It can be tough mentally, but it allows me to overtake myself and be resilient.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Definition of perfectionism</h3>
            <p>
              Perfectionism was defined as a multidimensional personality trait manifested by extremely high expectations and demands on oneself or others. This translates into self-insatisfaction with his work and the definition of almost unattainable goals which can lead to a feeling of inability and play on self-confidence. <br />Perfectionism can help to be the best version of oneself as it can also plunge us when it is mismanaged that is why we need to find its <b>IKIGAI</b> and put actions in place towards it. To this extent, the full benefits of perfectionism can be drawn.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">II. Perfectionism as a Quality</h2>
          <div>
            <p>
              As I said at the time, perfectionism as a quality can contribute to exceptional results both personally and professionally. In the notoriously bodybuilding sport, perfectionism allowed me to improve my understanding of anatomy to better visualize the mechanics of muscles in order to optimize their work during my sessions. For example, I had a hard time feeling my chest tip when I was working on them because I didn't visualize the movement in the muscular direction and I did not control my movement during the eccentric phase (which is a crucial phase for reaching the maxima of muscular fiber) to name only these. <br /><br /> In the professional field, the quality of my work, which is sometimes irreproachable, is a consequence of my perfectionism. I take the time to understand the problems that need to be solved in order to propose solutions that are as close as possible and to deliver a bluffing result. Knowing how to use these qualities allows us to transcend ourselves and stand out from others by doing a little more and pushing the lock a little further.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Search for excellence</h3>
            <p>
              Targeting the moon to draw on the stars is an expression that well summarizes perfectionism. When you dive into it, you can drown very quickly. In the third grade, I was so brilliant in Mathematics that when I was 19/20, I didn't sleep well while I always had a 5 to 8 point gap from the second grade. I was starting to get hated for that because while I was sad about my score, others who had gotten 10 were jumping out of joy. <br />Over time, I realized that even having 20/20 didn't satisfy me, and I understood that it was becoming a problem. Excellence is an endless quest and knowing how to stop is crucial.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">B. Carefull to details</h3>
            <p>
              The details are inherent in perfectionism, which marks the difference between a work well done and a work that wants to be "perfect". In software development, details can be a waste of time when the most important thing has not been done yet. You have to know how to eliminate, if not put aside the details in order to enter the delays of delivery and in the budgets of the project. <br /> It is therefore essential to take a step back and define the important elements of the details well so as not to get lost in a loop of dissatisfaction with the details.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. Perfectionism as a Fault
          </h2>
          <div>
            <p>
              Unfortunately, perfectionism has two facets that must be managed with moderation. When you get to know yourself and you are a perfectionist, you are susceptible to falling into that side of perfectionism that can be emotionally damaging. It is therefore essential to know how to question your habits, to listen to yourself and listen to your neighbors. Otherwise, we risk going deep into the dark part of perfectionism and missing the essential. <br /> This involves a gradual detachment and a balanced self-critical spirit in order to reward and commend oneself for their achievements.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Fear of failure</h3>
            <p>
              Failure has long been seen as something bad, but in reality it is an opportunity to really learn. In my life, I've always done my best to avoid failure, whereas constructive failure is sometimes ideal for questioning and learning from mistakes in order to get back stronger.<br /> I had a flawless academic journey, but when I was faced with real life, I took a chess battle, and I had to learn how to stand up and fight to my goals. This fear can lead us to overcome ourselves by all means, as it can paralyze us and prevent us from reaching our full potential. <br />Confronting her fears is also an exercise of introspection that drives us to fight our own demons and what I noticed is that every time I did it, I stood out stronger.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>Jinzhu Kong, "How Does Perfectionism Affect Employees' Creativity", 2024</li>
              <li>Veronica Hopkins, D. Gardner, "The mediating role of work engagement and burnout in the relationship between job characteristics and psychological distress among lawyers", 2012, pp. 59</li>
              <li>Fabiano de Abreu Agrela Rodrigues, "Examining the Origin of Decision-Making Blockage and Procrastination: A Study Utilizing Cognitive Neuroscience and Genomics", 2024</li>
              <li>Goran Livazović, Karla Kuzmanović, "Predicting adolescent perfectionism: The role of socio-demographic traits, personal relationships, and media", 2022, pp. 189-204</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}