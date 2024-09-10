"use client";

import { studyprogram } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | SMK Al - Amien Kota Kediri",
  description: "About Us School",
};

const StudyProgram = () => {
  return (
    <div className="py-20" id="studyprogram">
      <h1 className="heading">
        Program Studi <span className="text-purple">SMK Al-Amien</span>
      </h1>
      <p className="text-center md:tracking-wider  mt-8 text-sm md:text-lg lg:text-lg">
        Sekolah Kejuruan Al-Amien adalah tempat yang penuh dengan peluang dan
        inovasi! Dengan tiga jurusan yang menarik, kami menawarkan keahlian dan
        pengetahuan yang tak ternilai dalam Teknik Komputer dan Jaringan (TKJ),
        Teknik Kendaraan Ringan (TKR), dan Teknik Sepeda Motor (TSM). Di sini,
        siswa kami diundang untuk menjelajahi dunia teknologi, menguasai
        keterampilan praktis, dan menciptakan masa depan yang cerah di bidang
        pilihan mereka. Bergabunglah dengan kami di Sekolah Kejuruan kami dan
        bersiaplah untuk meraih kesuksesan di dunia nyata!
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {studyprogram.map(({ id, title, des, img, iconLists, link, name }) => (
          <div
            key={id}
            className=" sm:h-[41rem] h-[32rem] lg:min-h[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={name} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 "
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-xs line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-[#10132E] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-1" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyProgram;
