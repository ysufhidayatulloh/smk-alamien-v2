"use client";
import React from "react";
import { StickyScroll } from "./StickyScrollReveral";
import Image from "next/image";

const content = [
  {
    title: "Vision of Al-Amien High School",
    description:
      "The realization of Al-Amien Kediri Vocational School as a vocational education and training institution in the Islamic boarding school environment which is capable of producing graduates who are professional, faithful and devout to fulfill job opportunities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ImageAbout-Img1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Mission of Al-Amien High School",
    description:
      "Developing Al-Amien Vocational School into an integrated school with an Islamic boarding school program - Improving the quality of educational facilities and infrastructure and training - Improving the quality of human resources - Providing graduates who are skilled, professional, have life competencies in accordance with the needs of employment and can develop themselves sustainably to improve the standard of living.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Image-03.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
