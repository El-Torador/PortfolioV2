/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import hgImage from "../../../public/images/articles/hg.jpeg";
import feedback from "../../../public/images/articles/feedbacks.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Health Genius</title>
        <meta name="description" content="Health Genius: Expansion at the heart of Covid 19" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Health Genius: Expansion at the heart of Covid 19
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Ministry of Public Health of Cameroon
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={hgImage}
              width={1250}
            />
            {/* <figcaption>Modern Resilience</figcaption> */}
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Context of implementation 🤓</h2>
          <p>
            In June 2020, I join the Ministry of Health in Cameroon in Yaoundé as part of the digitization of the Specialized Centres for the care of patients with Covid 19 for its inauguration in 3 months. This is when I participate in a meeting to understand the issue and the specifications developed by the department and which will be delivered just before the inauguration of the CSPP (Specialized Centres for the Care of Covid 19 Patients).
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Presentation and Definition of the Project</h2>
          <p>
            Health Genius is an application that enables healthcare professionals to track patients in SPCs while limiting patient-physician contacts through its remote consultation function. It will enable the staff of the Department of Health to centralize all CSPP data and be able to monitor what is happening in real time.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Team 🤔</h2>
          <div>
            <p>
              I was technically speaking alone on the project but, accompanied by professionals of the profession for the non-technical aspect.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Design and Development 📄</h2>
          <div>
            <p>
              To succeed in this application, I turned to the following JavaScript technologies:
            </p>
            <br />
            <ul className="list-disc">
              <li>
                <strong>React JS :</strong> For the creation of responsive interfaces.
              </li>
              <br />
              <li>
                <strong>Redux : </strong> for the management of the overall implementation status.
              </li>
              <br />
              <li>
                <strong>Node JS : </strong> For backend management, ensuring a robust and secure API.
              </li>
              <br />
              <li>
                <strong>PostgreSQL :</strong> As a relational database, ensuring secure transactions and efficient queries.
              </li>
              <br />
              <li>
                <strong>WebRTC & Socket.io :</strong> To provide real-time updates to users.
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
              In order to enable CSPPs to be launched in time, it was essential to respect delays for the first version of the application. It must comply with the specifications established by the Ministry of Health and must be secure to guarantee the confidentiality of patient data. This app was to be used in more than 1,000 health centres across Cameroon and needed to be scalable in order to be able to support the number of patients and traffic on the app. <br /> Once the application was delivered, it was crucial to train health professionals in the use of the application to ensure its adoption by the same opportunity to receive feedback from users in order to send them back via the app to the department.
            </p>
            <br />
            <br /><br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Risks and Difficulties 😢</h2>
          <p>
            During this mission, I encountered some difficulties. Especially when realizing the tele-consultation functionality that was running in a development environment but when passing a test or a prod, it was not running properly which took more time than planned. So I started to stress because the time was counted and it was a functionality that would be at the one when presenting the application so it had to go properly. <br /> After two white nights, and two weeks on, I managed to get into production. It was a great relief for me.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Prosecuted Goals</h2>
          <p>
            As a result, I was required to provide technical documentation of the project in the deliverables as mentioned in the contract and to intervene free of charge in case of corrective maintenance on the application provided that the anomaly to be corrected is directly related to a specification in the specification.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Results 😼</h2>
          <br />
          <p>
            The application was eventually put into production and was in use for <b>02 years</b> with more than 50,000 active users every day in more than 1000 CSPP.

            Its use was discontinued following the closure of CSPPs under the President's word after Covid 19 became more current.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">My Critical Opinion 🤓</h2>
          <p>
            This project has enabled me to manage my stress in case of pressure and not to suffer and to persevere when there is no solution. Overall I was satisfied with my work because I was able to deliver an application that responded to a need although it was not competently completed.
          </p>
        </div>
      </article>
    </>
  )
}