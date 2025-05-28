"use client";
import React from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal";

const Process = () => {
  return (
    <div className="w-full pb-20">
      <Head>
        <title>{"DevLeon\'s Development Process | Frontend Developer"}</title>
        <meta
          name="description"
          content="Discover DevLeon's frontend development process, from planning to launch, using React, Next.js, and Tailwind CSS."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "DevLeon's Frontend Development Process",
            step: [
              {
                "@type": "HowToStep",
                name: "Planning & Strategy",
                description:
                  "Collaborate to define website goals, target audience, and features, using tools like Figma for structure and navigation.",
              },
              {
                "@type": "HowToStep",
                name: "Development & Updates",
                description:
                  "Code responsive interfaces with React and Next.js, providing regular progress updates to ensure alignment.",
              },
              {
                "@type": "HowToStep",
                name: "Build & Launch",
                description:
                  "Develop functional code, test for performance, and launch an SEO-optimized website with Tailwind CSS.",
              },
            ],
          }),
        }}
      />
      <h1 className="heading text-white/80">
        My <span className="purple"> Frontend Development </span> Process
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="Collaborate to define website goals, target audience, and features, using tools like Figma for structure and navigation."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Updates"
          icon={<AceternityIcon order="Phase 2" />}
          description="Code responsive interfaces with React and Next.js, providing regular progress updates to ensure alignment."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Build & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="Develop functional code, test for performance, and launch an SEO-optimized website with Tailwind CSS."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] lg:h-[35rem] max-w-sm w-full mx-auto p-4 relative"
      role="region"
      aria-label={`Process step: ${title}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setHovered(!hovered)}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
            style={{ background: "transparent" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-active/canvas-card:-translate-y-4 absolute top-1/2 left-1/2 -translate-1/2 group-hover/canvas-card:opacity-0 group-active/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center group-active/canvas-card:opacity-100 group-active/canvas-card:text-white group-active/canvas-card:-translate-y-2">
          {title}
        </h2>
        <h2
          className="text-white/80 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center group-active/canvas-card:opacity-100 group-active/canvas-card:text-white group-active/canvas-card:-translate-y-2"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl text-white font-bold backdrop-blur-3xl gap-2 ">
          {order}
        </span>
      </button>
    </div>
  );
};

interface IconProps {
  className?: string;
  [key: string]: unknown; 
}

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Process;
