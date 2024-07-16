/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import surferLogo from "../../../public/images/articles/surfer.png";
import feedback from "../../../public/images/articles/feedbacks.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Surfer</title>
        <meta name="description" content="An Entrepreneurial Journey to the Heart of the Techday: The Surfer's Essor" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              An Entrepreneurial Journey to the Heart of the Techday: The Surfer's Essor
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Professionnal Social Network
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={surferLogo}
              width={1250}
            />
            {/* <figcaption>Modern Resilience</figcaption> */}
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Context of implementation 🤓</h2>
          <p>
            During my journey at ESIEA, I encountered many challenges, one of the most significant of which was the Techday. This event requires students to put their knowledge into practice in the implementation of a project that they will present to potential investors and teachers after three months of intense work, organized in four sprints.<br /> This exercise aims to immerse us in the skin of an entrepreneur. It was in this demanding and exciting setting that Surfer was born, the project on which my team and I worked, and which we presented with immense pride.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Presentation and Definition of the Project</h2>
          <p>
            <a className="hover:underline" href="https://surfer-omega.vercel.app" target="_blank">Surfer</a> is an innovative professional social network, focused on the interests of users. Its goal is to create authentic connections between professionals, researchers, entrepreneurs and enthusiasts through a system of recommendations based on sophisticated algorithms. The idea arose from the observation that ESIEA students have varying and sometimes common interests. This represents a unique opportunity to unite these passions and to strengthen the ties between the two schools of the ESIEA Group.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Team 🤔</h2>
          <div>
            <p>
              Our team consisted of three passionate members: <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                Me, as a Technical Lead, responsible for the planning, development and support of team members.
              </li>
              <br />
              <li>
                Koko Eddy, Developer.
              </li>
              <br />
              <li>
                Laoudy Youcef, Developer.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Design and Development 📄</h2>
          <div>
            <p>
              As a Lead Technician, I have ensured that each member of the team works with the technologies that they master best. We found a ground of understanding with JavaScript and TypeScript, and I guided the team through the different phases of the project such as the definition of specifications, <strong>the design of the information system, the realization of the patterns, and the development of the application.</strong> <br />

              Surfer was developed using the following technologies:
            </p>
            <br />
            <ul className="list-disc">
              <li>
                <strong>NextJS:</strong> For server-side rendering and the creation of a fast and responsive application.
              </li>
              <br />
              <li>
                <strong>RecoilJS: </strong> we manage the overall state of the application.
              </li>
              <br />
              <li>
                <strong>AdonisJS: </strong> For backend management, ensuring a robust and secure API.
              </li>
              <br />
              <li>
                <strong>TypeScript:</strong> For the reliability and sustainability of the code.
              </li>
              <br />
              <li>
                <strong>PostgreSQL:</strong> As a relational database, ensuring secure transactions and efficient queries.
              </li>
              <br />
              <li>
                <strong>SSE (Server-Sent Events):</strong> To provide real-time updates to users.
              </li>
              <br />
              <li>
                <strong>TailwindCSS :</strong> For a modern and responsive design.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Challenges
              📈</h2>
            <p>
              Each development iteration represented a major challenge:
            </p>
            <br />
            <br />
            <ol className="list-disc">
              <li>
                <strong>First iteration: </strong> Create and authenticate user accounts, integrate Google Authentication, model and build the database.
              </li>
              <li>
                <strong>Second iteration:</strong> Manage posts and interactions, allowing users to follow other members and rate posts.
              </li>
              <li>
                <strong>Third iteration:</strong> Real-time mail deployment, notifications, and 80% code coverage.
              </li>
              <li>
                <strong>Fourth iteration:</strong> Data security, contact and post recommendations, with a code coverage targetined at 80%.
              </li>
            </ol>
            <br /><br />
            The success of these iterations was crucial not only to validate my semester, but also to provide strong arguments for presenting our project to Director Mr. Roussel, so that it can be adopted and deployed within the infrastructure of the ESIEA Group.
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Risks and Difficulties 😢</h2>
          <p>
            After the success of the first iterations (100% and 83%), we underestimated the complexity of the following objectives. I made the classic mistake of a leader trying to do everything myself, which led to a failure of iteration 3 with a score of 64%. This experience taught me the importance of trust and delegation within a team. By removing our group, we finished the fourth iteration with an impressive score of 94%.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Prosecuted Goals</h2>
          <p>
            The iterations marked the first step towards our common goals, for my team and for me. These goals have enabled me to clarify my role as a leader by learning to trust my team. Their progress and recognition strengthened my determination not to disappoint them. This fits perfectly with my profile, because I like to take responsibilities that make sense to me, especially when it comes to people who believe in me and are ready to follow me and help me in difficult times. It is in this experience that I have best understood, so far, what it really means to run a team.<br /> <br />
            In the continuation of Surfer, I had to prepare a presentation of the project to the Director of the ESIEA Group to demonstrate how Surfer can unite the two schools, Intech and ESIAA, and become the platform by excellence of the Group, allowing everyone to exchange and share their passions.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Key Steps 🔑</h2>
          <p>
            My primary role was to complete the project to validate iterations and prepare a presentation for the Director of IAEA. I worked on the pitch and improved existing features based on student feedback. One of my colleagues dealt with the administrative aspects, and we held weekly meetings to make the point.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Results 😼</h2>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={feedback}
              width={550}
            />
            <figcaption className="text-gray-500 text-xs">Feedback Surfer sprints</figcaption>
          </figure>
          <br />
          <p>
            The results were very positive, both for the iterations and for the presentation to the Director. He quickly grasped the potential of Surfer and gave his green light to deploy a first version within the school's infrastructure. The initial deployment attracted considerable traffic, with more than 50 posts every two hours in different centres of interest, but we had to face challenges related to infrastructure costs and GDPR policies.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Afternoon of the Project</h2>
          <p>
            These challenges led us to consider making Surfer open source, allowing students to contribute and maintain the tool. We have also considered a flexible architecture to optimize operations while minimizing costs.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">My Critical Opinion 🤓</h2>
          <p>
            This adventure allowed me to get to know myself better and refine my vision of leadership. I have made technical and personal progress in taking responsibility, managing stress and supporting my team. The mistakes made have been valuable lessons that have helped me to evolve. As the saying goes, <q>what doesn't kill us makes us stronger</q>. <br />

            In short, the Surfer project was an unforgettable and educational experience, which not only enriched my technical skills and leadership, but also strengthened my passion for entrepreneurship.
          </p>
        </div>
      </article>
    </>
  )
}