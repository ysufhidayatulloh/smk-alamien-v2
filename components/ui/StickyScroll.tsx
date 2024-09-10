"use client";
import React from "react";
import { StickyScroll } from "./StickyScrollReveral";
import Image from "next/image";

const content = [
  {
    title: "Visi SMK Al-Amien",
    description:
      "Terwujudnya SMK Al-Amien Kediri sebagai lembaga pendidikan dan pelatihan vokasi di lingkungan pondok pesantren yang mampu menghasilkan lulusan yang profesional, beriman dan bertaqwa untuk memenuhi kesempatan kerja.",
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
    title: "Misi SMK Al-Amien",
    description:
      "Mengembangkan SMK Al-Amien menjadi sekolah terpadu dengan program pondok pesantren - Meningkatkan kualitas sarana dan prasarana pendidikan serta pelatihan - Meningkatkan kualitas sumber daya manusia - Menyediakan lulusan yang terampil, profesional, memiliki kompetensi hidup sesuai dengan kebutuhan lapangan kerja serta dapat mengembangkan diri secara berkelanjutan untuk meningkatkan taraf hidup.",
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
