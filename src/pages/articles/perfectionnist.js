import Head from "next/head";
import Image from "next/image";
import perfectionnisteImage from "../../../public/images/articles/perfectionniste.webp";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · Perfectionnisme</title>
        <meta name="description" content="Perfectionnisme : viser toujours plus haut... mais à quel prix ?" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Perfectionnisme : viser toujours plus haut... mais à quel prix ?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              Qualité ou defaut ?
            </p>
          </div>
          <figure>
            <Image
              alt="Featured Image"
              className="aspect-video object-cover"
              height={340}
              src={perfectionnisteImage}
              width={1250}
            />
            <figcaption>Perfect & perfection</figcaption>
          </figure>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Introduction 🤓</h2>
          <p>
            Quel est votre principal défaut ? « Je suis perfectionniste », répond tout jeune diplômé à son premier entretien, pensant avoir trouvé la parade de l&apos;année à cette question piège. Et si ce que l&apos;on croyait être un faux-défaut en était en fait un vrai ? Travailler avec un perfectionniste, c&apos;est s&apos;assurer un travail bien fait… mais aussi quelques prises de tête. Zoom sur les bons et mauvais côtés de ce trait de caractère… avec celles et ceux qui le vivent au quotidien.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Dans la tête d&apos;un perfectionniste
            🤔</h2>
          <div>
            <p>
              Le perfectionnisme est la recherche permanente de l&apos;excellence, l&apos;incapacité à se contenter d&apos;un travail simplement “bon” chez soi, et chez les autres. D&apos;après les psychologues Paul Hewitt et Gordon Flett, nous serions tous des perfectionnistes. Simplement à des degrés différents. Ils ont observé trois dimensions à notre perfectionnisme :
              <br /><br />
            </p>
            <ol className="list-decimal">
              <li>
                <strong>Le perfectionnisme “auto-orienté”: </strong> Il conduit à des attentes personnelles excessivement élevées. Il est la source d&apos;un travail consciencieux, exigeant et sans erreur. Au prix, souvent, d&apos;un long (et fort) acharnement.
              </li>
              <br />
              <li>
                <strong>Le perfectionnisme “autre-orienté”: </strong> Ici, l&apos;excellence est attendue chez les autres, qui doivent donner le meilleur d&apos;eux-mêmes et se dépasser. Mais cela s&apos;accompagne d&apos;une certaine critique - formulée ou implicite - qui peut générer des tensions dans les relations professionnelles.
              </li>
              <br />
              <li>
                <strong>Le perfectionnisme “socialement prescrit”: </strong> Il se construit autour des attentes de la société. C&apos;est ce que le perfectionniste croit que l&apos;on attend de lui. Il offre au perfectionniste une compréhension fine des mécanismes de la réussite, mais l&apos;encourage à la recherche de perfection permanente, et à tous les niveaux : être le plus pro, le plus rigoureux, le plus visionnaire, le plus créatif, le plus sympa, etc.
              </li>
            </ol>
            <p>
              Les psychologues Thomas Curran et Andrew P. Hill ont récemment croisé les résultats de plusieurs études réalisées de 1989 à 2016 sur plus de 40 000 étudiants américains, canadiens et britanniques. Ils ont observé une augmentation significative du niveau d&apos;exigence générale. Et principalement du taux de perfectionnisme socialement prescrit, lequel peut rapidement conduire à des problèmes d&apos;anxiété, de dépression et de santé mentale de manière générale. <br /><br />

              En bref, les jeunes générations intériorisent la croyance contemporaine selon laquelle TOUT — c&apos;est-à-dire eux-mêmes, leur vie, leur travail, leurs proches — devrait être parfait. Sur le marché du travail, cela se traduit par des attentes démesurées envers soi-même (« je dois obtenir une promotion dans les 6 mois pour avancer dans ma carrière »), envers les collègues (qui doivent fournir un travail impeccable) et leur entreprise (« il est où le baby-foot ?! »). Des attentes qui sont un très bon carburant pour accomplir de grands projets, mais peuvent aussi conduire à beaucoup de frustration.
            </p>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Les perfectionnistes et leurs petites névroses 🔑</h2>
            <p>
              Le perfectionnisme au travail a des avantages bien connus : persévérance, résilience, souci du détail. Mais il provoque aussi quelques difficultés, pour le perfectionniste lui-même et pour ses collègues.
            </p>
            <h4 className="my-4 text-lg font-bold tracking-tight dark:text-light">La procrastination</h4>
            <p>
              Produire un travail parfait implique des conditions pour l&apos;exécuter qui doivent être… parfaites. Le risque ? Attendre que ces conditions soient réunies pour s&apos;y mettre. Certains perfectionnistes sont ainsi de grands procrastinateurs, <strong>incapables de se lancer tant ils ont peur de ne pas produire un résultat à la hauteur.</strong> « Plus jeune, je pouvais passer des heures à ré-organiser mon bureau ou choisir la couleur de mes stabilos avant de commencer un devoir maison difficile. J&apos;ai toujours des restes de ce comportement aujourd&apos;hui. Mon cerveau peut être très créatif quand il s&apos;agit de trouver des petits détails à régler avant de me lancer ! » rigole Anna, consultante dans le digital. Une solution ? Travailler en duo avec un “fonceur” qui donnera l&apos;entrain nécessaire au lancement d&apos;un projet, puis profiter du bon pendant de son perfectionnisme pour l&apos;améliorer par la suite.
            </p>
            <h3 className="my-8 text-xl font-bold tracking-tight dark:text-light">Des normes démesurées de performance</h3>
            <p>
              « Le perfectionniste méprise le temps et méprise la peine, tant que le résultat est là » explique Julien, rédacteur en chef. Le perfectionniste se fixe des règles et les applique. Et il en attend autant des autres. Par conséquent, <strong>ses objectifs sont rarement atteints, parce que trop ambitieux.</strong> Un penchant que Julien a appris à canaliser avec le temps : <em>« Quand on manage comme moi, il faut parfois se faire violence. Il faut apprendre à composer avec d&apos;autres modes de fonctionnement. Aujourd&apos;hui, je suis conscient que je ne peux pas demander autant aux autres qu&apos;à moi-même. »</em>
            </p>
            <h3>La difficulté à lâcher prise</h3>
            <p>
              Le perfectionniste a du mal à déléguer ou à se contenter d&apos;un résultat médiocre. C&apos;est le cas de Camille, responsable RH : <em>« Je suis censée m&apos;appuyer sur différentes équipes… dont le rendu n&apos;est pas toujours à la hauteur. Je me retrouve à faire mon travail et le leur. Mon manager m&apos;a conseillé d&apos;arrêter afin qu&apos;ils prennent leurs responsabilités, mais j&apos;ai une trop grande conscience professionnelle pour ça. Du coup, je suis surchargée de travail, et je sais que j&apos;en suis la principale responsable. »</em> Pour éviter le burn-out et apprendre à lâcher prise, l&apos;une des clés est de se focaliser sur les priorités de l&apos;interlocuteur final, et pas les siennes : quels sont les trois éléments qui feront un bon rendu pour lui ? Se fixer des points d&apos;attention limités aide le perfectionniste à calmer sa recherche permanente de perfection.
            </p>
            <h3>L&apos;auto-critique et les doutes permanents</h3>
            <p>
              Puisque rien n&apos;est jamais au niveau, le perfectionniste est un éternel insatisfait. Il a tendance à être incapable de se réjouir d&apos;une victoire, car tout aurait toujours pu être mieux. « Je pourrais passer des heures à améliorer un e-mail, un support ou une présentation. Changer une virgule, une formulation, vérifier que tout est bien aligné. Aujourd&apos;hui, je prends sur moi. Je m&apos;impose des deadlines et j&apos;envoie en l&apos;état. Le pire, c&apos;est que les gens sont souvent satisfaits du résultat » explique Anna. Il est toujours difficile pour le perfectionniste de prendre le recul nécessaire pour juger de son travail. Alors comme Anna, il faut <strong>apprendre à passer à autre chose et faire confiance à ses collègues</strong> quand ils affirment que le résultat est suffisant. <br /> <br />
              « Il m&apos;est arrivé de passer pour un “enculeur de mouches”, tant je m&apos;attachais aux détails » rigole Julien. Si les perfectionnistes sont souvent conscients de leurs travers, ils savent aussi que la perfection est subjective. C&apos;est le travail que fait Camille en ce moment :<em> « J&apos;essaie de discerner ce qui est réellement mal fait… de ce qui est fait différemment. »</em> Cela pose également la question du droit à l&apos;erreur : peut-on tout faire correctement ? Est-ce même souhaitable ? Pas forcément. Car les accrocs, les écarts, les bizarreries se révèlent parfois précieux. Tout comme l&apos;échec, qui est vecteur, voire condition du progès. Bref, celui qui est esclave de sa peur de l&apos;imperfection se condamne trop souvent à un second rôle dans l&apos;entreprise.
            </p>
          </div>
          <div>
            <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
              Repérer un perfectionniste : 10 signes qui ne trompent pas <br />
            </h2>
            <ul className="list-disc">
              <li>
                Il a qualifié de « chaos total » cette slide dont le titre et les paragraphes étaient décalés de quelques millimètres.
              </li>
              <br />
              <li>
                Il a un sourire de satisfaction lorsqu&apos;il jette un œil à sa rangée de classeurs parfaitement alignés
              </li>
              <br />
              <li>
                Il peut passer 1 heure à corriger les fautes d&apos;un document de 50 pages et y trouver une certaine satisfaction
              </li>
              <br />
              <li>
                Il laisse toujours un bureau parfaitement rangé en partant le soir (et jette un regard désapprobateur sur votre tasse de café… posée sur une pile de dossiers… elle-même en équilibre précaire entre votre bureau et celui de votre voisin)
              </li>
              <br />
              <li>
                Il a ruminé pendant 3 jours après avoir envoyé un e-mail en oubliant la pièce-jointe (et oui, même à lui, c&apos;est arrivé !)
              </li>
              <br />
              <li>
                Il a entamé une profonde remise en question de ses compétences le jour où il n&apos;a pas su remettre d&apos;agrafes dans l&apos;agrafeuse
              </li>
              <br />
              <li>
                Il s&apos;excuse d&apos;arriver « terriblement en retard » à 9H04, au lieu de 9H00
              </li>
              <br />
              <li>
                Il a trouvé scandaleux que le menu de la cantine ait inversé les plats du lundi et du mardi (décidément, on ne peut plus se fier à personne)
              </li>
              <br />
              <li>
                Il a la chair de poule quand il entend quelqu&apos;un dire « il reste quelques approximations mais franchement ça passe, non ? »
              </li>
            </ul>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Conclusion 😎</h2>
          <p>
            La perfection est donc une notion subjective : ce qui est parfait pour les uns ne le sera pas forcément pour les autres. Alors être exigeant envers soi-même et envers les autres est une qualité, c’est vrai, mais il est important de savoir poser des limites et ne pas tomber dans l’excès.
          </p>
        </div>
      </article>
    </>
  )
}