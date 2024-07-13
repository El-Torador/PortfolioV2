import Head from "next/head";
import Image from "next/image";
import surferLogo from "../../../public/images/articles/surfer.png";
import feedback from "../../../public/images/articles/feedbacks.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Surfer</title>
        <meta name="description" content="Un Voyage Entrepreneurial au Coeur du Techday: L'Essor de Surfer" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Un Voyage Entrepreneurial au Coeur du Techday: L&apos;Essor de Surfer
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
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Contexte de la réalisation 🤓</h2>
          <p>
            Pendant mon parcours à l&apos;ESIEA, j&apos;ai rencontré de nombreux défis, dont l&apos;un des plus marquants a été le Techday. Cet événement exige des étudiants de mettre en pratique leurs connaissances acquises dans la réalisation d&apos;un projet qu&apos;ils présenteront à des investisseurs potentiels et à des professeurs après trois mois de travail intense, organisés en quatres sprints. Cet exercice vise à nous plonger dans la peau d’un entrepreneur. C’est dans ce cadre exigeant et exaltant qu&apos;est né Surfer, le projet sur lequel mon équipe et moi avons travaillé, et que nous avons présenté avec une immense fierté.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Présentation et Définition du Projet</h2>
          <p>
            <a className="hover:underline" href="https://surfer-omega.vercel.app" target="_blank">Surfer</a> est un réseau social professionnel novateur, centré sur les centres d&apos;intérêt des utilisateurs. Son objectif est de créer des connexions authentiques entre professionnels, chercheurs, entrepreneurs et passionnés grâce à un système de recommandations basé sur des algorithmes sophistiqués. L&apos;idée est née de l&apos;observation que les étudiants de l&apos;ESIEA ont des centres d&apos;intérêt variés et parfois communs. Cela représente une opportunité unique de fédérer ces passions et de renforcer les liens entre les deux écoles du Groupe ESIEA.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">L&apos;équipe 🤔</h2>
          <div>
            <p>
              Notre équipe se composait de trois membres passionnés : <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                Moi-même, en tant que Lead Technique, responsable de la planification, du développement et du soutien des membres de l&apos;équipe.
              </li>
              <br />
              <li>
                Koko Eddy, Développeur.
              </li>
              <br />
              <li>
                Laoudy Youcef, Développeur.
              </li>
            </ol>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conception et Développement 📄</h2>
          <div>
            <p>
              En tant que Lead Technique, j&apos;ai veillé à ce que chaque membre de l&apos;équipe travaille avec les technologies qu&apos;il maîtrise le mieux. Nous avons trouvé un terrain d&apos;entente avec JavaScript et TypeScript, et j&apos;ai guidé l&apos;équipe à travers les différentes phases du projet tels que <strong>la définition des spécifications, la conception du système d&apos;information, la réalisation des maquettes et le developpement de l&apos;applcation.</strong> <br /> <br />
              Le développement de Surfer a été réalisé avec les technologies suivantes :
            </p>
            <br />
            <ul className="list-disc">
              <li>
                <strong>NextJS :</strong> Pour le rendu côté serveur et la création d&apos;une application rapide et réactive.
              </li>
              <br />
              <li>
                <strong>RecoilJS : </strong> our la gestion de l&apos;état global de l&apos;application.
              </li>
              <br />
              <li>
                <strong>AdonisJS : </strong> Pour la gestion du backend, garantissant une API robuste et sécurisée.
              </li>
              <br />
              <li>
                <strong>TypeScript :</strong> Pour la fiabilité et la maintenabilité du code.
              </li>
              <br />
              <li>
                <strong>PostgreSQL :</strong> Comme base de données relationnelle, garantissant des transactions sécurisées et des requêtes performantes.
              </li>
              <br />
              <li>
                <strong>SSE (Server-Sent Events) :</strong> Pour fournir des mises à jour en temps réel aux utilisateurs.
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
              Chaque itération de développement représentait un défi majeur :
            </p>
            <br />
            <br />
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
            </ol>
            <br /><br />
            La réussite de ces itérations était déterminantes non seulement pour valider mon semestre, mais aussi pour fournir des arguments solides en vue de présenter notre projet au Directeur M. Roussel, afin qu&apos;il soit adopté et déployé au sein de l&apos;infrastructure du Groupe ESIEA.
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Risques et Difficultés 😢</h2>
          <p>
            Après le succès des premières itérations (100% et 83%), nous avons sous-estimé la complexité des objectifs suivants. J&apos;ai fait l&apos;erreur classique d&apos;un leader en tentant de tout faire moi-même, ce qui a conduit à un échec de l&apos;itération 3 avec un score de 64%. Cette expérience m&apos;a enseigné l&apos;importance de la confiance et de la délégation au sein d&apos;une équipe. En remobilisant notre groupe, nous avons terminé la quatrième itération avec un score impressionnant de 94%.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Objectifs Poursuivis</h2>
          <p>
            Les itérations ont marqué la première étape de nos objectifs communs, pour mon équipe et moi. Ces objectifs m&apos;ont permis de clarifier mon rôle de leader en apprenant à faire confiance à mon équipe. Leur progression et reconnaissance ont renforcé ma détermination à ne pas les décevoir. Cela correspond parfaitement à mon profil, car j&apos;aime prendre des responsabilités qui ont du sens pour moi, surtout lorsqu&apos;il s&apos;agit de personnes qui croient en moi et sont prêtes à me suivre et à m&apos;aider dans les moments difficiles. C&apos;est dans cette expérience que j&apos;ai le mieux compris, à ce jour, ce que signifie réellement manager une équipe.

            Dans la continuité de Surfer, j&apos;ai dû préparer une présentation du projet au Directeur du Groupe ESIEA pour démontrer comment Surfer peut fédérer les deux écoles, Intech et ESIEA, et devenir la plateforme par excellence du Groupe, permettant à chacun d&apos;échanger et de partager ses passions.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Étapes Clés 🔑</h2>
          <p>
            Mon rôle principal était de mener à bien le projet pour valider les itérations et de préparer une présentation pour le Directeur de l&apos;ESIEA. J&apos;ai travaillé sur le pitch et amélioré les fonctionnalités existantes en fonction des retours des étudiants. Un de mes collègues s&apos;est occupé des aspects administratifs, et nous avons tenu des réunions hebdomadaires pour faire le point.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Résultats 😼</h2>
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
            Les résultats ont été très positifs, tant pour les itérations que pour la présentation au Directeur. Il a rapidement saisi le potentiel de Surfer et a donné son feu vert pour déployer une première version au sein de l&apos;infrastructure de l&apos;école. Le déploiement initial a attiré un trafic considérable, avec plus de 50 posts toutes les deux heures sur différents centres d&apos;intérêt, mais nous avons dû faire face à des défis liés aux coûts d&apos;infrastructure et aux politiques RGPD.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Lendemain du Projet</h2>
          <p>
            Ces défis nous ont amenés à envisager de rendre Surfer open source, permettant ainsi aux étudiants de contribuer et de maintenir l&apos;outil. Nous avons également réfléchi à une architecture flexible pour optimiser les opérations tout en minimisant les coûts.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Mon Regard Critique 🤓</h2>
          <p>
            Cette aventure m&apos;a permis de mieux me connaître et d&apos;affiner ma vision du leadership. J&apos;ai progressé techniquement et personnellement en prenant des responsabilités, en gérant le stress et en soutenant mon équipe. Les erreurs commises ont été des leçons précieuses qui m&apos;ont aidé à évoluer. Comme le dit le proverbe, <q>ce qui ne nous tue pas nous rend plus fort</q>. <br /> <br />

            En somme, le projet Surfer a été une expérience inoubliable et formatrice, qui a non seulement enrichi mes compétences techniques et mon leadership, mais aussi renforcé ma passion pour l&apos;entrepreneuriat.
          </p>
        </div>
      </article>
    </>
  )
}