import Head from "next/head";
import Image from "next/image";
import resilienceImage from "../../../public/images/articles/resilience.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Résilience</title>
        <meta name="description" content="La Résilience : La Clé de la Réussite en Ingénierie et au-delà" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              La Résilience : La Clé de la Réussite en Ingénierie et au-delà
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Savoir s&apos;adapter aux exigences.
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={resilienceImage}
              width={1250}
            />
            <figcaption>Modern Resilience</figcaption>
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction 🤓</h2>
          <p>
            La résilience est une qualité essentielle pour naviguer dans les complexités de la vie professionnelle et personnelle. En tant que développeur full-stack passionné par la création d&apos;expériences numériques intuitives et centrées sur l&apos;utilisateur, j&apos;ai découvert que la résilience est cruciale pour surmonter les défis et continuer à innover.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Qu&apos;est-ce que la Résilience ? 🤔</h2>
          <p>
            La résilience est la capacité à rebondir face à l&apos;adversité, à s&apos;adapter aux changements et à persister malgré les obstacles. Elle combine l&apos;endurance mentale, la flexibilité et la détermination, permettant aux individus et aux équipes de maintenir leur performance et de se développer même dans des conditions difficiles.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Expériences Professionnelles et Résilience 👷‍♂️</h2>
          <div>
            <p>
              À travers mes diverses expériences professionnelles, j&apos;ai constamment appliqué et développé cette qualité : <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                <strong>LesBonsArtisans :</strong> En tant qu&apos;ingénieur full-stack, j&apos;ai travaillé sur le développement de fonctionnalités intelligentes telles que les rappels basés sur des modèles de langage et la synthèse vocale. La migration de l&apos;architecture des routes API en composants webhooks a nécessité une adaptation rapide aux nouvelles technologies et aux exigences changeantes du projet, mettant à l&apos;épreuve ma capacité à rester flexible et innovant.
              </li>
              <br />
              <li>
                <strong>Azatys :</strong> Durant ma mission en tant que développeur freelance, j&apos;ai intégré un connecteur Shopify et migré l&apos;architecture backend vers des microservices. Chaque projet a présenté des défis uniques, nécessitant une réévaluation constante des approches et des solutions pour garantir une mise en œuvre réussie.
              </li>
              <br />
              <li>
                <strong>GMC Assurance :</strong> En tant que lead developer, j&apos;ai dirigé une équipe pour mettre en œuvre des interfaces de suivi des certificats d&apos;assurance et des algorithmes de génération de lots d&apos;attestations. La gestion d&apos;équipe et la résolution de problèmes complexes ont renforcé ma capacité à rester concentré et efficace sous pression.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Projets et Adaptabilité 📄</h2>
          <div>
            <p>
              Les projets sur lesquels j&apos;ai travaillé illustrent également ma résilience : <br />
            </p>
            <ul className="list-disc">
              <li>
                <strong>Surfer :</strong> Une plateforme sociale professionnelle développée avec NextJS et TypeScript, qui m&apos;a permis d&apos;explorer de nouvelles technologies et d&apos;appliquer des méthodologies agiles pour livrer un produit robuste et convivial.
              </li>
              <br />
              <li>
                <strong>Torador Community :</strong> Un outil de communication inspiré de Slack, intégrant la reconnaissance vocale et la transcription en temps réel. Ce projet a demandé une approche innovante pour surmonter les défis techniques liés à la communication en temps réel et à la gestion des données.
              </li>
            </ul>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">L&apos;Importance de la Résilience dans la Technologie 🔑</h2>
          <p>
            Dans le domaine de la technologie, la résilience permet de surmonter les échecs, de tirer des leçons des erreurs et de rester à la pointe de l&apos;innovation. Elle est également essentielle pour maintenir un état d&apos;esprit positif et productif dans un environnement souvent exigeant et en constante évolution.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion 😎</h2>
          <p>
            En somme, la résilience est une compétence fondamentale qui permet de naviguer avec succès dans le monde professionnel. Elle est le pilier sur lequel repose la capacité à innover, à s&apos;adapter et à prospérer face aux défis. En tant que développeur, cette qualité m&apos;a permis de transformer des obstacles en opportunités et de mener à bien des projets complexes et variés.
          </p>
        </div>
      </article>
    </>
  )
}