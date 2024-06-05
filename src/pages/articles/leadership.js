import Head from "next/head";
import Image from "next/image";
import leadership from "../../../public/images/articles/leadership.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Leadership</title>
        <meta name="description" content="Le Leadership : Inspirer et Guider vers l'Excellence " />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Le Leadership : Inspirer et Guider vers l&apos;Excellence
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Qualité indispensable pour monter en échelle.
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={leadership}
              width={1250}
            />
            <figcaption>Pilier du leadership</figcaption>
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction 🤓</h2>
          <p>
            Le leadership est bien plus qu&apos;une simple position de pouvoir ; c&apos;est la capacité d&apos;inspirer, de guider et de motiver une équipe pour atteindre des objectifs communs. En tant que développeur full-stack ayant occupé divers rôles de leadership, j&apos;ai appris que le leadership efficace repose sur la communication, la vision, et la capacité à résoudre les problèmes tout en soutenant et en développant les compétences de chaque membre de l&apos;équipe.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Qu&apos;est-ce que le Leadership?  🤔</h2>
          <p>
            Le leadership est l&apos;art de diriger et d&apos;influencer les autres pour atteindre des objectifs communs. Cela implique de prendre des décisions stratégiques, de résoudre des conflits et de créer un environnement où chacun se sent valorisé et motivé à donner le meilleur de lui-même.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Mon Parcours en Leadership 👷‍♂️</h2>
          <div>
            <p>
              Mes expériences professionnelles m&apos;ont permis de développer et de perfectionner mes compétences en leadership : <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                <strong>LesBonsArtisans :</strong> En tant qu&apos;ingénieur full-stack, j&apos;ai souvent été amené à prendre des initiatives pour optimiser les processus et implémenter de nouvelles technologies. J&apos;ai guidé mes collègues à travers des migrations complexes et des mises à jour de systèmes, assurant une communication claire et un soutien constant.
              </li>
              <br />
              <li>
                <strong>Azatys :</strong> Pendant ma mission freelance, j&apos;ai non seulement contribué techniquement mais aussi apporté des solutions stratégiques pour la migration vers une architecture de microservices. Mon rôle a souvent consisté à orienter et à encadrer mes collègues pour qu&apos;ils puissent s&apos;approprier les nouvelles technologies et méthodologies.
              </li>
              <br />
              <li>
                <strong>GMC Assurance :</strong> En tant que lead developer, j&apos;ai dirigé une équipe de cinq personnes pour la mise en œuvre d&apos;interfaces de suivi des certificats d&apos;assurance. Ma capacité à répartir les tâches efficacement, à motiver l&apos;équipe et à assurer une coordination sans faille a été cruciale pour le succès du projet.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Projets et Leadership 📄</h2>
          <div>
            <p>
              Les projets que j&apos;ai réalisés reflètent mon approche du leadership : <br />
            </p>
            <ul className="list-disc">
              <li>
                <strong>Surfer :</strong> Dans le cadre de ce projet de plateforme sociale professionnelle, j&apos;ai dirigé une équipe pour développer une solution robuste en utilisant NextJS et TypeScript. Mon rôle de leader a été crucial pour coordonner les efforts de l&apos;équipe et garantir que nous restions alignés sur nos objectifs.
              </li>
              <br />
              <li>
                <strong>Torador Community :</strong> Ce projet, basé sur des canaux de communication en temps réel, a nécessité une direction claire et une gestion de projet agile. J&apos;ai assuré que chaque membre de l&apos;équipe comprenne son rôle et contribue de manière significative à l&apos;atteinte des objectifs.
              </li>
            </ul>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Leadership et Vie Personnelle 🔑</h2>
          <p>
            Le leadership ne se limite pas au cadre professionnel ; il se manifeste également dans la vie personnelle. Que ce soit en organisant des activités communautaires ou en prenant des initiatives dans des projets personnels, je m&apos;efforce de diriger par l&apos;exemple et d&apos;inspirer ceux qui m&apos;entourent. Par exemple, dans des projets collaboratifs comme la planification d&apos;événements ou la participation à des clubs, j&apos;ai souvent pris des rôles de coordination et de direction pour assurer le succès de nos efforts communs.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Les Défis du Leadership 😼</h2>
          <p>
            Être un leader efficace comporte des défis. Il faut constamment apprendre à équilibrer les attentes, à gérer les conflits et à motiver les membres de l&apos;équipe. Un bon leader doit aussi être adaptable, capable de s&apos;ajuster aux changements et de guider son équipe à travers les périodes d&apos;incertitude.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion 😎</h2>
          <p>
            Le leadership est une compétence vitale qui transcende les frontières professionnelles et personnelles. Il s&apos;agit d&apos;inspirer et de guider les autres, de résoudre les problèmes avec ingéniosité et de créer un environnement propice à la croissance et à l&apos;innovation. Mon parcours en tant que développeur full-stack démontre comment un leadership efficace peut transformer des défis en opportunités et conduire une équipe vers l&apos;excellence.
          </p>
        </div>
      </article>
    </>
  )
}