/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import reactImage from "../../../public/images/articles/react.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · How I discovered React JS</title>
        <meta name="description" content="How I discovered React JS" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              How I discovered React JS
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              When I find a technology that fits me
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={reactImage}
              width={1250}
            />
          </figure>
          <p className="mt-8">
            In 2016, when I got my bachelor's degree, I'm still just as passionate about mathematics, physics, and computer science in general. During those periods, I was still working on programs based on C and C++, and I had not yet had the opportunity to work on web technologies. To pursue my passions, I join the FAC of Dschang (a city in western Cameroon) in Physics, where I do a year full of discoveries and encounters. <br />A year later, I decided to enter a computer engineering school in Yaoundé (the capital of Cameroon) to specialize in application development that already fascinated me. This training is expected to span 3 years and end with graduation support accompanied by a 6-month internship report. But what turned me off was not an event related to this training.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">A meeting of enthusiasts at the foot of the web door via JavaScript</h2>
          <p>
            When I joined school, I met two other enthusiasts named Marc and Florian. Marc was a web prodigy with his dreadful language, PHP. As for Florian, Python was like his breath of life, and I admired them so much. He was doing hallucinating things with their respective tools and with them I was learning every day and progressing without even realizing it because it was so enjoyable to spend time together giving life to our ideas. <br />I was in the middle who was completely on the grid, with my skills in C and C++, but I knew hardly anything to do with because I lacked creativity. We shared the same vision for a passion that made us vibrate: <b>entrepreneurship</b>. To nurture this passion and to prove to myself that I am capable, I set out to create an Instant Messaging web application. That's where my journey into the web begins, I start by learning PHP, I get into it very quickly, and I start with my famous application. I'm doing pretty well until there's a problem. I was doing <b>server side rendering (SSR for Server Side Rendering)</b> with PHP, and I needed the interface to be interactive and not refresh when a user sends a message. <br />But I didn't know how to do it. I did some research and came up with solutions like JQuery, which was very popular at the time. So I start with this library without even knowing Javascript 😅  and you can imagine that I go pretty well. What, JavaScript and I are made for each other🫂. I often like to say that <i>"I understood JavaScript without knowing its identity"</i>. <br />
            The more I move forward, the more I face difficulties, the better I find solutions, the newer I have ideas. That's how I get into a dopamine spiral that makes me learn a lot of notions and understand a little bit more about how the Web works. <br />

            I manage to complete my application, I make a deployment into the school's intranet, and I invite my friends to create an account and use the app. I have rather positive feedback despite a few bugs that I quickly manage to solve, other students enroll and end up enjoying the features, including: <br />

            <ul className="list-disc ml-6">
              <li>Emojis</li>
              <li>The ability to react to a message</li>
              <li>The ability to create a group</li>
              <li>The ability to have multiple windows and chat with several people at once.</li>
            </ul>
            For a beta version, it was pretty nice.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">The Turn 👨‍💻</h2>
          <div>
            <p>
              This Realization helped me so much morally because I needed to prove to myself that I was able to something to feel legitimate to be Marc and Florian's friend and also to show them what I was capable of. Later, one of our teachers contacted us three for a project in which he would like us to bring our skills in exchange for a remuneration. Since the goal was to start a startup together and we needed money, we accepted the offer and were invited to a first preparatory meeting with the client to understand the issues of the project in which we are going to intervene. <br /><br />At that time, I was like a soft balloon thirsty for knowledge, I needed to fill myself with all that air that was vital to me. That is why I was much more concerned about the tools or technologies that we were going to use to such a project. It was probably naive or beginner to take such an approach, but at the moment I was not asking myself these questions yet. At this time (end of 2018), Frontend bookstores such as React JS, Angular were already well known, and a new one that had just made its place on the market was Vue JS. Since I had a sensitivity to the frontend, in my team (with Marc and Florian), I had to take care of this part. <br /> <br />

              Once the meeting is over, the technologies are unveiled and we will start on the JS View on the frontend and PHP in the backend with some serverless features in Python and Node JS. I'm starting to get caught up with Vue JS as a hungry tiger and, between the lines, I find React JS making me an electro-shock but I put it aside to go back on it to explore later. I continue to advance my expertise on Vue JS with mini-projects before finally starting the project.<br /> We are mentored by professionals of the professional need and our teacher who requested us. The project is progressing at a good pace, with timelines met and promising results. And there was a time when the project was put in stand-by for a priority concern because of the budget and we had to focus on releasing a module independent of the E-Commerce application that we were working on and that was to be done this time in React JS. <br /> <br />There was already a team on it and I had to join the team to catalyze its development. The declic for me comes when I join this dev React team. He shared everything, difficulty, joy, victory, success, etc. The atmosphere was friendly, and they were really passionate about this framework created by Facebook. I take this opportunity to quickly get started and I instantly find something strong with React, it is its way of thinking User Interface which is the same logic that I had had after encountering coherence concerns while working with JQuery. <br />I therefore quickly adhere to his philosophy and progress with diligence on it. I begin to be hired by the team on increasingly complex tasks which self-challenges and stimulates me, a feeling that I have always checked until today before joining a company where to integrate a project.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">And Now ?</h2>
          <p>
            Today, I live my passion to the full, even though my entrepreneurial goal is not yet there. I have been able and continue to explore the opportunities offered to me by the enriching ecosystem of JavaScript and meet other enthusiasts who have greatly impacted my vision in this environment, even though I always knew what I wanted, this journey has made me realize gradually that I am on the right track. <br />

            This flashback is only an infinite part of what I've been through throughout my tiny journey (because I feel I still have a lot of things ahead of me 😁), but it's so significant, because it completely overturned my career choice. And if I had a notebook of the memorable moments of my life, I would bury it inside. What else can I say? And well, let the adventure continue🥳.
          </p>
        </div>
      </article>
    </>
  )
}