import React from "react";
import TailwindcssButtons from "./ui/TailwindcssButtons";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { socials } from "@/data";
import Head from "next/head";

const platformIcons: { [key: string]: React.ReactNode } = {
  Twitter: <FaXTwitter />,
  Linkedin: <FaLinkedinIn />,
  Github: <FaGithub />,
  Whatsapp: <FaWhatsapp />,
};

const Footer = () => {
  return (
    <div className="w-full pb-10" id="contact">
      <Head>
        <title>Contact DevLeon | Frontend Developer</title>
        <meta
          name="description"
          content="Get in touch with DevLeon, a frontend developer specializing in React and Next.js, to discuss your web development project."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Agu Joe Chukwuebuka",
            email: "devleoncode@gmail.com",
            telephone: "+2348165069358",
            url: "https://devleoncode.netlify.app/",
            sameAs: socials.map((s) => s.path),
          }),
        }}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-white/80 heading">
          Elevate Your <span className="purple">Digital Presence</span> Today
        </h1>
        <p className="text-white/60 md:mt-10 my-5 text-center">
          Contact me to discuss how my frontend development expertise can bring
          your vision to life with React and Next.js.
        </p>

        <div className="flex gap-4 items-center">
          <a href="mailto:devleoncode@gmail.com">
            <TailwindcssButtons
              title="Let's get in touch"
              icon={<IoIosMail className="purple" />}
              position="right"
              otherClasses="text-white/80 px-2"
            />
          </a>
          <a href="tel:+2348165069358">
            <TailwindcssButtons
              title="+234 (81) 6506 9358"
              icon={<FaPhone className="purple" />}
              position="right"
              otherClasses="text-white/80 px-2"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:text-base text-sm md:font-normal font-light text-white/80">
          Copyright &copy; 2025 DevLeon
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socials.map((social) => (
            <a
              href={social.path}
              key={social.platform}
              target="_blank"
              rel={social.rel}
              aria-label={social.description}
            >
              <TailwindcssButtons
                title=""
                icon={platformIcons[social.platform]}
                position="left"
                otherClasses="p-4 lg:text-xl text-white"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
