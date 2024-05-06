import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "/",
  githublink = "/",
}) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
    border border-solid border-dark bg-light shadow-2xl p-12 relative
    rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 lg:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex mt-2 items-center">
          {githublink !== "/" && (
            <Link href={githublink} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          {link !== "/" && (
            <Link
              href={githublink}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semiBold
              sm:px-4 sm:text-base
              "
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link = "/", githublink = "/" }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
  border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
  xs:p-4
  "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 md:h-[102%] md:w-[101%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto object-contain" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex mt-2 items-center justify-between w-full">
          {link !== "/" && (
            <Link
              href={githublink}
              target="_blank"
              className="text-lg font-semiBold underline md:text-base"
            >
              Visit
            </Link>
          )}
          {githublink !== "/" && (
            <Link href={githublink} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-88 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Car Rental Application"
                summary="Introducing our innovative Car Rental Application, meticulously developed utilizing React, Tailwind CSS, and Next.js 14 technologies. 
                Powered by the Rapid API, this dynamic platform offers an extensive array of vehicle options with detailed specifications, providing users with unparalleled convenience and flexibility. 
                Leveraging the robust capabilities of Next Router, seamless navigation across diverse URLs is ensured, while advanced filter and search functionalities elevate user interaction. 
                Explore the forefront of technology in the realm of car rental services with our feature-rich application, setting new standards for efficiency and user experience."
                link="https://carshow-vercel-app.vercel.app/"
                type="Featured Project"
                githublink="https://github.com/dhaliwalnavjit/carshow"
                img={project1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Real time chat application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                githublink="https://github.com/dhaliwalnavjit/Chatroom"
                img={project2}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
