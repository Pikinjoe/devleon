import React from "react";
import TailwindcssButtons from "./ui/TailwindcssButtons";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { socials } from "@/data";

const platformIcons: { [key: string]: React.ReactNode } = {
  Twitter: <FaXTwitter />,
  Linkedin: <FaLinkedinIn />,
  Github: <FaGithub />,
  Whatsapp: <FaWhatsapp />,
};

const Footer = () => {
  return (
    <div className="w-full pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-white/80 heading">
          Ready to take your <span className="purple">online and digital </span>
          presence to the next level
        </h1>
        <p className="text-white/60 md:mt-10 my-5 text-center">
          Reach out to me today let's discuss how I can help you achieve your
          goals.
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
              rel="noopener noreferrer"
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
