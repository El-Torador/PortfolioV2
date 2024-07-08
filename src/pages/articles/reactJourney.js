/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import reactImage from "../../../public/images/articles/react.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Comment j&apos;ai connu React JS</title>
        <meta name="description" content="Comment j&apos;ai connu React JS" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Comment j&apos;ai connu React JS
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Quand je trouve une technologie qui me correspond
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={reactImage}
              width={1250}
            />
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction</h2>
          <p>
            En 2016, lors de l'obtention de mon baccalauréat, je suis toujours aussi passionné par les mathématiques, la physique et l'informatique en général. Durant ces périodes, je travaillais encore sur des programmes basés en C et C++, et je n'avais pas encore l'occasion de travailler sur les technologies web. Pour poursuivre mes passions, j'intègre la FAC de Dschang (une ville à l'ouest du Cameroun) en Physique, où je fais un an plein de découvertes et de rencontres. Un an plus tard, je décide d'entrer dans une école d'ingénieur en informatique à Yaoundé (la capitale du Cameroun) pour me spécialiser dans le développement d'applications qui me fascinait déjà. Cette formation devrait s'étaler sur 3 ans pour clôturer avec une soutenance de fin d'études accompagné d'un rapport de stage effectué sur 6 mois. Mais ce qui m'a fait basculer n'est pas un évènement lié à cette formation.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Une rencontre entre passionnés au pieds de la porte du Web via le JavaScript</h2>
          <p>
            Lorsque j'intègre l'école, je fais la connaissance de deux autres passionnées du nom de <b>Marc</b> et <b>Florian</b>. Marc était un prodige du web avec son redoutable langage, le PHP. Quant à Florian, le Python était comme son souffle de vie, et je les admirais tellement. Il faisait des choses hallucinantes avec leurs outils respectifs et avec eux j'apprenais chaque jour et progressait sans même m'en rendre compte car c'était tellement jouissif le temps qu'on passait ensemble à donner vies à nos idées. Moi au milieu qui était complètement à la ramasse, avec mes compétences en C et C++, mais je ne savais quasiment rien faire avec car je manquais de créativité. On partageait la même vision pour une passion qui nous faisait vibrer: <b>l'entreprenariat</b>. Pour nourrir cette passion et pour me prouver aussi à moi-même que je suis capable, je me suis donné donc pour l'objectif de créer une application Web de Messagerie Instantané. C'est là que commence mon chemin dans le Web, je commence par apprendre le PHP, je monte en compétence très vite dessus, et je commence à ma fameuse application. J'avance plutôt bien jusqu'à ce que survient une problématique. Je faisais du <b>rendu côté serveur (SSR pour Server Side Rendering)</b> avec PHP, et j'avais besoin que l'interface soit interactive et ne se rafraichi pas quand un utilisateur envoie un message. Mais je ne savais pas comment le faire. J'ai effectué des recherches et je suis tombé sur des solutions comme JQuery, qui était très populaire à cette époque. Je me lance donc avec cette bibliothèque sans même connaitre le Javascript 😅 et figurez-vous que j'avance plutôt bien. Comme quoi, le JavaScript et moi sont fait l'un pour l'autre🫂. J'aime souvent dire que <i>«j'ai compris le JavaScript sans connaitre son identité»</i>. <br />
            Plus j'avance, plus je fais face aux difficultés, plus je trouve des solutions, plus j'ai de nouvelles idées. C'est comme ça que j'entre alors dans une spirale de dopamine qui me fait apprendre beaucoup de notions et de comprendre un peu plus comment le Web fonctionne. <br /> <br />

            J'arrive à terminer mon application, je fais un déploiement dans l'intranet de l'école, et j'invite mes amis à se créer un compte et d'utiliser l'application. J'ai plutôt des retours positifs malgré quelques bugs que j'arrive rapidement à résoudre, d'autres étudiants s'inscrivent et finissent par apprécier les fonctionnalités, notamment: <br />
            <ul className="list-disc ml-6">
              <li>Les émojis</li>
              <li>La possibilité de réagir sur un message</li>
              <li>La possibilité de créer un groupe</li>
              <li>La possibilité d'avoir de multiple fenêtres et de chatter avec plusieurs personnes à la fois.</li>
            </ul>
            Pour une version Béta, c'était plutôt sympa.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Le tournant 👨‍💻</h2>
          <div>
            <p>
              Cette Réalisation m'a tellement aidé moralement car j'avais besoin de me prouver à moi-même que j'étais capable de réaliser quelque chose pour me sentir légitime d'être l'ami de Marc et Florian et de leur montrer aussi de quoi j'étais capable. Par la suite, un de nos professeurs nous a contacté à trois pour un projet dans lequel il aimerait qu'on apporte nos compétences en échange d'une rémunération. Étant donné qu'on avait pour but de monter une startup ensemble et qu'on avait besoin d'argent, nous avons accepté l'offre et nous avons été invité à une première réunion préparatoire avec le client pour comprendre les enjeux du projet dans lequel nous allons intervenir. À cette époque, j'étais comme une ballon ramolli assoiffé de connaissances, j'avais besoin de me remplir de tout cet air qui m'était vital. C'est pourquoi je m'attardais beaucoup plus sur les outils ou technologies que nous allons utiliser pour réaliser un ledit projet. C'était surement naïf ou débutant d'avoir une telle approche, mais en ce moment je ne me posais pas encore ces questions. À cette période (fin d'année 2018), les librairies Frontend comme React JS, Angular étaient déjà très connus, et un nouveau qui venait de se faire sa place sur le marché était Vue JS. Étant donné que j'avais une sensibilité pour le frontend, dans mon équipe (avec Marc et Florian), je devais m'occuper de cette partie. <br />
              Une fois la réunion terminée, les technologies sont dévoilées et nous partirons sur le Vue JS sur le frontend et PHP en backend avec quelques fonctionnalités serverless en Python et Node JS. Je commence aussi tôt à m'imprégner de Vue JS tel un Tigre affamé et, entre les lignes, je tombe sur React JS qui me fait un électro-choc mais je le mets de côté pour revenir dessus explorer plus tard. Je continue d'avancer sur ma montée en compétence sur Vue JS avec des mini-projets avant de commencer finalement le projet. Nous sommes mentorés par des professionnels du besoin métier et notre professeur qui nous a sollicité. Le projet avance à bon rythme avec des délais respectés et des résultats promettants. Et fut un moment où le projet a été mis en stand-by pour un soucis priorisation à cause du budget et on devait se concentrer à sortir un module indépendant de l'application d'E-Commerce sur laquelle on travaillait et qui devait être fait cette fois en React JS. Il y'avais déjà une équipe dessus et je devais rejoindre l'équipe pour catalyser son développement. Le déclic pour moi arrive quand je rejoins cette équipe de dev React. Il partageait tout, difficulté, joie, victoire, réussite, etc. L'atmosphère était conviviale, et ils étaient vraiment passionnés de ce framework crée par Facebook. Je profite de cette occasion pour rapidement me mettre en marche et je constate instantanément quelque chose de fort avec React, c'est sa façon de penser Interface Utilisateur qui est la même logique que j'avais eu après avoir rencontré des soucis de cohérence en travaillant avec JQuery. J'adhère donc rapidement à sa philosophie et je progresse avec prouesse dessus. Je commence à me faire solliciter par l'équipe sur des taches de plus en plus complexes ce qui m'auto-challenge et me stimule, un sentiment que j'ai toujours vérifié jusqu'aujourd'hui avant de rejoindre une entreprise où d'intégrer un projet.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion</h2>
          <p>
            Aujourd'hui, je vie pleinement ma passion, même si mon objectif entreprenarial n'y est pas encore. J'ai pu et continue à explorer les possibilités que m'offrent l'écosystème enrichissant du JavaScript et rencontrer encore d'autres passionnés qui ont beaucoup impacté ma vision dans ce milieu, même si j'ai toujours su ce que je voulais, ce parcours m'a fait me rendre compte au fur et à mésure que je suis sur la bonne voie. <br />
            Ce flashback n'est qu'une infine partie de ce que j'ai vecu tout au long de mon miniscule parcours (parce que j'estime que j'ai encore beaucoup de choses devant moi 😁), mais est tellement significatif, car il a totalement basculé mon choix de carrière. Et si j'avais un livre de notes des moments mémorables de ma vie, je le mabrais à l'intérieur. Et que dire d'autre? Et ben, que l'aventure continue 🥳
          </p>
        </div>
      </article>
    </>
  )
}