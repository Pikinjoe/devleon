import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonial";
import { testimonials } from "@/data";
import { div } from "motion/react-client";

const Testimonies = () => {
  return (
    <div id="testimonials">
      <h1 className="heading text-white/80">
        satisfied<span className="purple"> clients</span> honest reviews
      </h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default Testimonies;
