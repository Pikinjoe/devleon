import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonies from "@/components/Testimonies";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <p
          className="text-4xl md:text-5xl gradient-text-purple-pink font-extrabold mt-10 skew-6 md:mt-32" 
        >
          DevLeon
        </p>
        <Hero />
        <Grid />
        <Projects />
        <Testimonies />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
