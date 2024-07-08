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
        <meta name="description" content="Health Genius : Une solution au cœur du Covid 19" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Health Genius : Une solution au cœur du Covid 19
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Ministère de la Santé Publique du Cameroun
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
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Contexte de la réalisation 🤓</h2>
          <p>
            En juin 2020, je rejoins le ministère de la Santé au Cameroun à Yaoundé dans le cadre de la digitalisation des Centres Spécialisés de prise en charge des patients Covid 19 pour son inauguration dans 3 mois. C'est alors que je participe à une réunion pour comprendre l'enjeu ainsi que le cahier de charges élaboré par le ministère et qui devra être livré juste avant l'inauguration des CSPP (Centres Spécialisés de prise en charge des patients Covid 19).
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Présentation et Définition du Projet</h2>
          <p>
            Health Genius est une application permettant aux professionnels de santé de suivre les patients dans les CSPP tout en limitant les contacts entre patients et médécin grâce à sa fonction de télé-consultation. Il permettra aux personnels du ministère de la santé de pouvoir centraliser toutes les données des CSPP et pouvoir suivre en temps réel ce qui se passent.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">L&apos;équipe 🤔</h2>
          <div>
            <p>
              J'intervenais techniquement seul sur le projet mais, accompagné par des professionnels du métier pour l'aspect non-technique.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conception et Développement 📄</h2>
          <div>
            <p>
              Pour réussir cette application, je me suis tourné vers des technologies JavaScript suivantes :
            </p>
            <br />
            <ul className="list-disc">
              <li>
                <strong>React JS :</strong> Pour la création des interfaces réactives.
              </li>
              <br />
              <li>
                <strong>Redux : </strong> pour la gestion de l'état global de l'application.
              </li>
              <br />
              <li>
                <strong>Node JS : </strong> Pour la gestion du backend, garantissant une API robuste et sécurisée.
              </li>
              <br />
              <li>
                <strong>PostgreSQL :</strong> Comme base de données relationnelle, garantissant des transactions sécurisées et des requêtes performantes.
              </li>
              <br />
              <li>
                <strong>WebRTC & Socket.io :</strong> Pour fournir des mises à jour en temps réel aux utilisateurs.
              </li>
              <br />
              <li>
                <strong>TailwindCSS :</strong> Pour un design moderne et réactif.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Enjeux
              📈</h2>
            <p>
              {/* À Rédiger */}
            </p>
            <br />
            {/* <br />
            <ol className="list-disc">
              <li>
                <strong>Première itération : </strong> Création et authentification des comptes utilisateurs, intégration de l&apos;authentification Google, modélisation et création de la base de données.
              </li>
              <li>
                <strong>Deuxième itération :</strong> Gestion des publications et interactions, permettant aux utilisateurs de suivre d&apos;autres membres et de noter les posts.
              </li>
              <li>
                <strong>Troisième itération  :</strong> Implémentation de la messagerie en temps réel, notifications, et couverture de code à 80%.
              </li>
              <li>
                <strong>Quatrième itération  :</strong> Sécurité des données, recommandations de contacts et de posts, avec un objectif de couverture de code maintenu à 80%.
              </li>
            </ol> */}
            <br /><br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Risques et Difficultés 😢</h2>
          <p>
            {/* À Rédiger */}
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Objectifs Poursuivis</h2>
          <p>
            {/* À Rédiger */}
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Étapes Clés 🔑</h2>
          <p>
            {/* À Rédiger */}
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats 😼</h2>
          <br />
          <p>
            {/* À Rédiger */}
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Lendemain du Projet</h2>
          <p>
            {/* À Rédiger */}
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Mon Regard Critique 🤓</h2>
          <p>
            {/* À Rédiger */}
          </p>
        </div>
      </article>
    </>
  )
}