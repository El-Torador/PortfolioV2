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
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Contexte et définition 📄</h2>
          <p>
            Depuis des millions d&apos;années, la voix est un facteur clé de productivité entre les humains. Apparue il y a environ 2 millions d&apos;années avec l&apos;Homo Erectus, elle se manifestait sous forme de proto-langage, un outil permettant des interactions plus sophistiquées. Toutefois, la voix telle que nous la connaissons aujourd&apos;hui, en tant que langage, émerge avec l&apos;Homo Sapiens il y a environ 100 000 ans. Cela signifie que notre capacité à utiliser la voix est bien plus ancrée dans notre espèce que l&apos;écriture, apparue il y a seulement 5000 ans. Cette interface vocale est profondément enracinée dans notre cortex et sollicite toutes nos capacités cognitives, tandis que les images et les mots sont des interfaces plus récentes et ont tendance à polariser les esprits en utilisant des raccourcis modernes. <br />

            Depuis plus de dix ans, nous observons une montée en puissance de la voix en tant qu&apos;interface Homme-Machine, notamment avec l&apos;apparition d&apos;assistants vocaux comme Siri d&apos;Apple, qui ont popularisé ce type d&apos;interaction.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">L&apos;évolution des Interfaces Homme-Machine
            ✈️</h2>
          <div>
            <p>
              Il y a 70 ans, les ordinateurs étaient extrêmement complexes et nécessitaient un doctorat pour être utilisés. Ils fonctionnaient avec des interfaces de ligne de commande <abbr title="Command Line Interface">(CLI)</abbr> comme Unix. Plus tard, les interfaces graphiques, popularisées par le Macintosh sous la direction de Steve Jobs chez Apple, ont rendu les ordinateurs plus accessibles. Au début des années 2000, les interfaces tactiles ont révolutionné l&apos;usage des technologies, notamment avec l&apos;essor des smartphones.<br /><br />

              Aujourd&apos;hui, l&apos;interface vocale est en train de devenir la prochaine grande interface machine, comme le prédit l&apos;entreprise française Snips.ai. Les géants de la technologie (GAFA) ont commencé à commercialiser des assistants vocaux, avec Apple lançant Siri et Amazon suivant avec Alexa. En décembre 2018, ces dispositifs ont commencé à être vendus en masse, avec Amazon vendant plus de 40 millions d&apos;appareils aux États-Unis, une adoption massive sans précédent dans l&apos;histoire des appareils électroniques.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">La Complexité de la Voix comme Interface 😵‍💫</h2>
          <p>
            La voix est une onde sonore que les machines ne peuvent comprendre sans aide. Pour pallier cela, des algorithmes sophistiqués sont nécessaires. Nous distinguons trois éléments par lequel les ordinateurs passent pour démistifier et comprendre une voix. <br />

            Le premier élément de ce processus est <strong>la reconnaissance automatique de la parole <abbr title="Automatic Speech Recognition">(ASR)</abbr></strong>, qui convertit la voix en texte (Speech To Text). Cependant, le défi majeur reste de désambiguïser le langage comme le ferait un humain. <br />

            Ensuite, intervient <strong>le traitement du langage naturel <abbr title="Natural Language Understanding">(NLU)</abbr></strong>, une étape de codification textuelle qui est juste l&apos;étape après le NLP qui lui est une technique de l&apos;intelligence artificielle utilisée depuis des décennies. Enfin, <strong>la dimension conversationnelle</strong>, bien que fantasmée, reste en développement. On a tendance à parler des chatbots mais en réalité, ils cherchent à passer le test de Turing et ne sont pas encore capables de confondre les humains au point que ceux-ci pensent converser avec une autre personne humaine.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Comment ça m&apos;a été utile professionnellement ? 👨‍💻</h2>
          <p>
            Lors de mon dernier contrat d&apos;apprentissage, j&apos;ai pu mettre en application ces compétences couplé à l&apos;IA dans le CRM de l&apos;entreprise. <br />

            En effet, j&apos;ai intégré un système de Relance Intélligente qui va relancer automatiquement le(s) client(s) sélectionné(s) qui n&apos;ont pas répondu au devis envoyé par un commercial au bout de 7 jours. <br /> Lors de la relance, on va d&apos;abord analyser la conversation que le commercial a eu avec ledit client, ensuite on va utiliser la voix du commercial pour donner l&apos;impression au client que c&apos;est bien le commercial qui l&apos;appelle et s&apos;il ne décroche pas, on va lui laisser un message sur son répondeur et l&apos;envoyer un mail de relance sur son adresse-mail. <br /> Tout ceci est possible grâce à l&apos;IA (Generative Voice AI) et la voix par le biais de la Voice User Interface (VUI).

            Cette fonctionnalité à considérablement augmenté <strong>le taux de conversion des devis en contrat de 30% et a permis à l&apos;entreprise de gagner 1 million d&apos;euros en 6 mois sachant qu&apos;elle m&apos;a pris environ 1 mois pour la mettre en place</strong> sous la coordination de mon maitre d&apos;apprentissage.
          </p>

          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Perspectives</h2>
          <p>
            Je souhaite continuer d&apos;explorer les possibilités illimités qu&apos;offrent la voix et l&apos;IA pour permettre de développer des logiciels qui vont résoudre des problèmes maintenant à l&apos;image d&apos;un humain. <br />
            L&apos;avenue de la VUI va marqué une disruption technologique au point où nous allons redécouvrir les interfaces homme-machine et les interactions que nous avons avec les machines. Bien que nous avons déjà été préparé avec les prototypes comme Siri d&apos;Apple ou Alexa d&apos;Amazon, la VUI va nous permettre de repenser notre manière d&apos;interagir avec les machines et de les rendre plus humaines.
          </p>
        </div>
      </article>
    </>
  )
}