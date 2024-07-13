/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import perfectionnismImage from "../../../public/images/articles/perfectionniste.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Le perfectionnisme: Qualité ou défaut ?</title>
        <meta name="description" content="Le perfectionnisme: Qualité ou défaut ?" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Le perfectionnisme: Qualité ou défaut ?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              L'intersection entre la passion et la technologie
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={perfectionnismImage}
              width={1250}
            />
          </figure>
          <div>
            <p className="mt-8">
              La perfection est un bien joli mot mais reflète bien de l'iréel que du réel. Même notre nature n'est pas parfaite mais c'est son imperfection qui la rend belle et lui donne tout son sens. Le perfectionnisme dans la société peut être vu comme un avantage par certains et comme un inconveniant pas d'autres, mais, est-ce qu'on ne devrait pas juste la prendre comme elle est et tirer son épingle du jeu ? <br />Depuis tout petit, j'ai toujours voulu faire les choses parfaitement et à chaque fois que je n'y arrivais pas, je recommençais à tel point qu'aujourd'hui, si j'echoue à la 49 ième pompes, je recommence ma serie de 50 pompes à zéro. Ca peut être dur mentalement mais ça me permet de me surpasser et de faire preuve de résilience.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Définition du perfectionnisme</h3>
            <p>
              Le perfectionnisme se défini comme est un trait de personnalité multidimensionnel qui se manifeste par des attentes et des exigences extrêmement élevées envers soi-même ou les autres. Ceci se traduit par l'auto-insatisfaction de son travail et la définition des objectifs presque irréalisable ce qui peut entrainer un sentiments d'incapacité et jouer sur la confiance en soi. <br />Le perfectionnisme peut contribuer à être la meilleur version de soi-même comme elle peut aussi nous enfoncer quand elle est mal géré c'est pourquoi il faut trouver son <b>IKIGAI</b> et mettre des actions en place en direction de celui-ci. Dans cette mesure, on pourra tirer pleinement des bénéfices de perfectionnisme.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">II. Perfectionnisme en tant que qualité</h2>
          <div>
            <p>
              Comme je le disais tantôt, le perfectionnisme tant que qualité peut contribuer à des résultats exceptionnels tant sur le plan personnel que professionnel. Dans le sport notemment en musculation, le perfectionnisme m'a permis d'améliorer ma compréhension de l'anatomie pour mieux visualiser la mécanique des muscles afin d'optimiser leur travail lors de mes séances. Par exemple, j'avais du mal à ressentir mon haut de pectoreau lorsque je les travaille parce que je ne visualisais pas le mouvement au sens musculaire et je ne controlais pas mon mouvement lors de la phase excentrique (qui est une phase capitale pour faire toucher le maximums de fibre musculaire) pour n'en citer que ceux-ci. <br /> <br /> Dans  le domaine professionnel, la qualité de mon travail qui est parfois irreprochable est une conséquence de mon perfectionnisme. Je prend le temps de bien comprendre les problèmes à résoudre afin de proposer des solutions qui se rapprochent le plus possible et de fournir un résultat bluffant. Savoir user de ces qualités nous permet de nous transcender et de nous démarquer des autres en faisant un peu plus et en poussant le bouchont un peu plus loin.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Recherche de l'excellence</h3>
            <p>
              Viser la lune pour attérir sur les étoiles est une expréssion qui résume bien le perfectionnisme. Quand on y est plongé, on peut se noyer très vite. En classe de troisième, j'étais très brillant en Mathématiques à tel point que quand j'avais 19/20, je ne dormais pas bien alors que j'avais toujours l'écart de 5 à 8 points de la deuxième note de la classe. Je commencais à me faire detester pour ça car pendant que j'étais triste de ma note, d'autres qui avait eu 10 étaient entrain de sauter de joie. <br />Au fil du temps, je me suis rendu compte que même avoir 20/20 ne me satisfaisait pas et j'ai compris que ça devenait un problème. L'excellence est une quête sans fin et savoir s'arrêter est capital.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">B. Attention aux détails</h3>
            <p>
              Les details sont innérentes au perfectionnisme ce qui marque la différence entre un travail bien fait et un travail qui se veut "parfait". Dans le développement logiciel, les détails peuvent être gage de perte de temps quand l'essentiel n'a pas encore été fait. Il faut savoir éliminer, si pas mettre de côté les détails afin d'entrer dans les delais de livraison et dans les budgets du projet. <br /> Il est donc essentiel de prendre du recul et de bien définir les éléments important des détails pour ne pas se perdre dans une boucle d'insatisfaction du à ses détails.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. Perfectionnisme en tant que défaut
          </h2>
          <div>
            <p>
              Malheuresement, le perfectionnisme a deux facettes qu'il faut savoir gérer avec modération. Quand apprend à se connaitre et qu'on est perfectionniste, on est subceptible de tomber dans ce côté du perfectionnisme qui peut être néfaste emotionnellement. Il est donc primordial de savoir remettre en question ses habitudes, de s'écouter et d'écouter son entourage. Sans quoi, on risque basculer profondement dans la partie sombre du perfectionnisme et passer à côté de l'essentiel. <br /> Ceci passe par un détachement progressif et un esprit d'auto-critique équilibré pour savoir se recompenser et se féliciter de ses accomplissements.
            </p>
            <h3 className="my-8 text-2xl font-bold tracking-tight dark:text-light">A. Crainte de l'échec</h3>
            <p>
              L'échec a beaucoup été considéré comme quelque chose de mal mais en réalité, c'est une opportunité d'apprendre vraiment. Dans ma vie, j'ai toujours fait de mon possible afin d'éviter l'échec alors que l'échec constructif est parfois idéal pour se remettre en question et apprendre de ses erreurs afin de revenir plus fort.<br /> J'ai eu un parcours académique sans faute mais quand j'ai été confronté à la vie réelle, j'ai pris une claque d'échecs et j'ai du apprendre à me relever et à me battre pour atteindre mes objectifs. Cette crainte peut nous pousser à nous surpasser par tous les moyens comme elle peut nous paralyser et nous empêcher d'atteindre notre plein potentiel. <br />Affronter ses peurs est aussi un exercice d'introspection qui nous poussent à combattre nos propres démons et ce que j'ai constaté c'est qu'à chaque fois que je le faisais, je ressortais plus fort.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
          <div>
            <ul className="list-disc">
              <li>Jinzhu Kong, "How Does Perfectionism Affect Employees' Creativity", 2024</li>
              <li>Veronica Hopkins, D. Gardner, "The mediating role of work engagement and burnout in the relationship between job characteristics and psychological distress among lawyers", 2012, pp. 59</li>
              <li>Fabiano de Abreu Agrela Rodrigues, "Examining the Origin of Decision-Making Blockage and Procrastination: A Study Utilizing Cognitive Neuroscience and Genomics", 2024</li>
              <li>Goran Livazović, Karla Kuzmanović, "Predicting adolescent perfectionism: The role of socio-demographic traits, personal relationships, and media", 2022, pp. 189-204</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}