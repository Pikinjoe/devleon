import React from "react";
import Head from "next/head";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonial";
import { testimonials } from "@/data";

const Testimonies = () => {
  return (
    <div id="testimonials">
      <Head>
        <title>Testimonials for DevLeon | Frontend Developer</title>
        <meta
          name="description"
          content="Read client testimonials for DevLeon's frontend development services, showcasing expertise in React and Next.js projects."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            testimonials.map(({ quote, name, designation }) => ({
              "@context": "https://schema.org",
              "@type": "Review",
              reviewBody: quote,
              author: { "@type": "Person", name: name },
              itemReviewed: {
                "@type": "Person",
                name: "Agu Joe Chukwuebuka",
                jobTitle: "Frontend Developer",
              },
            }))
          ),
        }}
      />
      <h1 className="heading text-white/80">
        Satisfied<span className="purple"> Clients</span> Honest Reviews
      </h1>
      <p className="text-white/60 md:mt-10 my-5 text-center">
        {testimonials[0].intro}
      </p>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default Testimonies;
