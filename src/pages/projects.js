import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons.";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

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
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light
      " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
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
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semiBold"
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
  "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl
      " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="flex mt-2 items-center justify-between w-full">
          {link !== "/" && (
            <Link
              href={githublink}
              target="_blank"
              className="text-lg font-semiBold underline"
            >
              Visit
            </Link>
          )}
          {githublink !== "/" && (
            <Link href={githublink} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-88 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                type="Featured Project"
                githublink="#"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
