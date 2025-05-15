import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import Head from "next/head";

const Grid = () => {
  return (
    <section className="pt-10" id="about">
      <Head>
        <title>About DevLeon | Frontend Developer</title>
        <meta
          name="description"
          content="Learn about DevLeon, a frontend developer skilled in React, Next.js, and Tailwind CSS, passionate about building responsive web applications."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Agu Joe Chukwuebuka",
            jobTitle: "Frontend Developer",
            description:
              "Frontend developer specializing in React, Next.js, and Tailwind CSS, building responsive and scalable web applications.",
          }),
        }}
      />
      <h1 className="heading text-white/80 pb-20">
        About <span className="purple"> DevLeon - Frontend </span> Developer
      </h1>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
