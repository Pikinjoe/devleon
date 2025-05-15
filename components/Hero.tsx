"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TailwindcssButtons from "./ui/TailwindcssButtons";
import Image from "next/image";
import { motion } from "motion/react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Stats from "./ui/Stats";
import { socials } from "@/data";

const platformIcons: { [key: string]: React.ReactNode } = {
  Twitter: <FaXTwitter />,
  Linkedin: <FaLinkedinIn />,
  Github: <FaGithub />,
  Whatsapp: <FaWhatsapp />,
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <Spotlight />
      <section className="">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="flex gap-4 items-center justify-center order-2 lg:order-none">
            <div className="flex flex-col justify-center items-center mt-5 self-start">
              <div className="w-5 h-5 rounded-full gradient-purple-violet" />
              <div className="w-1 h-52 gradient-purple-violet" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white h1">
                Hi, I'm{" "}
                <span className="gradient-text-purple-pink">
                  Agu Joe Chukwuebuka
                </span>
              </h1>
              <TextGenerateEffect words="A Frontend Developer Crafting Responsive, Pixel-Perfect User Interfaces" />
              <div className="mt-4 flex flex-col gap-4 lg:gap-10 items-center justify-center sm:flex-row">
                <a href="/Resume.pdf" download>
                  <TailwindcssButtons
                    title="Download CV"
                    icon={<FaDownload />}
                    position="right"
                    otherClasses="px-3 text-white text-sm hover:text-slate-950 hover:bg-pink-500"
                  />
                </a>
                <div className="flex gap-2">
                  {socials.map((social) => (
                    <a
                      href={social.path}
                      key={social.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TailwindcssButtons
                        title=""
                        icon={platformIcons[social.platform]}
                        position="left"
                        otherClasses="p-4 lg:text-xl text-white hover:text-slate-950 hover:bg-pink-500"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none">
            <div className="relative h-full w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                  }}
                  className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute"
                >
                  <Image
                    src="/assets/profile.png"
                    priority
                    quality={100}
                    fill
                    alt="Devleon photo"
                    className="object-contain rounded-full"
                  />
                </motion.div>

                <motion.svg
                  className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
                  fill="transparent"
                  viewBox="0 0 506 506"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="253"
                    cy="253"
                    r="258"
                    stroke="#cbacf9"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                      strokeDasharray: [
                        "15 120 25 25",
                        "16 25 92 72",
                        "4 250 22 22",
                      ],
                      rotate: [120, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </div>
  );
};

export default Hero;
