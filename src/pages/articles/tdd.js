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
          <div className="mt-8">
            <small className="text-gray-500">TDD: Kezako ?🤔</small>
            <p>
              Le TDD pour <b>Test Driven Development</b> est une méthode de développement logiciel qui consiste à écrire les tests d'une fonctionnalité avant d'écrire son implémentation (donc le code de production). Cette méthode permet de garantir que le code déployé est fonctionnel et répond aux spécifications attendues. Il vient aussi rajouter de la qualité dans le code produit tout en documentant celui-ci. Ce qui facilite la maintenance et assure la sécurité des futures modifications. Par ailleurs, dans la communauté des développeurs, le TDD est souvent connu comme un perd temps car écrire des tests prend du temps et celà revient à écrire un double code (celui des test et celui qui va être testé). Nous sommes assez partagé sur le sujet où d'un côté on aura les puristes qui ne jurent que par le TDD, ensuite des neutres qui vont l'utiliser de temps en temps et enfin les opposants qui ne l'utilisent pas du tout.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Contexte du Développement Piloté par les Tests (TDD)
            </h3>
            <p>
              Alors que la granularité de développement était un détail lors de la construction des logiciel, aujourd’hui elle est entretenu grace aux TDD avec une adoption croissance par les entreprise depuis 2015 <b>(plus de 80% des entreprises Tech adoptent le TDD)</b>. En 2003, <b>Kent Beck</b> va démocratiser le TDD dans son livre <b>"Test-Driven Development: By Example"</b> après avoir expérimenter et promu ces idées en 1990 à travers le mouvement <b>Extreme Programming (XP)</b>. Grace à son brillant travail, la communauté commence à s'intéresser de plus en plus à cette méthode et une plaitore d'outils de tests voient le jour. Le principe de cette méthode est de se concentrer sur les <b>comportements</b> afin de fournir un <b>Feedback rapide et de qualité</b>. Pour se faire, nous devons nous rassurer à chaque itération mineure que le code produit soit utile (pour ne pas avoir de code mort), ait le comportement attendu et ne casse pas les comportements existants.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. Priviligié "comportement" dans le TDD
          </h2>
          <div>
            <p>
              Le grand malheur des développeurs est de penser "technique" et non "métier" car la modélisation système est extrêmement mal enseignée. Aujourd'hui quand on se lance sur un projet, on a tendance à se rabattre directement sur les technologies à utiliser au lieu de se concentrer sur les aspects métiers du système ce qui rend l'adoption du TDD dificile car c'est un exercice d'abstraction complexe auquel laplupart ne sont pas habitués. Lorsqu'on veut tirer profit du TDD, il est plusque nécessaire d'encapsuler toutes les règles métiers qui vont constituer l'application avant de penser à ce qu'on appelle les <b>détails d'implémentation</b>. Lorsqu'on s'assure que nos spécifications métiers sont fonctionnelles grace à l'approbation des tests, nous pouvons rajouter d'autres couches en toute sérénité. Se concentrer sur le comportement nous permet non seulement d'être efficace, mais aussi de pouvoir itérer rapidement sur les fonctionnalités de l'application sans régression.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. Importance du Retour d'Information dans le TDD
          </h2>
          <div>
            <p>
              Le retour d'information est un élément clé dans le TDD et parfois négligé par les développeurs ce qui fini par les rattraper. Il y'a de celà quelques années je développais des API REST et la testait avec des logiciels comme <b><a href="https://www.postman.com/" target="_blank" className="underline">Postman</a></b> ou <b><a href="https://insomnia.rest/" target="_blank" className="underline">Insomnia</a></b>. Cette pratique marche très bien mais sur des projets à petit échelle. J'ai été confronté à un projet à grand échelle dans mon entreprise et c'est où je me suis pris un mur. Il fallait à chaque fois lancer tous les services, démarrer le serveur, s'assurer que tout est up, faire la requette depuis postman. S'il y a eu un problème, regarder la console et parfois retracer le source du problème est impossible car on a aucun controle sur le flow d'execution donc on n'est contraint de lancer un débouggeur qu'il faut configurer dépendament du projet sur lequel on travaille. On comprend très vite avec cette pratique que le retour d'information est trop tardif. <br /><br /> On teste toute une chaine pourtant nous aimerions tout juste tester un bout de cette chaine ce qui entraine des résultats parfois incohérents. Par contre, en traitant le problème par granularité, on peut s'assurer que chaque brique joue son rôle attendu et  que l'ensemble fonctionne correctement.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">IV. Comment j'ai tiré profit du TDD ?</h2>
          <p>
            Comme tout ingénieur, nous nous devons de trouver des solutions efficaces qui n'ont pas seulement fonctionné, mais aussi nous permettent d'être plus productifs en se concentrant uniquement (dans la vie réelle, je dirai « le plus souvent » 😅) sur les aspects à fort impact. Aujourd'hui, il existe beaucoup d'outils qui nous permettent de rapidement mettre en place un environnement avec ce qu'il faut, mais il reste encore à savoir distinguer ce dont on a vraiment besoin et ce sur quoi on doit se concentrer. Lors de mon passage chez Azatys, j'ai pu intervenir sur divers projets de l'entreprise. <br /><br />L'un des plus capital était la <a href="https://app.azatys.fr" target="_blank" className="underline">plateforme Azatys</a> qui reposait sur un processus complexe de suivi d'indicateurs digitaux des sites internet et des réseaux sociaux des clients et de leurs concurrents. Ce module de suivi fait appel à de nombreux services, notamment l'<abbr title="Application Programming Interface">API</abbr> d'Azatys pour faire un certain nombre de calculs métiers. Toute la plus-value de l'entreprise est basée sur ces calculs, donc force est de constater que mon engouement allait se focaliser sur le strict fonctionnement de cet aspect métier avant la cérise sur le gateau.<br /><br /> C'est là que le TDD intervient pour me permettre de réaliser cette tâche avec sécurité et un feedback rapide. En définissant les règles métiers avec les professionnels du métier, cela me permet de rédiger des tests sur lesquels ma solution s'appuiera pour s'assurer qu'elle coche toutes les spécifications métiers définies. De la même manière, le TDD est un parfait match avec les méthodes agiles en gestion de projet, car grâce au feedback rapide, on peut déployer des releases régulièrement auprès des utilisateurs et itérer sans régression. C'est ainsi que le TDD m'a permis (avec plus de 2 ans de pratique), de mettre en place un module qui se veut complexe en toute sérénité.
          </p>
          {/* <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">V. Conclusion</h2>
          <p>

          </p> */}
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