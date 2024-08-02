/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import monorepo from "../../../public/images/articles/pnpm.png";
import evolution from "../../../public/images/articles/evolution.png";
import comparaison from "../../../public/images/articles/comparaison.png";
import webhookImg from "../../../public/images/articles/webhook.png";
import archi from "../../../public/images/articles/archi.png";
import Code from "@/components/Code";
import { command1, command10, command11, command2, command3, command4, command5, command6, command7, command8, command9, dirStructure, workspace } from "@/constants";



export default function Article() {
  return (
    <>
      <Head>
        <title>Jordan Kagmeni · MonoRepo with PNPM</title>
        <meta name="description" content="Make your projet as a monoRepo with PNPM" />
      </Head>
      <article className="pt-20 mx-auto w-3/6 lg:w-full lg:px-4 px-4 py-6 md:px-6 lg:py-16 md:py-12 dark:text-light">
        <div className="mx-auto">
          <div className="space-y-4 my-4">
            <h1 className="text-5xl md:text-3xl font-extrabold tracking-tight leading-[3.5rem] dark:text-light">
              Make your projet as a monoRepo with PNPM
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-light/70">
              PNPM is a fast, disk space efficient package manager that helps you to manage your project dependencies.
            </p>
          </div>
          <figure>
            <Image
              alt="Monorepo Image"
              className="aspect-video object-cover"
              height={340}
              src={monorepo}
              width={1250}
            />
            {/* <figcaption>Modern Resilience</figcaption> */}
          </figure>
          <p className="mt-8">
            MonoRepo is a method that manages multiple projects in a single repository, which helps to simplify the complexity of code sharing, version control, building and deployment, and provides better reusability and collaboration. Monorepo advocates an open, transparent and shared organizational culture. This method has been widely used by many large companies, such as Google, Facebook and Microsoft.
          </p>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">MonoRepo Evolution</h2>
          <figure>
            <Image
              alt="Evolution Image"
              className="aspect-video object-cover"
              height={340}
              src={evolution}
              width={550}
            />
            <figcaption className="text-gray-500 text-xs">Staging MonoRepo </figcaption>
          </figure>
          <br />
          <div>
            <ul>
              <li>
                <strong>Phase 1: Single-repository monolith application.</strong> A Git repository maintains the project code. As the complexity of iterative business increases, the project code will become more and more numerous and complex. The efficiency of building a large amount of code will also decrease, eventually leading to a single monolith application. This code management method is called Monolith.
              </li>
              <br />
              <li>
                <strong>Phase 2: Multi-repository and multi-module application.</strong> The project is then broken down into multiple business modules and managed in multiple Git repositories. Module decoupling reduces the complexity of the monolithic application. Each module can be independently coded, tested, and released. Code management is simplified and build efficiency is improved. This code management method is called MultiRepo.
              </li>
              <br />
              <li>
                <strong>Phase 3: Single warehouse multi-module application.</strong> With the increase of business complexity, there are more and more module warehouses. Although MultiRepo is decoupled from the business, it increases the difficulty of project engineering management. As the module warehouse reaches a certain level, there will be several problems: cross-warehouse code is difficult to share; module dependency management scattered in a single warehouse is complicated (after the underlying module is upgraded, other upper-level dependencies need to be updated in time, otherwise there will be problems); and the build time is increased. Therefore, it has become a trend to integrate multiple projects into one warehouse, share project configuration, and quickly share module code. This code management method is called MonoRepo.
              </li>
            </ul>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">MonoRepo advantages and disadvantages</h2>
          <figure>
            <Image
              alt="Comparaison Image"
              className="aspect-auto object-cover"
              height={340}
              src={comparaison}
              width={550}
            />
            <figcaption className="text-gray-500 text-xs">Staging MonoRepo</figcaption>
          </figure>
          <br />

          <div>
            <p className="space-x-1">
              <a href="https://en.wikipedia.org/wiki/Monorepo" className="underline">en.wikipedia.org/wiki/Monorepo</a> <span>has a good explanation with the advantages and disadvantages.</span>
            </p>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">Scenes</th>
                  <th scope="col" class="px-6 py-3">MultiRepo</th>
                  <th scope="col" class="px-6 py-3">MonoRepo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Code Visibility</td>
                  <td className="px-6 py-4">✅ Code isolation, developers only need to focus on the warehouse they are responsible for ❌ Package management is divided according to their respective owners. When problems occur, they need to judge and solve them in the dependent packages.</td>
                  <td className="px-6 py-4">✅ Multiple related projects in one repository make it easy to see the change trend of the entire code base and better team collaboration. ❌ Increased risk of non-owners modifying the code</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Dependency Management</td>
                  <td className="px-6 py-4">❌ Multiple repositories have their own node_modules, which may lead to duplicate installation of dependencies and occupy a lot of disk memory.</td>
                  <td className="px-6 py-4">✅ Multiple project codes are in one repository, and the same version of dependencies are promoted to the top level and installed only once, saving disk memory.</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Code permissions</td>
                  <td className="px-6 py-4">✅ Each project has its own separate repository, so the code will not be modified by mistake, and problems with a single project will not affect other projects.</td>
                  <td className="px-6 py-4">❌ Multiple project codes are in one repository, and there is no project-level permission control. If a problem occurs in one project, all projects may be affected.</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Development Iteration</td>
                  <td className="px-6 py-4">✅ Small warehouse size, clear module division, strong maintainability. ❌ Switching between multiple warehouses (editor and command line) is very inefficient if there are many projects. When multiple warehouses have dependencies, manual npm linkoperation is required, which is cumbersome. ❌ Dependency management is inconvenient. Multiple dependencies may have different versions in multiple warehouses, and repeated installation will cause conflicts between dependencies of different projects when npm linking.</td>
                  <td className="px-6 py-4">✅ Multiple projects are in one warehouse, you can see the whole picture of related projects, and coding is very convenient. ✅ High code reuse, convenient for code refactoring. ❌ Multiple projects are in one warehouse, the code volume is several GB, and git cloneit takes a long time. ✅ Convenient dependency debugging. In the scenario of dependency package iteration, with the help of tools, the latest version of dependency is directly used with automatic npm link, which simplifies the operation process.</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Project Configuration</td>
                  <td className="px-6 py-4">❌ Each project builds, packages, and verifies its own code. Inconsistencies can lead to code or build differences.</td>
                  <td className="px-6 py-4">✅ Multiple projects are in one repository, the project configuration is consistent, and the code quality standards and style are also easy to be consistent.</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Build and deploy</td>
                  <td className="px-6 py-4">❌ There are dependencies between multiple projects. When deploying, you need to manually go to different repositories to modify the version and deploy them in order, which is cumbersome and inefficient.</td>
                  <td className="px-6 py-4">✅ The buildability Monorepo tool can configure the build priority of dependent projects and complete all deployments with one command.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Monorepo with PNPM workspace</h2>
          <div>
            PNPM only need <code>pnpm-workspace.yaml</code> on your root repository alongside <code>packages.json</code>, with array path to directory in <code>packages</code> property. <br /><br />
            <Code code={workspace} language="yaml" showLineNumbers /> <br />
            <Code code={dirStructure} language="bash" showLineNumbers /> <br />
            <strong>NOTE:</strong> <code>apps/*</code> and <code>packages/*</code> is very popular monorepo structure, where <code>apps/*</code> is projects directory and <code>packages/*</code> is reusable code.
            All you need just create directory inside <code>packages</code> list, change directory to it, and do <code>pnpm init</code>. <br />
            <Code code={command1} language="bash" showLineNumbers /> <br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">List all workspaces</h2>
          <div>
            <Code code={command2} language="bash" showLineNumbers /> <br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Command specific workspace</h2>
          <div>
            <Code code={command3} language="bash" showLineNumbers /> <br />
            <strong>NOTE:</strong> PNPM use <code>name</code> property in <code>package.json</code> to filter workspace, so make sure ever name in <code>package.json</code> is unique.
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Add local dependency</h2>
          <div>
            <Code code={command4} language="bash" showLineNumbers /> <br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">Project example</h2>
          <div>
            <Code code={command5} language="bash" showLineNumbers /> <br />
            <Code code={command6} language="javascript" showLineNumbers /> <br />
            <Code code={command7} language="javascript" showLineNumbers /> <br />
            <Code code={command8} language="bash" showLineNumbers /> <br />
            <Code code={command9} language="json" showLineNumbers /> <br />
            <Code code={command10} language="json" showLineNumbers /> <br />
            <Code code={command11} language="bash" showLineNumbers /> <br />
          </div>
          <h2 className="my-8 text-3xl font-bold tracking-tight dark:text-light">How i use this</h2>
          <div>
            <figure>
              <Image
                alt="Webhooks Project Image"
                className="aspect-auto object-cover w-full h-full"
                src={webhookImg}
              />
              <figcaption className="text-gray-500 text-xs">Webhooks With PNPM MonoRepo</figcaption>
            </figure>
            <br />
            I worked with good craftsmen on the migration of a set of services called Webhooks that shared the same dependencies from a multirepo architecture to a monorepo. Today, the <strong>DX (Developer Experience)</strong> has been significantly enhanced with <strong>ease of maintenance, 100% redundant code reduction and almost simple handling thanks to structured documentation ranging from project initialization in a local environment to the scheme of infrastructure architecture in staging and production</strong>. <br />
            I pushed this project further by also integrating a <strong>Continuous Deployment of Releases in the different environments (staging and production) with semantically versioned docker images</strong>. <br /><br />
            <figure>
              <Image
                alt="Architecture Image"
                className="aspect-auto object-cover w-full h-full"
                src={archi}
              />
              <figcaption className="text-gray-500 text-xs">Architecture Webhooks in AWS</figcaption>
            </figure>
            <br />
          </div>
        </div>
      </article>
    </>
  )
}