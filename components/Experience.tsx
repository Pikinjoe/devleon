import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Head from "next/head";

const Experience = () => {
  return (
    <div className="pb-20">
      <Head>
        <title>DevLeon's Work Experience | Frontend Developer</title>
        <meta
          name="description"
          content="Explore DevLeon's professional experience as a frontend developer, including roles in React and Next.js projects."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Agu Joe Chukwuebuka",
            hasOccupation: workExperience.map(({ title, desc }) => ({
              "@type": "Occupation",
              name: title,
              description: desc,
            })),
          }),
        }}
      />
      <h1 className="heading text-white/80">
        My work<span className="purple"> experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 5000) + 5000}
            className="flex-1  text-white border-slate-500"
            role="article"
            aria-label={`Experience: ${card.title}`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white/80 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
