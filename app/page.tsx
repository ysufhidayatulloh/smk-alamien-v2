import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import { StickyScrollRevealDemo } from "@/components/ui/StickyScroll";
import StudyProgram from "@/components/StudyProgram";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { galery, navItems } from "@/data";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className=" w-full">
        <FloatingNav
          navItems={navItems}
          // navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <StickyScrollRevealDemo />
        <HeroParallax products={galery} />
        <StudyProgram />

        <Marquee autoFill pauseOnHover direction="right">
          <div className="bg-[#10132E] m-1 rounded-lg flex space-x-5 p-4 cursor-pointer">
            <a
              href="https://www.instagram.com/smkalamienkediri"
              target="_blank"
            >
              <img src="logosmk.svg" alt="logosmk" className="w-50 h-10" />
            </a>
          </div>
          <div className="bg-[#10132E] m-1 rounded-lg flex space-x-5 p-4 cursor-pointer">
            <a
              href="https://www.instagram.com/smkalamienkediri"
              target="_blank"
            >
              <img src="logosmk.svg" alt="logosmk" className="w-50 h-10" />
            </a>
          </div>
        </Marquee>

        <Marquee autoFill pauseOnHover>
          <div className="bg-[#10132E] m-1 rounded-lg flex space-x-5 p-4 cursor-pointer">
            <a
              href="https://www.instagram.com/smkalamienkediri"
              target="_blank"
            >
              <img src="logosmk.svg" alt="logosmk" className="w-50 h-10" />
            </a>
          </div>
          <div className="bg-[#10132E] m-1 rounded-lg flex space-x-5 p-4 cursor-pointer">
            <a
              href="https://www.instagram.com/smkalamienkediri"
              target="_blank"
            >
              <img src="logosmk.svg" alt="logosmk" className="w-50 h-10" />
            </a>
          </div>
        </Marquee>

        <Quotes />
        <Footer />
      </div>
    </main>
  );
}
