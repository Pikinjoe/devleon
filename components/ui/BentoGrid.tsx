"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./BackgroundGradient";
import { GlobeDemo } from "./GridGlobe";
import { FaHtml5, FaReact, FaCopy } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import TailwindcssButtons from "./TailwindcssButtons";
import Image from "next/image";

const leftIcons = [FaHtml5, FaReact, SiTypescript];
const rightIcons = [RiNextjsFill, RiTailwindCssFill, IoLogoJavascript];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-12 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("devleoncode@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border transition duration-200 hover:shadow-xl border-white/[0.1] bg-black shadow-none relative overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={`${title || "Grid Item"} background`}
              width={700}
              height={400}
              className={cn(imgClassName, "object-center object-contain")}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>
        <div
          className={`absolute right-0 bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={`${title || "Grid Item"} secondary image`}
              width={200}
              height={200}
              className="object-center object-contain w-full h-full"
              style={{ objectFit: "contain" }}
              sizes="200px"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradient>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradient>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 group-hover/bento:z-50 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10 z-50"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-20">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 text-white/80 z-50 ">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 p-4">
              <div className="flex flex-col gap-1 lg:gap-3">
                {leftIcons.map((Icon, index) => (
                  <span
                    key={`left-icon-${index}`}
                    className="lg:p-2 p-1 opacity-50 lg:opacity-100 rounded-full flex justify-center items-center text-white/80 bg-[#10132e]"
                  >
                    <Icon />
                  </span>
                ))}
                <span className="p-3 rounded-full text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-1 lg:gap-3">
                <span className="p-3 rounded-full text-center bg-[#10132e]" />
                {rightIcons.map((Icon, index) => (
                  <span
                    key={`right-icon-${index}`}
                    className="lg:p-2 p-1 opacity-50 lg:opacity-100 rounded-full flex justify-center items-center text-white/80 bg-[#10132e]"
                  >
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <TailwindcssButtons
                title={copied ? "Email copied" : "Copy my email"}
                icon={<FaCopy />}
                position="left"
                otherClasses="!bg-[#161a31] text-white/80 px-3"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
