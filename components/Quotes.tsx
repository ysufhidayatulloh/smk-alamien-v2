import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Quotes = () => {
  return (
    <div className="flex justify-center relative my-20 z-10" id="quotes">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h1 className="heading">
          Dengarkan Apa Kata <span className="text-purple">Siswa Kami</span>
        </h1>
        <p className="text-center md:tracking-wider  mt-7 text-sm md:text-lg lg:text-lg ">
          Dari kutipan yang menyentuh hingga ulasan yang menggembirakan,
          suara-suara ini mencerminkan kepercayaan dan keyakinan yang diberikan
          siswa kepada kami. Biarkan kata-kata mereka berbicara banyak tentang
          pengalaman yang luar biasa.
        </p>
        <div className="flex flex-col items-center">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
