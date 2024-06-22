import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Quotes = () => {
  return (
      <div className="flex justify-center relative my-20 z-10" id="quotes">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <h1 className="heading">
        Listen To What Our <span className="text-purple">Students Say</span>
      </h1>
      <p className="text-center md:tracking-wider  mt-7 text-sm md:text-lg lg:text-lg ">
        From moving quotes to glowing reviews, these voices reflect the trust
        and confidence our students place in us. Let their words speak volumes
        about the extraordinary experience.
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
