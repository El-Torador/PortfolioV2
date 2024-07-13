/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import autonomyImage from "../../../public/images/articles/autonomy.jpg";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · L'autonomie: un piège ou un avantage ?</title>
        <meta name="description" content="L'autonomie: un piège ou un avantage ?" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              L'autonomie: un piège ou un avantage ?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Une qualité controversée
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={autonomyImage}
              width={1250}
            />
          </figure>
          <div>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Définition de l'autonomie</h3>
            <p>
              L'autonomie peut être définie comme la capacité pour un individu ou une entité de prendre des décisions de manière indépendante, en se basant sur ses propres valeurs, connaissances et objectifs. Dans l'histoire, l'autonomie a permis aux être humain de se démarquer dans de nombreux domaines individuels notamment celui du développement personnel. <br /> <br /> Elle est beaucoup vu comme une qualité parfois au détriment du travail en équipe. Il a été prouvé scientifiquement qu'en fonction de notre abilité à être soit estraverti ou intraverti, nous allons être plus alaise à travailler en toute autonomie ou en équipe. Les exceptions existent toujours mais c'est un biais qui est souvent observé.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">
              B. Importance de l'autonomie dans la société
            </h3>
            <p>
              L'importance de l'autonomie dans la société se révèle être un élément capital pour le développement individuel et collectif. Plus un individu va travailler sur lui, plus celà aura un impact sur la société à grande echelle. C'est pourquoi il est important de savoir tirer le meilleur des parties quand il faut travailler en autonomie et quand il faut travailler en équipe.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">II. L'autonomie comme un piège</h2>
          <div>
            <p>
              L'autonomie peut également être considérée comme un piège en raison de la responsabilité accrue qui l'accompagne. En prenant en compte les décisions de manière autonome sans consulter un avis externe, <b>nos choix peuvent être biaisés et on n'a parfois pas une vue à 360° de la situation</b>. Dans mon cas par exemple, je suis souvent confronté à le faire même si je n'ai pas compris totalement ce que je dois faire où si je suis bloqué. Je vais essayer de trouver une solution de moi-même ou de partir sur une solution avant de demander l'avis extérieur et celà peut s'avérer comme un piège car non seulement je vais perdre du temps mais aussi, perdre en confiance car je n'ai pas atteint l'objectif demandé.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Risques d'isolement</h3>
            <p>
              L'autonomie peut également entraîner des risques d'isolement social, en particulier dans un monde de plus en plus connecté. En ce qui me concerne, quand je prend des décisions de manière autonome, je peux me retrouver isolé de ma communauté et de mon réseau social, ce qui peut avoir des conséquences néfastes sur mon bien-être émotionnel et mental. Aujourd'hui, j'essaye de progresser sur cet aspect et de vraiment savoir faire la part des choses dans ma façon de travailler et c'est un exercice très difficile mais bénéfique pour moi.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. L'autonomie comme un avantage
          </h2>
          <div>
            <p>
              Dans le marché de l'emploi Tech, <b>85% des offres demandent aux candidats à être Autonome et dans ce pourcentage, on a 90% des startups</b>. Si je devais définir en un seul mot ce que l'autonomie m'a apporté je dirais le "libre arbitre". Ma formation en informatique est passée par une grande partie d'auto-didacte où j'ai appris comment recherché les solutions de moi-même (ce qui est un grand atout en tant qu'Ingénieur...). Plus je travaillais en autonomie, plus je progressais et plus j'avais confiance en moi. Je suis toujours parti du principe que tout part d'une tête avant de s'étendre et grandir dans une équipe. Et travailler seul me permet de controler ce que je fais et donc d'être plus productif même si certaines choses peuvent nous échapper.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">IV. L'autonomie applicable à moi</h2>
          <p>
            Mon côté perfectionniste m'a toujours mis dans cette bulle où je me sens obligé de tout contrôler. Il m'a aussi souvent empêché de profiter pleinement de mes expériences et de m'ouvrir à de nouvelles opportunités. En prenant conscience de celà, j'ai commencé à explorer des moyens de lâcher prise et de faire confiance au processus. En me permettant de lâcher prise et de faire confiance à mon intuition, j'ai découvert une nouvelle forme de liberté et de créativité qui m'a permis de m'épanouir pleinement. <br /> <br />
            Je dirais que l'autonomie n'est pas seulement une question de contrôle, mais aussi de confiance en soi et de capacité à s'adapter aux circonstances changeantes de la vie. J'ai embrassé l'autonomie de manière équilibrée, ce qui m'a permis de trouver un équilibre entre liberté et responsabilité, me permettant de vivre pleinement ma vie tout en restant ouvert aux opportunités et aux défis qui se présentent à moi.
          </p>
          {/* <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">V. Conclusion</h2>
          <p>
            L'examen critique des informations citées révèle des perspectives intéressantes sur le concept de l'autonomie et son impact sur divers domaines. En se référant à <a href="https://www.semanticscholar.org/paper/c2fd7da9103c9b15fb5a67f11558c2b906c3d852" target="_blank" className="underline">Maryam Shahveisi</a>, il est démontré que la prise de décision partagée lors du choix de la méthode d'analgésie du travail peut améliorer de manière significative l'expérience et la satisfaction lors de l'accouchement chez les primipares. Cela souligne l'importance de donner aux femmes un rôle actif dans les décisions concernant leur santé maternelle, mettant en lumière les avantages d'une autonomie informée. De plus, l'étude présentée dans <a href="https://www.semanticscholar.org/paper/d927d1c83414fb1bfe74d1a64b1a927ec3901898" target="_blank" className="underline">Alexander Frank Pasquel Cajas</a> sur le travail à distance au Pérou pendant la pandémie de COVID-19 met en évidence les défis et les opportunités liés à cette forme de travail autonome. Ces résultats soulignent la nécessité de trouver un équilibre entre autonomie et soutien dans un contexte de travail éloigné. Ainsi, ces deux études contribuent à enrichir la réflexion sur la manière dont l'autonomie peut être à la fois un piège et un avantage, offrant des perspectives variées pour comprendre ce concept complexe.
          </p> */}
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>Alexander Frank Pasquel Cajas, Verónica Tomasa Cajas Bravo, Roberto Carlos Dávila Morán, "Remote Work in Peru during the COVID-19 Pandemic", 2023</li>
              <li>Beňo, Michal, "The Advantages and Disadvantages of E-working: An Examination using an ALDINE Analysis", 'Ital Publication', 2021</li>
              <li>Longo, Paulo Jorge Mendes Forte, "A study into telework: its advantages, disadvantages, and future business practices", 2022</li>
              <li>Naina Kumar, "Vaginal contraception: a roadmap to women's reproductive autonomy-a narrative review", 2023</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}