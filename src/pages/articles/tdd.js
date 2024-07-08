/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import tdd from "../../../public/images/articles/tdd.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Penser "Comportement" et "Feedback" grâce au TDD</title>
        <meta name="description" content="Penser 'Comportement' et 'Feedback' grâce au TDD" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Penser "Comportement" et "Feedback" grâce au TDD
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Gagner en efficacité et en qualité grâce au Test Driven Development
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={tdd}
              width={1250}
            />
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">I. Introduction</h2>
          <div>
            <small className="text-gray-500">TDD: Kezako ?🤔</small>
            <p>
              De nombreuses études ont souligné l'importance de l'introduction des tests dits <b>test-driven development (TDD)</b> dans le processus de développement logiciel. En effet, cette approche centrée sur les tests permet non seulement de garantir la qualité du code produit, mais également d'améliorer la réflexion et le comportement du développeur tout au long du processus de programmation. En exigeant que les tests soient écrits avant même que le code ne soit implémenté, le TDD encourage une approche itérative qui favorise la réflexion critique et la planification préalable. De plus, la rétroaction immédiate offerte par les tests unitaires permet aux développeurs de corriger rapidement les erreurs et de mieux comprendre les implications de leurs décisions de conception. En somme, le TDD peut être considéré comme un outil puissant pour favoriser une pensée réfléchie et des pratiques de programmation de qualité.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Contexte du Développement Piloté par les Tests (TDD)
            </h3>
            <p>
              Les modèles de pensée des systèmes de conception <b>(Design systems thinking)</b> et les attributs d'un ingénieur global revêtent une importance capitale dans le contexte du Développement piloté par les tests (TDD), offrant un cadre robuste pour la promotion de l'innovation et de l'adaptation aux besoins évolutifs de la communauté des ingénieurs. Le Design systems thinking, combinant la pensée systémique et la pensée design, offre une approche holistique et expérimentale pour résoudre les problèmes complexes, stimulant la créativité tout en mettant l'accent sur la construction de modèles et l'apprentissage continu (cf. <a href="https://www.semanticscholar.org/paper/Design-Systems-Thinking-for-Innovation-in-an-Melton/967376c520173da21d5e1bea7d500b4d940b8ce7" target="_blank" className="italic underline">D. Melton</a>). Parallèlement, les attributs identifiés pour un ingénieur global mettent en lumière l'importance d'une perspective internationale, de la communication efficace et de la pensée critique, des compétences nécéssaires pour prospérer dans un environnement mondialisé (cf. <a href="https://www.semanticscholar.org/paper/The-Attributes-of-a-Global-Engineer-Project%3A-Hundley-Brown/ffb321fdcb5afede91e7f478b9b1ef50e59599f4" target="_blank" className="italic underline">S. Hundley.</a>). En intégrant ces concepts dans le cadre du TDD, il est possible d'améliorer la rétroaction, d'encourager un comportement réflexif et d'assurer le développement continu des pratiques d'ingénierie selon les standards les plus élevés.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. Compréhension du Comportement de Pensée dans le TDD
          </h2>
          <div>
            <p>
              En analysant le comportement de pensée dans le TDD, il est essentiel de comprendre comment les programmeurs interprètent les retours d'information générés par leurs tests. Cette compréhension est capitale pour évaluer comment les développeurs intègrent ces retours dans leur processus de développement. En effet, différents facteurs peuvent influencer la manière dont les individus interprètent les résultats des tests et ajustent leur code en conséquence. Par exemple, la confiance en soi, l'expérience antérieure et les connaissances techniques peuvent jouer un rôle significatif dans la façon dont un développeur réagit aux résultats des tests. En examinant de plus près ces aspects, il est possible de mieux appréhender les dynamiques sous-jacentes du comportement de pensée dans le cadre du TDD. Des études empiriques approfondies pourraient aider à élucider ces mécanismes et à identifier les meilleures pratiques à adopter. L'intégration de ces connaissances pourrait permettre d'améliorer de manière significative l'efficacité du processus de développement logiciel.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Processus Cognitifs Impliqués dans le TDD
            </h3>
            <p>
              Une des clés de compréhension des processus cognitifs impliqués dans le Test-Driven Development (TDD) réside dans la corrélation entre l'évolution des comportements et l'adaptation du cerveau. Selon <a href="https://www.semanticscholar.org/paper/the-ANN-%22Evolution-of-the-arthropod-brain-from-to-Schneider-Itani/2b4c87346e00ee303111872ea789782ebbe5bca4" target="_blank" className="italic underline">Anna C. Schneider.</a>, l'innovation neuronale et la complexification sont à l'origine de la diversité comportementale, soulignant ainsi la relation étroite entre l'évolution du cerveau et des comportements spécifiques. De plus, <a href="https://www.semanticscholar.org/paper/Implementing-Mobile-Games-into-Care-Services-Models-Merilampi-Koivisto/9d2a41b342cef1b1f764c039ab5a91acebeacf96" target="_blank" className="italic underline">S. Merilampi, p. 55</a> met en lumière l'importance de la stimulation cognitive à travers des jeux mobiles pour les personnes âgées, soulignant l'efficacité des activités ludiques dans le processus de réhabilitation. Ces études soulignent donc l'impact décisif de l'interaction entre les facultés cognitives et les environnements d'apprentissage dans le contexte du TDD. En intégrant ces notions, il devient clair que les processus cognitifs engagés dans le TDD ne sont pas seulement responsables de l'exécution des tâches, mais également de l'adaptation du cerveau aux exigences changeantes de la programmation.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. Importance du Retour d'Information dans le TDD
          </h2>
          <div>
            <p>
              Dans le contexte du Développement piloté par les tests (TDD), l'importance du retour d'information est primordiale pour améliorer les pratiques d'apprentissage et d'intervention. En s'appuyant sur les personas dans le processus de design thinking, il est possible d'analyser et de regrouper les schémas de comportement d'apprentissage des apprenants en groupes distincts. Les données des apprenants, telles que les résultats d'apprentissage factuels et l'expérience perçue, peuvent être regroupées à l'aide de méthodes d'apprentissage non supervisées pour concevoir des personas basées sur les données. De plus, l'utilisation de comportements de régulation de l'attention comme prédicteurs de personas peut conduire à des résultats significatifs dans le domaine de l'apprentissage en ligne. Dans le même ordre d'idées, l'utilisation de plateformes numériques pour atteindre les jeunes personnes et collecter des données sur leurs comportements à risque nécessite un processus de développement centré sur les utilisateurs. L'application <b>REACH-AYA</b>, développée dans le cadre d'une approche de design thinking, a permis d'identifier des facteurs de protection et de risque pour la santé des jeunes, démontrant ainsi l'efficacité des méthodologies centrées sur l'utilisateur dans la recherche numérique. Ces études soulignent l'importance de tirer parti des retours d'information et des méthodes centrées sur l'utilisateur pour améliorer les pratiques d'apprentissage et d'intervention, en particulier dans le cadre du TDD. La combinaison de ces approches peut conduire à des résultats plus pertinents et adaptés aux besoins des apprenants.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Types de Mécanismes de Retour d'Information dans le TDD
            </h3>
            <p>
              Les types de mécanismes de retour d'information dans le Test-Driven Development (TDD) jouent un rôle fondamental dans la manière dont les développeurs interagissent avec le processus de développement logiciel. En adoptant une perspective systémique inspirée des <a href="https://www.semanticscholar.org/paper/A-System-Dynamics-Approach-of-Users%E2%80%99-Dynamic-for-in-Li-Deng/7749e26f4b6f3f60616faf5145f5bc18f0cbd37c" target="_blank" className="italic underline">archétypes d'acquisition</a>, il est possible de comprendre les dynamiques sous-jacentes qui influencent les comportements des développeurs et des gestionnaires tout au long du cycle de vie du logiciel. En examinant les différents types d'utilisateurs de services mobiles dans le contexte des bibliothèques mobiles, on peut tirer des enseignements sur la manière dont la diversité des besoins et des orientations des utilisateurs peut être prise en compte pour améliorer la qualité des services logiciels. Ces principes peuvent être appliqués pour identifier les mécanismes de retour d'information les plus efficaces dans le TDD et ainsi favoriser une collaboration plus fluide et une meilleure rétroaction tout au long du processus de développement.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">IV. Comment j'ai tiré profit du TDD ?</h2>
          <p>
            Comme tout ingénieur, nous nous devons de trouver des solutions efficaces qui n'ont pas seulement fonctionné, mais aussi nous permettent d'être plus productifs en se concentrant uniquement (dans la vie réelle, je dirai « le plus souvent » 😅) sur les aspects à fort impact. Aujourd'hui, il existe beaucoup d'outils qui nous permettent de rapidement mettre en place un environnement avec ce qu'il faut, mais il reste encore à savoir distinguer ce dont on a vraiment besoin et ce sur quoi on doit se concentrer. Lors de mon passage chez Azatys, j'ai pu intervenir sur divers projets de l'entreprise. L'un des plus capital était la <a href="https://app.azatys.fr" target="_blank" className="underline">plateforme Azatys</a> qui reposait sur un processus complexe de suivi d'indicateurs digitaux des sites internet et des réseaux sociaux des clients et de leurs concurrents. Ce module de suivi fait appel à de nombreux services, notamment l'<abbr title="Application Programming Interface">API</abbr> d'Azatys pour faire un certain nombre de calculs métiers. Toute la plus-value de l'entreprise est basée sur ces calculs, donc force est de constater que mon engouement allait se focaliser sur le strict fonctionnement de cet aspect métier avant la cérise sur le gateau. C'est là que le TDD intervient pour me permettre de réaliser cette tâche avec sécurité et un feedback rapide. En définissant les règles métiers avec les professionnels du métier, cela me permet de rédiger des tests sur lesquels ma solution s'appuiera pour s'assurer qu'elle coche toutes les spécifications métiers définies. De la même manière, le TDD est un parfait match avec les méthodes agiles en gestion de projet, car grâce au feedback rapide, on peut déployer des releases régulièrement auprès des utilisateurs et itérer sans régression. C'est ainsi que le TDD m'a permis (avec plus de 2 ans de pratique), de mettre en place un module qui se veut complexe en toute sérénité.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">V. Conclusion</h2>
          <p>
            La conception centrée sur l'humain s'avère essentielle pour le développement de programmes de parentalité adaptés aux besoins uniques des parents d'enfants atteints de TDAH, comme Lindique <a href="https://www.semanticscholar.org/paper/Using-a-Design-Thinking-Approach-to-Develop-a-for-Yamubon-Thongseiratch/20f60262de2abfc252f5093be4c6c7dc623dbbe1" target="_blank" className="italic underline">Umaporn Yamubon.</a>. En effet, en exploitant les plateformes de médias sociaux telles que LINE, ces programmes peuvent surmonter les défis posés par la pandémie de COVID-19 et d'autres contraintes rencontrées par les parents. De même, l'intégration de la pensée systémique et de la théorie de la complexité dans la pratique de la médecine d'urgence peut non seulement améliorer la prise en charge des patients, mais aussi renforcer notre capacité à comprendre et à renforcer nos systèmes de soins de manière plus large, comme le souligne <a href="https://www.semanticscholar.org/paper/ea21b59ea8da3687b5f62453c224f827916277ca" target="_blank" className="italic underline">Evan Rusoja.</a>. Ces approches offrent des modèles d'adaptation et de collaboration essentiels pour relever les défis actuels et futurs, mettant en lumière l'importance d'une approche holistique et interdisciplinaire en réponse aux situations complexes telles que la pandémie de COVID-19.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>D. Melton, "Design Systems Thinking for Innovation in an Engineering Faculty Development Program", 2021</li>
              <li>Evan Rusoja, R. Chad Swanson, Mini Swift, "Using Systems Thinking and Complexity Theory to understand and improve Emergency Medicine: Lessons from COVID-19 in a safety net health system.", 2023</li>
              <li>Anna C. Schneider, O. Itani, Elizabeth M. Cronin, Dirk Bucher, F. Nadim, "the ANN "Evolution of the arthropod brain - from development to structure" Final Program", 2022</li>
              <li>Umaporn Yamubon, Therdpong Thongseiratch, "Using a Design Thinking Approach to Develop a Social Media-Based Parenting Program for Parents of Children With Attention-Deficit/Hyperactivity Disorder: Mixed Methods Study", 2023</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}