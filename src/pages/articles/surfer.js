import Head from "next/head";
import Image from "next/image";
import surferLogo from "../../../public/images/articles/surfer.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Surfer</title>
        <meta name="description" content="Surfer : Réseau Social Professionnel Axé sur les Intérêts" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Surfer : Réseau Social Professionnel Axé sur les Intérêts
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Réseau social professionnel
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
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction 🤓</h2>
          <p>
            Parmi les projets qui m&apos;ont marqué, le développement de Surfer se distingue par son ampleur et son impact. Surfer est une plateforme sociale professionnelle conçue pour permettre aux utilisateurs de publier des articles basés sur leurs intérêts, de suivre d&apos;autres utilisateurs, et de créer des espaces thématiques autour de leurs communautés. Ce projet m&apos;a permis de combiner plusieurs compétences techniques et de gestion pour créer un produit final de haute qualité.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conception et Développement 🤔</h2>
          <div>
            <p>
              Le développement de Surfer a été réalisé en utilisant des technologies modernes et robustes : <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                <strong>NextJS :</strong> Pour le rendu côté serveur et la création d&apos;une application rapide et réactive.
              </li>
              <br />
              <li>
                <strong>RecoilJS :</strong> Pour la gestion de l&apos;état global de l&apos;application.
              </li>
              <br />
              <li>
                <strong>AdonisJS :</strong> Pour la gestion du backend, assurant une API robuste et sécurisée.
              </li>
              <br />
              <li>
                <strong>TypeScript : </strong> Pour la fiabilité et la maintenabilité du code.
              </li>
              <br />
              <li>
                <strong>PostgreSQL : </strong> Comme base de données relationnelle, garantissant des transactions sécurisées et des requêtes performantes.
              </li>
              <br />
              <li>
                <strong>SSE (Server-Sent Events) : </strong> Pour fournir des mises à jour en temps réel aux utilisateurs.
              </li>
              <br />
              <li>
                <strong>TailwindCSS : </strong> Pour un design moderne et réactif.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Fonctionnalités et Utilisabilité 📄</h2>
          <div>
            <p>
              Surfer intègre une série de fonctionnalités qui améliorent l&apos;expérience utilisateur et augmentent l&apos;engagement : <br />
            </p>
            <br />
            <ul className="list-disc">
              <li>
                <strong>Publication d&apos;Articles :</strong> Les utilisateurs peuvent suivre d&apos;autres personnes, recevant des notifications sur leurs nouvelles publications. De plus, ils peuvent créer et rejoindre des espaces thématiques, favorisant l&apos;échange et la collaboration autour de sujets d&apos;intérêt commun.
              </li>
              <br />
              <li>
                <strong>Suivi et Communautés : </strong> Un outil de communication inspiré de Slack, intégrant la reconnaissance vocale et la transcription en temps réel. Ce projet a demandé une approche innovante pour surmonter les défis techniques liés à la communication en temps réel et à la gestion des données.
              </li>
              <br />
              <li>
                <strong>Mode Sombre : </strong> Pour améliorer le confort visuel, surtout lors d&apos;une utilisation prolongée.
              </li>
              <br />
              <li>
                <strong>Machine Learning :</strong> Implémenté pour recommander des articles et des utilisateurs à suivre, en se basant sur les interactions et les intérêts des utilisateurs.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats et Impact
              📈</h2>
            <p>
              Depuis son lancement, Surfer a atteint des résultats impressionnants :
            </p>
            <br />
            <br />
            <ol className="list-disc">
              <li>
                <strong>Utilisateurs Actifs : </strong> En trois mois, la plateforme a attiré plus de 50,000 utilisateurs actifs mensuels.
              </li>
              <li>
                <strong>Articles Publiés :</strong> Plus de 20,000 articles ont été publiés, couvrant une vaste gamme de sujets, des technologies émergentes à la littérature contemporaine.
              </li>
              <li>
                <strong>Engagement Utilisateur :</strong>Le taux d&apos;engagement utilisateur, mesuré par le nombre de réactions et de commentaires par article, a dépassé les 35%.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Retour d&apos;Expérience🔑</h2>
          <p>
            Le développement de Surfer a été un projet intensif et gratifiant. Il m&apos;a permis de perfectionner mes compétences techniques et de gestion de projet, tout en créant un produit qui répond à un besoin réel de la communauté professionnelle. La capacité à intégrer des fonctionnalités en temps réel et à utiliser des algorithmes de machine learning pour personnaliser l&apos;expérience utilisateur a été particulièrement enrichissante.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion 😎</h2>
          <p>
            Surfer est plus qu&apos;un simple projet ; c&apos;est une illustration de ce que l&apos;on peut accomplir avec une vision claire, des compétences techniques solides, et un engagement envers l&apos;excellence. Ce projet démontre comment la technologie peut être utilisée pour créer des plateformes qui non seulement facilitent la communication et la collaboration, mais aussi enrichissent l&apos;expérience professionnelle des utilisateurs.
          </p>
        </div>
      </article>
    </>
  )
}