import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Siap untuk membawa <span className="text-purple">karier Anda</span> ke
          tingkat berikutnya?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Hubungi kami hari ini dan mari kita bahas bagaimana saya dapat
          membantu Anda mencapai tujuan karier Anda.
        </p>
        <a href="mailto:smkalamien.kdr@gmail.com">
          <MagicButton
            title="Contact Me Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <a className="md:text-base text-sm md:font-normal font-light items-center">
          Copyright © 2024 smkalamien.dev
        </a>

        <div className="flex items-center md:gap-3 gap-6">
          {/* {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
        
            </div>
          ))} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
