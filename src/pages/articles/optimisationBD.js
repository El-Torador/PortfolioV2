import Head from "next/head";
import Image from "next/image";
import optimisationbd from "../../../public/images/articles/optimisationbd.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Optimisation de la Base de Données et Migration vers une Architecture de Microservices pour Azatys</title>
        <meta name="description" content="Optimisation de la Base de Données et Migration vers une Architecture de Microservices pour Azatys" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Optimisation de la Base de Données et Migration vers une Architecture de Microservices pour Azatys
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              #Optimisation #BD #Microservices #Architecture
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={optimisationbd}
              width={1250}
            />
            <figcaption>Logiciel Architeture</figcaption>
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction 🤓</h2>
          <p>
            Parmi mes réalisations techniques marquantes, l&apos;optimisation de la base de données et la migration vers une architecture de microservices pour Azatys se distinguent par leur complexité et leur impact sur la performance globale de la plateforme. Ce projet a non seulement amélioré la scalabilité et la robustesse du système, mais a également permis une meilleure gestion des ressources et une réactivité accrue.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Contexte du Projet 🤔</h2>
          <p>
            Azatys est une plateforme SaaS (Software as a Service) dédiée à la surveillance et à l&apos;analyse des indicateurs numériques pour les entreprises. Initialement construite sur une architecture monolithique, la plateforme souffrait de problèmes de scalabilité et de performance, notamment lors de pics de trafic et de demandes intensives de traitement de données.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Optimisation de la Base de Données
            👷‍♂️</h2>
          <div>
            <p>
              La base de données de la plateforme Azatys était un facteur limitant majeur en raison de son architecture monolithique. Pour résoudre ce problème, plusieurs techniques ont été mises en œuvre :
              <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                <strong>Indexation Efficace :</strong> Des index ont été ajoutés aux colonnes fréquemment utilisées dans les requêtes pour accélérer les temps de recherche.
              </li>
              <br />
              <li>
                <strong>Sharding :</strong> La base de données MongoDB a été partitionnée horizontalement pour répartir la charge de travail sur plusieurs serveurs, ce qui a réduit les temps de réponse.
              </li>
              <br />
              <li>
                <strong>Optimisation des Requêtes :</strong> Les requêtes SQL ont été analysées et réécrites pour minimiser les opérations coûteuses et éviter les scans complets de tables.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats de l&apos;Optimisation 📈</h2>
            <p>
              Les projets que j&apos;ai réalisés reflètent mon approche du leadership : <br />
            </p>

            <br />
            <ol className="list-disc">
              <li>
                <strong>Réduction de 40%</strong> des temps de réponse des requêtes.
              </li>
              <li>
                <strong>Amélioration de 50%</strong> des performances lors des pics de trafic.
              </li>
              <li>
                <strong>Diminution de 30%</strong> de la charge du serveur de base de données.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Migration vers une Architecture de Microservices 📄</h2>
            <p>
              La migration vers une architecture de microservices a été une étape cruciale pour améliorer la scalabilité et la flexibilité de la plateforme. Cette migration a impliqué : <br />
            </p>

            <br />
            <ul className="list-disc">
              <li>
                <strong>Découpage de l&apos;Application :</strong> L&apos;application monolithique a été décomposée en plusieurs microservices indépendants, chacun responsable d&apos;une fonction spécifique (gestion des utilisateurs, analyse des données, etc.).
              </li>
              <li>
                <strong>Communication entre Microservices :</strong> Les microservices communiquaient via des API RESTful et des files de messages, permettant une interaction asynchrone et réduisant les dépendances.
              </li>
              <li>
                <strong>Déploiement et Orchestration :</strong> Utilisation de Docker pour conteneuriser les microservices et Kubernetes pour leur orchestration, assurant ainsi une gestion efficace des ressources et une haute disponibilité.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats de la Migration 📈</h2>
            <ol className="list-disc">
              <li>
                <strong>Amélioration de 60%</strong> de la scalabilité de l&apos;application.
              </li>
              <li>
                <strong>Temps de déploiement réduit de 70%</strong>, grâce à l&apos;automatisation du pipeline CI/CD.
              </li>
              <li>
                <strong>Augmentation de 50%</strong> de la résilience du système, avec une tolérance accrue aux pannes.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Pipeline CI/CD 💿</h2>
            <p>
              La mise à jour du pipeline CI/CD a permis d&apos;assurer des déploiements continus et sans interruption. Les étapes incluaient : <br />
            </p>

            <br />
            <ul className="list-disc">
              <li>
                <strong>Intégration Continue :</strong>Tests automatisés et intégration continue avec Jenkins, garantissant que chaque modification de code est testée et validée.
              </li>
              <li>
                <strong>Déploiement Continu : </strong>Utilisation de GitLab CI/CD pour automatiser les déploiements des microservices sur l&apos;infrastructure Kubernetes.
              </li>
              <li>
                <strong>Monitoring et Logging :</strong>Implémentation de solutions de monitoring (Prometheus, Grafana) et de logging (ELK stack) pour surveiller la santé des microservices et identifier rapidement les problèmes.
              </li>
            </ul>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion 😎</h2>
          <p>
            Ll&apos;optimisation de la base de données et la migration vers une architecture de microservices pour Azatys ont permis de transformer une plateforme initialement limitée en une solution performante et scalable. Ces améliorations ont non seulement répondu aux besoins actuels de ll&apos;entreprise mais ont également préparé la plateforme à une croissance future. Ce projet illustre comment une approche méthodique et technique peut résoudre des problèmes complexes et améliorer significativement les performances dl&apos;une application.
          </p>
        </div>
      </article>
    </>
  )
}