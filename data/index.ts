import { SrcAlphaSaturateFactor } from "three";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const socials = [
  { platform: "Twitter", path: "https://twitter.com/AguPikinJoe" },
  { platform: "Linkedin", path: "https://linkedin.com/in/AguJoeDevleon" },
  { platform: "Github", path: "https://github.com/Pikinjoe" },
  { platform: "Whatsapp", path: "https://wa.me/message/EEWJC4WLDCS3N1" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "md:col-span-7 row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/assets/desktop.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "md:col-span-5 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always open to learning and improving",
    className: "md:col-span-5 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-5 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/assets/grid.svg",
    spareImg: "/assets/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Next.js project",
    description: "The Inside Scoop",
    className: "md:col-span-7 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/assets/code.png",
    spareImg: "",
  },
  {
    id: 6,
    title: "Are you impressed with my work?",
    description: "",
    className: "md:col-span-5 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Certisfy grocery web app",
    des: "Simplify your grocery shopping with Certisfy. Seemlessly shop at your comfort.",
    img: "/assets/certisfy.png",
    iconLists: [
      "/assets/re.svg",
      "/assets/tail.svg",
      "/assets/express.svg",
      "/assets/mongo.svg",
      "/assets/cloud.svg",
    ],
    link: "https://certisfy.netlify.app/",
  },
  {
    id: 2,
    title: "Devleon Todo web app  with ReactJS",
    des: "A modern todo web app with an upto date weather report. Dynamically renders date and time.",
    img: "/assets/todo.png",
    iconLists: [
      "/assets/re.svg",
      "/assets/tail.svg",
      "/assets/openweather.png",
    ],
    link: "https://devleontodowebpage.netlify.app/",
  },
  {
    id: 3,
    title: "Demo moviebox web app with React",
    des: "A Demo moviebox website that updates using TMDB API's built with modern technologies.",
    img: "/assets/moviebox.png",
    iconLists: ["/assets/re.svg", "/assets/tail.svg", "/assets/tmdb.png"],
    link: "https://moviesdemobox.netlify.app/",
  },
  {
    id: 4,
    title: "Modern portfolio website",
    des: "My portfolio built with modern technologies and powered by Aceternity UI",
    img: "/assets/dev.png",
    iconLists: [
      "/assets/next.svg",
      "/assets/ts.svg",
      "/assets/re.svg",
      "/assets/tail.svg",
      "/assets/fm.svg",
      "/assets/aceternity.png",
    ],
    link: "https://devleoncode.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with DevLeon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. DevLeon's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, DevLeon is the ideal partner.",
    name: "Michael Johnson",
    designation: "Director of AlphaStream Technologies",
    src: "/assets/andres.jpg",
  },
  {
    quote:
      "Working with DevLeon transformed our website into a seamless, user-friendly experience. His attention to detail, creative problem-solving, and commitment to excellence made the entire process smooth and enjoyable. DevLeon is a true professional who brings passion to every project—highly recommended!",
    name: "Sarah Thompson",
    designation: "CEO of BrightPath Solutions",
    src: "/assets/connor.jpg",
  },
  {
    quote:
      "DevLeon’s expertise in frontend development is unmatched. He took our vision and turned it into a stunning, responsive website that exceeded our expectations. His ability to communicate clearly and deliver on time made him a joy to work with. For anyone looking to boost their online presence, DevLeon is the go-to engineer.",
    name: "David Martinez",
    designation: "Founder of Nexus Innovations",
    src: "/assets/jurica.jpg",
  },
  {
    quote:
      "DevLeon brought our project to life with his incredible skill set and infectious enthusiasm. His ability to balance aesthetics with functionality resulted in a website that not only looks fantastic but performs flawlessly. If you want a frontend engineer who truly cares about your success, DevLeon is your guy.",
    name: "Emily Chen",
    designation: "Marketing Lead at Horizon Enterprises",
    src: "/assets/jake.jpg",
  },
  {
    quote:
      "Partnering with DevLeon was a game-changer for our brand. His technical expertise, paired with a keen eye for design, delivered a website that perfectly reflects our identity. DevLeon’s proactive approach and dedication to quality make him an exceptional choice for any development project.",
    name: "James Carter",
    designation: "COO of Quantum Dynamics",
    src: "/assets/male.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp1.svg",
  },
  {
    id: 2,
    title: "Meta Frontend Engineering Student",
    desc: "Learning, designing and developing asthetically appealing web platforms under meta.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/assets/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance WebApp Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/assets/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp4.svg",
  },
];
