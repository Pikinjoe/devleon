import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { FaLocationArrow } from "react-icons/fa6";
import Head from "next/head";

const Projects = () => {
  return (
    <div className="py-20 " id="projects">
      <Head>
        <title>Projects by DevLeon | Frontend Developer</title>
        <meta
          name="description"
          content="Explore DevLeon's frontend development projects, including React and Next.js applications like Certisfy and MovieBox."
        />
      </Head>
      <h1 className="heading text-white/80">
        My <span className="purple"> recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white/80">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:h-[41rem] sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    name: title,
                    description: des,
                    url: link,
                    image: img,
                    author: {
                      "@type": "Person",
                      name: "Agu Joe Chukwuebuka",
                    },
                  }),
                }}
              />
              <div className="relative flex items-center justify-center sm:w-[570] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/assets/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <a
                  href={link || "/"}
                  rel="noopener noreferrer"
                  aria-label={`Visit live site for ${title}`}
                  target="_blank"
                  className="flex justify-center items-center  cursor-pointer"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbabf9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
