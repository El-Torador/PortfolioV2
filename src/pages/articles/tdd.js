/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import tdd from "../../../public/images/articles/tdd.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · TDD</title>
        <meta name="description" content="Thinking 'Behavior' and 'Feedback' through TDD" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Thinking 'Behavior' and 'Feedback' through TDD
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Gain efficiency and quality with Test Driven Development
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={tdd}
              width={1250}
            />
          </figure>
          <div className="mt-8">
            <small className="text-gray-500">TDD: Kezako ?🤔</small>
            <p>
              Test-driven development (TDD) refers to a software development technique that aims to reduce anomalies in an application by promoting frequent implementation of tests. A test-first policy, consistent with agile methods, that urges programmers to be more rigorous and to correct bugs and other errors in the source code in almost real time. Initially, test-driven development suggests designing tests before even developing using the test-first design approach.<br />

              It adds quality to the code produced while documenting it. This facilitates maintenance and ensures the safety of future modifications. In the developer community, TDD is often known as a waste of time because writing tests takes time and this is like writing double code (the one for tests and the one to be tested). Opinions are quite divided on the subject where on the one hand we will have the purists who only swear by the TDD, then the neutrals who will use it from time to time and finally the opponents who do not use it at all.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Test-Driven Development Context (TDD)
            </h3>
            <p>
              While development granularity was a detail when building software, today it isined thanks to TDDs with growth adoption by companies since 2015 <b>(more than 80% of tech companies adopt TDD)</b>. In 2003, Kent Beck democratized TDD in his book "Test-Driven Development: By Example", after experimenting with and promoting these ideas in 1990 through the Extreme Programming (XP) movement, which aimed to popularize TDD-related practices.<br /><br /> Thanks to his brilliant work, the community is increasingly interested in this method and a plethora of test tools are emerging. The principle of this method is to focus on the <b>behaviors</b> in order to provide a <b>quick and quality feedback</b>. To do this, we have to make sure at every minor iteration that the code produced is useful (so that there is no dead code), has the expected behavior and does not break existing behaviors.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. Privileged "behavior" in TDD
          </h2>
          <div>
            <p>
              The great misfortune of developers is to think "technical" and not "handicraft" because system modelling is extremely poorly taught. Nowadays, when you start a project, you tend to lean directly on the technologies to use instead of focusing on the business aspects of the system, making it difficult to adopt TDD because it is a complex exercise of abstraction that most people are not used to. <br />When you want to take advantage of TDD, it is more than necessary to encapsulate all the business rules that will make up the application before thinking about what is called <b>implementation details</b>.<br /><br /> When we ensure that our business specifications are functional thanks to the approval of the tests, we can add other layers in complete serenity. Focusing on behavior allows us not only to be effective, but also to be able to quickly iterate on application features without regression.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. Importance of Information Feedback in TDD
          </h2>
          <div>
            <p>
              Feedback is a key element in TDD and sometimes neglected by developers which ends up catching them. A few years ago, I was developing REST APIs and testing it with software like <b><a href="https://www.postman.com/" target="_blank" className="underline">Postman</a></b> or <b><a href="https://insomnia.rest/" target="_blank" className="underline">Insomnia</a></b>. This practice works very well, but on small-scale projects. I was faced with a large-scale project in my company and that's where I got a wall. Every time we had to start all the services, start the server, make sure everything is up, make the request from the postman.<br /><br /> If there was a problem, looking at the console and sometimes tracing the source of the problem is impossible because we have no control over the execution flow so we are not forced to launch a debugger that we have to configure depending on the project we are working on. It is very quickly understood with this practice that the return of information is too late. <br /><br /> We're testing an entire chain, but we'd just like to test a piece of that chain which results in sometimes inconsistent results. On the other hand, by treating the problem by granularity, one can ensure that each brick plays its expected role and that the whole works properly.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">IV. Comment j'ai tiré profit du TDD ?</h2>
          <p>
            Like any engineer, we need to find effective solutions that not only worked, but also enable us to be more productive by focusing only (in real life, I'll say "most often" ) on the high impact aspects. Today, there are many tools that enable us to quickly set up an environment with what is right, but we still have to distinguish between what we really need and what we should focus on. During my stay at Azatys, I was able to speak on various projects in the company. <br /><br />One of the most important was the <a href="https://app.azatys.fr" target="_blank" className="underline">Azatys platform</a>, which relied on a complex process of tracking digital indicators of the websites and social networks of customers and their competitors. This tracking module uses many services, including Azatys' <abbr title="Application Programming Interface">API</abbr> to perform a number of business calculations. All the added value of the company is based on these calculations, so it is strong to note that my enthusiasm was going to focus on the strict operation of this business aspect before the cherry on the gateau.<br /><br /> This is where TDD intervenes to enable me to carry out this task safely and with quick feedback. By defining business rules with industry professionals, this allows me to write tests on which my solution will be based to ensure that it carries all defined business specifications. Similarly, TDD is a perfect match with agile project management methods, because with quick feedback, you can deploy releases regularly to users and iterate without regression. This is how TDD allowed me (with more than 2 years of practice), to set up a module that wants to be complex in all serenity.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>D. Melton, "Design Systems Thinking for Innovation in an Engineering Faculty Development Program", 2021</li>
              <li>Evan Rusoja, R. Chad Swanson, Mini Swift, "Using Systems Thinking and Complexity Theory to understand and improve Emergency Medicine: Lessons from COVID-19 in a safety net health system.", 2023</li>
              <li>Anna C. Schneider, O. Itani, Elizabeth M. Cronin, Dirk Bucher, F. Nadim, "the ANN "Evolution of the arthropod brain - from development to structure" Final Program", 2022</li>
              <li>Umaporn Yamubon, Therdpong Thongseiratch, "Using a Design Thinking Approach to Develop a Social Media-Based Parenting Program for Parents of Children With Attention-Deficit/Hyperactivity Disorder: Mixed Methods Study", 2023</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}