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
            L'avènement de l'interface vocale introduit une nouvelle ère dans l'interaction Homme-Machine, devenant la prochaine grande avancée technologique dans ce domaine. Avec des géants de la technologie tels qu'Apple et Amazon investissant massivement dans le développement d'assistants vocaux, le marché de ces dispositifs a connu une croissance sans précédent ces dernières années. Ceci commence à se manifester par les GAFA qui ont commencé vendre son premier objet communiquant à la Fnac en décembre 2018 et qui s'est fait rattrapé en France par Amazon qui lance son produit Alexia un mois plus tard. Sachant qu'Amazon était déjà en avance aux États-Unis à cette période en vendant plus de 40 000 000 d'appareils ce qui représente une fraction des domiciles.  <br /><br /> Cependant, la complexité de la voix en tant qu'interface nécessite des algorithmes complexes pour convertir la parole en texte et déchiffrer le langage de manière efficace. <br /><br />Bien que le traitement du langage naturel ait fait des avancées significatives, la dimension conversationnelle reste un défi à relever. Les chatbots actuels, bien que prometteurs, ne sont pas encore capables de passer le test de Turing, laissant place à de futures innovations dans le domaine de l'interface vocale.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            II. L'Évolution des Interfaces Humain-Machine
          </h2>
          <div>
            <p>
              En parallèle avec l'avènement des interfaces tactiles, l'interface vocale continue de gagner en popularité. L'évolution des interfaces Homme-Machine ne se limite pas uniquement à la dimension visuelle ou tactile, mais intègre désormais la dimension auditive de la communication. L'interaction vocale offre un nouveau champ d'exploration et de développement, permettant une interaction plus naturelle avec les machines.<br /><br /> Cependant, malgré les progrès réalisés dans le domaine de la reconnaissance automatique de la parole et du traitement du langage naturel, la complexité de la voix en tant qu'interface reste un défi majeur. Les machines doivent encore perfectionner leur capacité à comprendre et interagir de manière fluide avec les utilisateurs, tout en tenant compte des nuances et subtilités propres au langage humain. Cette évolution vers des interfaces vocales sophistiquées ouvre de nouvelles perspectives, mais soulève également des questions éthiques et techniques essentielles. Les prochaines années s'annoncent passionnantes pour l'évolution des interfaces humain-machine.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Aperçu Historique des Interfaces Humain-Ordinateur
            </h3>
            <p>
              Dans le contexte de l'évolution des interfaces homme-machine, il est intéressant de noter que la voix est en train de devenir la prochaine grande interface technologique. Depuis des décennies, nous avons vu l'émergence d'interfaces diverses, des lignes de commande complexes aux interfaces tactiles intuitives. Cependant, aujourd'hui, la voix prend le devant de la scène avec l'avènement d'assistants vocaux tels que Siri et Alexa.<br /><br /> Cette transition vers l'interface vocale n'est pas sans défis, car la voix est un signal complexe que les machines ont du mal à interpréter. Des avancées en reconnaissance automatique de la parole et en traitement du langage naturel ont permis de rendre les assistants vocaux plus performants, mais la dimension conversationnelle reste un défi à relever. <br /><br />Malgré ces obstacles, l'adoption massive des assistants vocaux marque un tournant majeur dans l'histoire des interfaces homme-machine, ouvrant la voie à de nouvelles formes d'interaction entre les humains et les technologies.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              1. Transition des interfaces en ligne de commande aux interfaces utilisateur graphiques
            </h4>
            <p>
              En regardant l'historique des interfaces homme-machine, on note une transition significative des <b>interfaces en ligne de commande (CLI)</b> aux <b>interfaces utilisateur graphiques (GUI)</b>. Cette évolution a permis une accessibilité accrue aux ordinateurs, rendant les technologies plus conviviales pour un public plus large. Cependant, avec l'avènement des assistants vocaux tels que Siri et Alexa, une nouvelle transition opère vers des interfaces vocales. <br /> <br />Cette transition pose des défis uniques, notamment en termes de traitement de la voix. Les machines doivent passer par un processus sophistiqué de <b>reconnaissance automatique de la parole (ASR)</b> et de <b>traitement du langage naturel (NLU)</b> pour interpréter et répondre de manière adéquate aux commandes vocales. En dépit de ces avancées, la dimension conversationnelle des interfaces vocales reste un domaine en développement, où les machines cherchent toujours à égaler la complexité de la communication humaine.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              2. Révolution apportée par les interfaces tactiles au début des années 2000
            </h4>
            <p>
              La montée en puissance des interfaces tactiles au début des années 2000 a apporté une révolution dans l'utilisation des technologies. Ces interfaces ont transformé la façon dont les individus interagissent avec les appareils électroniques, offrant une expérience plus intuitive et conviviale. Grâce aux écrans tactiles, les utilisateurs ont pu manipuler les informations et les applications de manière directe, sans avoir besoin d'intermédiaires tels que les claviers ou les souris. <br /><br />Cette évolution a été particulièrement marquante avec l'apparition et le succès des smartphones, qui ont démocratisé l'accès à des technologies puissantes et complexes. <br />On peut dire que les interfaces tactiles ont contribué à rendre les appareils électroniques plus accessibles au grand public et ont ouvert la voie à de nouvelles formes d'interactions homme-machine. Cette révolution a marqué un tournant majeur dans l'histoire des technologies de communication et ne cesse de se développer et d'évoluer pour répondre aux besoins et aux attentes des utilisateurs.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            III. L'Émergence de la Voix en tant qu'Interface Machine Perturbatrice
          </h2>
          <div>
            <p>
              L'évolution des interfaces Homme-Machine a été marquée par différentes étapes clés, passant des interfaces de lignes de commande complexes des débuts de l'informatique aux interfaces graphiques plus accessibles popularisées par le Macintosh. Par la suite, l'avènement des interfaces tactiles a révolutionné l'utilisation des technologies, notamment avec l'essor des smartphones. Aujourd'hui, c'est la voix qui se présente comme la prochaine grande interface machine, selon les prédictions de <b>Snips.ai</b>. <br /><br />Les grandes entreprises technologiques telles qu'Apple et Amazon ont lancé des assistants vocaux tels que Siri et Alexa, amorçant ainsi une adoption massive de ces dispositifs. Cette montée en puissance de la voix en tant qu'interface machine soulève des défis en termes de compréhension et de traitement de la parole, nécessitant des ingénieurs qualifés pour franchir les étapes de la reconnaissance automatique de la parole et du traitement du langage naturel avant d'atteindre un sentiment conversationnel encore en développement.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Paysage Actuel des Interfaces Vocales
            </h3>
            <p>
              Le processus de décodage vocal comprend plusieurs étapes essentielles. D'abord, la reconnaissance automatique de la parole (ASR) permet de convertir la voix en texte, mais la désambiguïsation du langage reste un défi majeur. Ensuite, le traitement du langage naturel (NLU) intervient pour encoder le texte, suivi de la partie conversationnelle qui est encore en plein développement. <br />Malgré les progrès, les chatbots actuels ne peuvent pas encore passer le test de Turing et simuler une conversation humaine de manière indiscernable. Ces questions de complexité technique soulignent les défis importants auxquels les interfaces vocales doivent faire face pour devenir pleinement intégrées dans nos interactions quotidiennes.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              1. Popularisation des assistants vocaux comme Siri et Alexa
            </h4>
            <p>
              Dans le paysage technologique contemporain, la popularisation des assistants vocaux tels que Siri et Alexa représente une évolution significative dans les interfaces homme-machine. Ces systèmes basés sur la reconnaissance vocale, ont ouvert la voie à une interaction naturelle et simplifiée entre l'homme et la machine. Avec l'émergence de ces assistants intelligents, le concept de communication vocale prend une place prépondérante dans nos vies quotidiennes, remodelant ainsi notre rapport à la technologie. Les recherches récentes mettent en lumière les défis liés à linteraction contextuelle et à l'expérience utilisateur, soulignant la nécessité d'une compréhension approfondie des usages et des impacts de ces technologies. <br /><br />En intégrant ces avancées dans notre analyse, nous sommes en mesure de mieux appréhender les implications socio-techniques des assistants vocaux et d'explorer les dynamiques complexes qui façonnent la relation entre l'homme et la machine, tout en soulignant les enjeux fondamentaux de l'agence et du pouvoir dans ce nouvel écosystème technologique, où les entreprises façonnent les contours de nos interactions quotidiennes.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              2. Adoption massive des appareils activés par la voix ces dernières années
            </h4>
            <p>
              En 2018, les assistants vocaux révolutionnaires comme Alexa et Siri ont connu une adoption massive, avec plus de 40 millions d'unités vendues rien qu'aux États-Unis, marquant ainsi un tournant dans l'histoire des interfaces électroniques. Cependant, la complexité de la voix en tant qu'interface persiste, afin de permettre aux machines de comprendre et d'interagir avec les utilisateurs de manière naturelle. <br />De la reconnaissance automatique de la parole à la dimension conversationnelle, chaque étape du processus de décodage de la voix représente un défi majeur pour les développeurs et les ingénieurs. Malgré ces défis, leengouement pour les interfaces vocales ne cesse de croître, laissant entrevoir un avenir où la voix deviendra incontournable dans notre interaction avec la technologie.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            IV. La Complexité de la Voix en tant qu'Interface
          </h2>
          <div>
            <p>
              En explorant la complexité de la voix en tant qu'interface, il est important de reconnaître les avancées technologiques récentes qui ont propulsé la voix comme une interface Homme-Machine de premier plan. Les dispositifs de <b>l'Internet des Objets (IdO)</b> ont vu une évolution rapide, et l'utilisation croissante de la voix comme principale interface utilisateur a été largement popularisée grâce aux assistants vocaux. Cependant, malgré cette expansion, des défis de sécurité subsistent, notamment en ce qui concerne l'authentification vocale pour les appareils IDO. <br /><br />Les nouvelles approches telles que <b>les schémas d'authentification à facteurs multiples (MFA)</b> tentent de résoudre ces problèmes, mais leur impact sur l'expérience utilisateur peut être significatif. Dans cette optique, un modèle d'authentification à deux facteurs (2-FA) a été proposé, utilisant un smartphone comme clé pour autoriser les commandes vocales en présence de l'utilisateur, démontrant ainsi une amélioration de la sécurité sans compromettre l'expérience utilisateur (cf. <a href="https://www.semanticscholar.org/paper/Smartphone-Key%3A-Hands-Free-Two-Factor-for-Devices-Alattar-Abbes/014ab1989a126a44720f2916f984d9a2822db919" target="_blank" className="italic underline">Zaid Sh. Alattar</a>). <br />Par ailleurs, les applications des interfaces vocales dans les contextes cliniques soulignent l'essor des technologies vocales dans le domaine de la santé, avec des implications prometteuses pour l'amélioration des services de santé. Cette tendance vers des interfaces vocales en milieu médical ouvre des perspectives nouvelles tout en soulevant des questions sur les interfaces conversationnelles contextuelles et les agents de conversation futuriste.
            </p>
            <h3 className="my-6 ml-6 text-2xl font-bold tracking-tight dark:text-light">
              A. Défis Techniques dans la Compréhension et le Traitement de la Voix
            </h3>
            <p>
              Une fois que la voix a été convertie en phonème, un autre défi technique se présente : <b>la traduction automatique du texte</b>. Cette étape, appelée Traduction Automatique de la Parole (MT), consiste à transposer le texte d'une langue à une autre de façon fluide et compréhensible. Les progrès récents dans ce domaine ont permis des améliorations significatives, mais des erreurs de traduction subsistent encore, notamment dans le contexte de langues moins répandues ou de structures de phrases complexes. Il est essentiel que les développeurs continuent à travailler sur des models pour améliorer la qualité de la traduction automatique et garantir une interprétation précise des différentes nuances linguistiques. <br /><br />En fin de compte, la traduction automatique de la voix jouera un rôle majeur dans la facilitation de la communication interculturelle et la réduction des barrières linguistiques, mais il reste encore des défis à relever pour parvenir à une précision maximale et une compréhension optimale. La voix, en tant qu'interface entre l'homme et la machine, requiert donc une convergence de technologies avancées et une expertise multidisciplinaire pour surmonter ces obstacles et offrir des interactions fluides et efficaces. Les progrès futurs dans ce domaine dépendront grandement de l'innovation continue dans le domaine de l'intelligence artificielle et du traitement automatique du langage naturel, afin de réaliser pleinement le potentiel de la voix comme interface de communication essentielle dans notre société numérique en constante évolution.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              1. Reconnaissance automatique de la parole (RAS) pour convertir la voix en texte
            </h4>
            <p>
              Il est indéniable que la voix en tant qu'interface homme-machine a évolué de manière significative au fil des décennies. Ce changement est notamment marqué par l'émergence de la reconnaissance automatique de la parole (RAS) pour convertir la voix en texte. Cette technologie a ouvert de nouvelles perspectives en matière d'interaction avec les machines, offrant une expérience utilisateur plus naturelle et intuitive. Cependant, malgré les avancées remarquables dans ce domaine, le défi majeur réside encore dans la désambiguïsation du langage, un processus complexe qui dépasse les capacités actuelles des algorithmes. <br /><br />En outre, le traitement du langage naturel (NLU) et la dimension conversationnelle demeurent des domaines en constante évolution, cherchant à reproduire de manière plus approfondie la complexité de la communication humaine (cf. <a href="https://play.google.com/books/reader?id=09iTEAAAQBAJ&hl=fr" target="_blank" className="italic underline">Fouad Sabry</a>). Ces avancées témoignent du potentiel futur de l'interface vocale en tant qu'outil de communication interpersonnelle et d'interaction avec les technologies.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              2. Compréhension du langage naturel (NLU) pour le codage textuel et les techniques d'IA
            </h4>
            <p>
              La voix en tant qu'interface Homme-Machine a parcouru un long chemin depuis les premiers ordinateurs complexes des années 50. Avec l'avènement des assistants vocaux comme Siri et Alexa, l'interface vocale s'impose comme la prochaine révolution technologique. Cependant, la compréhension du langage naturel (NLU) reste un défi majeur à relever pour les machines. En effet, pour que les ordinateurs puissent interagir de manière efficace avec les humains, ils doivent non seulement convertir la voix en texte grâce à la reconnaissance automatique de la parole (ASR), mais aussi décoder le sens et les intentions derrière les mots grâce au NLU. <br /><br />Cette étape de codage textuel est essentielle pour une communication fluide entre l'homme et la machine, mais elle nécessite des algorithmes complexes pour être pleinement efficace. Malgré les progrès réalisés dans ce domaine, la dimension conversationnelle reste encore en développement et les chatbots, bien que prometteurs, ne sont pas encore capables de rivaliser avec la subtilité de la communication humaine.
            </p>
            <h4 className="my-6 ml-6 text-xl font-semibold tracking-tight dark:text-light">
              3. Développement d'interfaces conversationnelles et défis pour parvenir à des interactions proches de l'humain
            </h4>
            <p>
              La complexité de la voix en tant qu'interface machine réside dans sa nature même. La voix est une onde sonore, un signal continu et complexe que les machines doivent interpréter pour le transformer en informations compréhensibles. Pour ce faire, nous devons mettre en place des models ayant une sensibilité humaine, impliquant notamment la reconnaissance automatique de la parole (ASR) pour convertir la voix en texte et le traitement du langage naturel (NLU) pour interpréter ce texte et engager une conversation de manière fluide et naturelle. <br /><br />Un défi complexe qui implique de comprendre le contexte, d'interpréter les émotions et de s'adapter aux différents styles de langage utilisés par les humains. La recherche dans ce domaine est en constante évolution, et les progrès réalisés ouvrent la voie à des interactions de plus en plus sophistiquées entre l'homme et la machine.
            </p>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            V. Comment ça m'a été utile professionnellement ? 👨‍💻
          </h2>
          <p>
            Lors de mon dernier contrat d'apprentissage, j'ai pu mettre en application ces compétences couplées à l'IA dans le CRM de l'entreprise. <br />

            En effet, j'ai mis en place un système de <b>relance intelligente</b> qui automatiquement relancera les clients sélectionnés qui n'ont pas répondu au devis envoyé par un commercial après 7 jours. <br /> Lorsqu'on effectue une relance, j 'examine tout d'abord la conversation que le commercial a eue avec ce client. Ensuite, j'utilise la voix du commercial pour donner l'impression au client que c'est bien lui qui l'appelle. Si le client ne répond pas, je lui laisse un message sur son répondeur et lui envoi un courriel de relance à son adresse e-mail. <br /> Grâce à l'IA (Generative Voice AI) et la voix via la Voice User Interface (VUI), tout cela est réalisable.

            Grâce à cette fonctionnalité, le taux de conversion des devis en contrat a été considérablement augmenté de 30%, ce qui a permis à l'entreprise d'atteindre un bénéfice de 1 million d'euros en seulement 6 mois. J'ai dû la mettre en place pendant environ 1 mois, sous la coordination de mon maître d'apprentissage.
          </p>

          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">VI. Perspectives</h2>
          <p>
            Je souhaite continuer d'explorer les possibilités illimités qu'offrent la voix et l'IA pour permettre de développer des logiciels qui vont résoudre des problèmes maintenant à l'image d'un humain. <br />
            L'avenue de la VUI va marqué une disruption technologique au point où nous allons redécouvrir les interfaces homme-machine et les interactions que nous avons avec les machines. Bien que nous avons déjà été préparé avec les prototypes comme Siri d'Apple ou Alexa d'Amazon, la VUI va nous permettre de repenser notre manière d'interagir avec les machines et de les rendre plus humaines.
          </p>
          {/* <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">VII. Conclusion</h2>
          <p>
            Alors que les interfaces graphiques et tactiles ont marqué des étapes significatives, la montée en puissance des assistants vocaux laisse présager une transformation profonde de nos interactions avec la technologie. Cependant, la complexité de la voix en tant qu'interface reste un défi majeur à relever. Les progrès dans la reconnaissance automatique de la parole et le traitement du langage naturel sont essentiels pour améliorer l'efficacité et la pertinence des interactions vocales. Malgré les avancées technologiques impressionnantes dans ce domaine, la dimension conversationnelle de l'interface vocale demeure encore largement perfectible. Les recherches et développements futurs devront se concentrer sur la création d'assistants vocaux plus intuitifs, capables de simuler des interactions humaines de manière plus authentique.
          </p> */}
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">VIII. References:</h2>
          <div>
            <ul className="list-disc">
              <li>Zaid Sh. Alattar, Tarek Abbes, Faouzi Zerai, "Smartphone-Key: Hands-Free Two-Factor Authentication for Voice-Controlled Devices Using Wi-Fi Location", 2023, pp. 3848-3864</li>
              <li>Fouad Sabry, "Speech Recognition", One Billion Knowledgeable, 2022-07-10</li>
              <li>for the National Academy of Sciences, "Voice Communication Between Humans and Machines", National Academies Press, 1994-02-01</li>
              <li>Akiri Surely, "Applications of Voice User Interfaces in Clinical Settings", 2023</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}