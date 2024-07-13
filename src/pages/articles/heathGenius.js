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
              Pour permettre une inauguration des CSPP dans les temps, il était capital de respecter les delais pour la première version de l'application. Elle se doit de répondre au cahier de charges établi par le ministère de la santé et doit être sécurisée pour garantir la confidentialité des données des patients. Cette application allait être utilisé dans plus de 1000 centres de santé à travers le Cameroun et devait être scalable pour pouvoir supporter le nombre de patients et le traffic sur l'application. <br /> Une fois l'application livrée, il était capital de former les professionnels de santé à l'utilisation de l'application pour garantir son adoption par la même occassion receuillir des feedbacks utilisateurs afin de les remonter via l'application au ministère.
            </p>
            <br />
            <br /><br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Risques et Difficultés 😢</h2>
          <p>
            Durant cette mission, j'ai fait face à quelques difficultés. Notamment lors de la réalisation de la fonctionnalité de télé-consultation qui marchait en environnement deveveloppement mais lorsqu'on passait en test ou en prod, il ne marchait pas correctement ce qui a plus pris de temps que prévu. J'ai donc commencé à stresser car le temps était compté et c'etait une fonctionnalité qui serait à la une lors de la présentation de l'application donc il se devait de marcher correctement. <br /> Après deux nuits blanches, et deux semaines dessus, j'ai reussi à faire fonctionner en production. Ce fut un gros soulagement pour moi.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Objectifs Poursuivis</h2>
          <p>
            À la suite de celà, je devais fournir une documentation technique du projet dans les livrables comme mentionné dans le contrat et intervenir gratuitement en cas de maintenance corrective sur l'application à condition que l'anomalie à corriger soit directement liée à une spécifications dans le cahier des charges.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats 😼</h2>
          <br />
          <p>
            L'application a finalement été mis en production et a été utilisé pendant <b>02 ans</b> avec plus de <b>50000 utilisateurs</b> actifs chaque jours dans plus de <b>1000 CSPP</b>.
            Son utilisation a été interrompu suite à la fermeture des CSPP sous mot du Président de la République après que la Covid 19 soit plus d'actualité.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Mon Regard Critique 🤓</h2>
          <p>
            Ce projet m'a permis de savoir gérer mon stress en cas pression et de ne pas sucombé et de persévérer lorsqu'on ne trouve pas de solution. Globalement j'ai été satisfait de mon travail car j'ai su livré une application qui repondait à un besoin bien qu'elle n'était pas compètement aboutie.
          </p>
        </div>
      </article>
    </>
  )
}