import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";

const about = () => {
  return (
    <>
      <Head>
        <title>My PortFolio | About Page</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3  flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Innovative software development professional with 2 years of
                experience, dedicated to pushing the boundaries of technology
                and crafting groundbreaking applications. Committed to
                delivering clean, error-free, and reliable code that not only
                meets current requirements but also anticipates and addresses
                future needs. Adept at staying at the forefront of dynamic
                software trends, I am proficient in a diverse range of
                programming languages, frameworks, and cutting-edge programming
                tools.
              </p>
              <p className="font-medium my-4">
                Innovative software development professional with 2 years of
                experience, dedicated to pushing the boundaries of technology
                and crafting groundbreaking applications. Committed to
                delivering clean, error-free, and reliable code that not only
                meets current requirements but also anticipates and addresses
                future needs. Adept at staying at the forefront of dynamic
                software trends, I am proficient in a diverse range of
                programming languages, frameworks, and cutting-edge programming
                tools. My passion for software development goes beyond mere
                proficiency – it&apos;s a commitment to continuous improvement
                and staying ahead in an ever-evolving technological landscape.
                With a keen eye for detail and a focus on excellence, I bring a
                proactive approach to problem-solving, ensuring that the
                software solutions I create not only meet but exceed
                expectations.
              </p>
              <p className="font-medium">
                Whether it&apos;s architecting scalable applications, optimizing
                performance, or implementing innovative features, I thrive on
                the challenges of creating software that not only meets
                functional requirements but also delights users. With a
                foundation built on a solid understanding of software
                engineering principles, I am poised to contribute significantly
                to the success and growth of any dynamic and forward-thinking
                development team
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
             dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Navjit"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw
                "
              />
            </div>
            <div className="col-span-2 flex flex-col xl:mt-8 xl:col-span-8 xl:items-center md:order-3">
              <Skills />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
