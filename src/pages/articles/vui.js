/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import vui from "../../../public/images/articles/vui.png";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · VUI</title>
        <meta name="description" content="The Voice: A Technologically Disruptive Interface" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              The Voice: A Technologically Disruptive Interface
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              How far can the voice lead us?
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
            The voice has been a factor of productivity among men for a very long time. It appears about 2 million years ago with the Homo-Erectus and at the time it was rather a proto-language i.e. an instrument that formalized itself and allowed more successful interactions. But in reality, the voice in the sense of language that we know today emerges with the Homo-Sapiens <b>100,000 years ago</b> and it must be noted that 100,000 years is much more ink in our species than the writing, it was 5000 years ago. So this interface between Men is an interface that is deep in us and <b>almost primitive (deeply anchored in our cortex)</b> that uses all of our cognitive abilities while the image and words are newer interfaces and tend to more polarize the minds, in other words, take more modern shortcuts. <br />

            We've seen the emergence of voice as a Man-Machine Interface for more than 10 years now with companies like Apple and their vocal assistant, Siri, putting these types of man-machine interfaces into the hands of users.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
            I. The Evolution of Human-Machine Interfaces
          </h2>
          <div>
            <p>
              70 years ago, computers were extremely complicated, it took a PhD to be able to use a computer. These computers were already equipped with a type of Man-Machine Interface called CLI (Command Line Interface) or Unix in this case. Then later, the graphical interfaces that were popularized by Apple under the Government of Steve Jobs, The Macintosh. Then in the early 2000s, the touch interfaces 10 years later, so the smartphone and the emergence of the touch interface that allows the largest numbers to use the technology. And today, (I share the same vision as the French company Snips.ai), whether you like it or not, the voice interface is the next massively distributed machine interface. <br /><br />

              This begins to manifest itself by the GAFA, which began selling its first communicating item to Fnac in December 2018 and which was caught up in France by Amazon, which launched its product Alexia a month later. Knowing that Amazon was already ahead of the U.S. at that time, selling more than 40 million devices, which represents a fraction of the households, which is simply massive. No electronic device has had such enthusiasm in the history of electronic devices.
            </p>
          </div>
        </div>
        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
          II. The Complexity of Voice as an Interface
        </h2>
        <div>
          <p>
            The voice is a sound wave that comes from the human being and the machine does not know exactly what to do with it. So it's up to us to organize algorithms so that the voice can be understood.
            To do so, there is a first element called <b>the ASR (Automatic Speech Recognition)</b> which is nothing more than the transcription of the voice in phonem i.e. in words (in the Computer Jargon, it is the <b > Speech To Text</b >). But the biggest problem the machine faces today is unambiguous as man does. <br /><br />
            Then there is the processing of natural language which is text coding or NLU (Natural Language Understanding) which is just the step after the NLP which has been one of the techniques of Artificial Intelligence for decades. Then there is the part (fruit of all fantasies) conversational, where you do not have at all. We tend to talk about chatbots, but in reality, they want to pass the Turing test because it is not yet the case. Their goal is to really confuse the human and make the human think that there is another human in front of him.
          </p>
        </div>
        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">
          III. How did that help me professionally? 👨‍💻
        </h2>
        <p>
          During my last learning contract, I was able to implement these skills coupled with AI in the company's CRM. <br />

          In fact, I have set up a system of <b>Intelligent Reliance</b> that will automatically restart selected customers who have not responded to the quote sent by a salesman after 7 days. <br /><br /> When a user reloads, I first look at the conversation that the dealer has had with that customer, and then I use the developer's voice to give the customer the impression that it is he who is calling. If the customer does not respond, I leave him a message on his respondent and send him an e-mail to his email address. <br /><br />

          This feature increased the rate of conversion of quotes into contracts by <b>30% which allowed the company to a profit of EUR 1 million in just 6 months</b>. I had to put it in place for about a month, under the coordination of my master of apprenticeship.
        </p>

        <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">IV. Perspectives</h2>
        <p>
          I want to continue to explore the unlimited possibilities that voice and AI offer to develop software that will solve problems now in the form of a human. <br /><br />
          The VUI avenue will mark a technological disruption to the point where we will rediscover the human-machine interfaces and the interactions we have with machines. Although we have already been prepared with prototypes like Apple's Siri or Amazon's Alexa, the VUI will allow us to rethink our way of interacting with machines to make them more human.
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