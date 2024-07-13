/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import vui from "../../../public/images/articles/vui.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · VUI</title>
        <meta name="description" content="La Voix : Une Interface Technologiquement Disruptive" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              La Voix : Une Interface Technologiquement Disruptive
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Jusqu&apos;à où la voix peut-elle nous mener ?
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={vui}
              width={1250}
            />
          </figure>
          <p className="mt-8">
            La voix est un facteur de productivité entre les hommes depuis très très longtemps. Elle apparaît il y’a environ 2 millions d’années avec l’Homo-Erectus et à l’époque c’était plutôt un proto-langage c'est-à-dire un instrument qui se formalisait et permettait des interactions plus abouties. Mais en réalité, la voix au sens du langage que l’on connait aujourd’hui émerge avec l’Homo-Sapiens il y’a <b>100 000 ans</b> et force est de constaté que 100 000 ans c’est beaucoup plus encré dans notre espèce que l’écriture, il y’a <b>5000 ans</b>. Donc cette interface entre Hommes est une interface qui est profonde chez nous et <b>presque primitive (profondément ancré dans notre cortex)</b> qui fait appel à tous nos capacités cognitives tandis que l’image et les mots sont des interfaces plus récentes et ont tendance à plus polariser les esprits, en d’autres termes, prendre des raccourcis plus moderne. <br /> <br />
            Nous observons une émergence de la voix en tant que Interface Homme-Machine depuis plus de 10 ans maintenant avec les sociétés comme Apple et leur assistant Vocal Siri qui ont mis dans les mains des utilisateurs ces types d’interface Homme-Machine.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. L'Évolution des Interfaces Humain-Machine
          </h2>
          <div>
            <p>
              Il y’a 70 ans, les ordinateurs étaient extrêmement compliqués, il fallait un Phd pour pouvoir utiliser un ordinateur. Ces ordinateurs embarquaient déjà un type Interface Homme-Machine appelé CLI (Command Line Interface) donc Unix en l'occurrence. Puis plus tard, les interfaces graphiques qui ont été popularisées par Apple sous la Gouvernance de Steve Jobs, Le macintosh. Ensuite au début des années 2000, les interfaces tactiles 10 ans plus tard, donc le smartphone et l’émergence de l’interface tactile qui permet aux plus grand nombres d’utiliser la technologie. Et aujourd’hui, (je partage la même vision que l’entreprise française Snips.ai), qu’on le veuille ou non, l’interface vocale est la prochaine interface machine massivement distribuée. <br /><br />
              Ceci commence à se manifester par les GAFA qui ont commencé vendre son premier objet communiquant à la Fnac en décembre 2018 et qui s’est fait rattrapé en France par Amazon qui lance son produit Alexia un mois plus tard. Sachant qu’Amazon était déjà en avance au États-Unis à cette période en vendant plus de 40 000 000 d’appareils ce qui représente une fraction des domiciles ce qui est tout simplement massif. Aucun appareil électronique n’a eu un tel engouement dans l’histoire des appareils électroniques.
            </p>
          </div>
        </div>
        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
          III. La Complexité de la Voix en tant qu'Interface
        </h2>
        <div>
          <p>
            La voix est une onde sonore qui part de l’humain dont la machine ne sait absolument pas quoi en faire. Donc c’est à nous d’organiser des algorithmes pour que la voix puisse être comprise.
            Pour se faire, il y’a un premier élément qu’on appelle <b>l’ASR (Automatic Speech Recognition)</b> qui n’est rien d’autre que la transcription de la voix en phonème c'est-à-dire en mots (dans le Jargon Informatique, c'est le <b> Speech To Text</b>). Mais le plus gros problème auquel fait face la machine aujourd’hui c’est de désambiguïser comme le fait l’homme. <br /><br />
            Après on la le traitement du langage naturel qui est de la codification textuelle ou NLU (Natural Language Understanding) qui est juste l’étape après le NLP qui est une des technique de l’Intelligence Artificielle depuis des décennies. Ensuite il y’a la partie (fruit de tous les fantasmes) conversationnel, où on n’y ait pas du tout. On a tendance à parler des chatbots mais en réalité, ils veulent réussir le test de Turing car ce n’est pas encore le cas. Leur objectif c’est de véritablement confondre l’humain et de faire en sorte que l’humain pense qu’en face de lui il y’a un autre humain.
          </p>
        </div>
        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
          IV. Comment ça m'a été utile professionnellement ? 👨‍💻
        </h2>
        <p>
          Lors de mon dernier contrat d'apprentissage, j'ai pu mettre en application ces compétences couplées à l'IA dans le CRM de l'entreprise. <br />

          En effet, j'ai mis en place un système de <b>Relance Intelligente</b> qui automatiquement relancera les clients sélectionnés qui n'ont pas répondu au devis envoyé par un commercial après 7 jours. <br /><br /> Lorsqu'on effectue une relance, j 'examine tout d'abord la conversation que le commercial a eue avec ce client. Ensuite, j'utilise la voix du commercial pour donner l'impression au client que c'est bien lui qui l'appelle. Si le client ne répond pas, je lui laisse un message sur son répondeur et lui envoi un courriel de relance à son adresse e-mail. <br /> Grâce à l'IA <b>(Generative Voice AI)</b> et la voix via la <b>Voice User Interface (VUI)</b>, tout cela est réalisable. <br />

          Grâce à cette fonctionnalité, le taux de conversion des devis en contrat a été considérablement augmenté de 30%, ce qui a permis à l'entreprise d'atteindre un bénéfice de 1 million d'euros en seulement 6 mois. J'ai dû la mettre en place pendant environ 1 mois, sous la coordination de mon maître d'apprentissage.
        </p>

        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">V. Perspectives</h2>
        <p>
          Je souhaite continuer d'explorer les possibilités illimités qu'offrent la voix et l'IA pour permettre de développer des logiciels qui vont résoudre des problèmes maintenant à l'image d'un humain. <br /><br />
          L'avenue de la VUI va marqué une disruption technologique au point où nous allons redécouvrir les interfaces homme-machine et les interactions que nous avons avec les machines. Bien que nous avons déjà été préparé avec les prototypes comme Siri d'Apple ou Alexa d'Amazon, la VUI va nous permettre de repenser notre manière d'interagir avec les machines et de les rendre plus humaines.
        </p>
        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">References:</h2>
        <div>
          <ul className="list-disc">
            <li>Zaid Sh. Alattar, Tarek Abbes, Faouzi Zerai, "Smartphone-Key: Hands-Free Two-Factor Authentication for Voice-Controlled Devices Using Wi-Fi Location", 2023, pp. 3848-3864</li>
            <li>Fouad Sabry, "Speech Recognition", One Billion Knowledgeable, 2022-07-10</li>
            <li>for the National Academy of Sciences, "Voice Communication Between Humans and Machines", National Academies Press, 1994-02-01</li>
            <li>Akiri Surely, "Applications of Voice User Interfaces in Clinical Settings", 2023</li>
          </ul>
        </div>
      </article >
    </>
  )
}