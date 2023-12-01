import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import img from "../public/images/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import curriculumm from "../public/curriculum.pdf"
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out-quart", delay: 0, duration: 750 });
  }, []);

  return (
    <div
      id="Banner"
      data-aos="fade-up"
      className=" lg:px-52 px-10 lg:py-6 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center pb-2"
    >
      <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
        <h1 className="text-6xl font-bold mb-8 leading-normal ">
          <span className="text-primary-dark">Bienvenidos, soy</span> <br />
          <TypeAnimation
            sequence={["Agustin Acosta", 1000, "Desarrollador", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[20px] text-center lg:text-justify ">
          Hola! Mi nombre es <span className="font-bold">Agustin</span> . Soy de
          la ciudad de <span className="font-bold">Corrientes, Argentina</span>.
          En 2022 comencé a estudiar la carrera de Licenciatura en Sistemas de
          información, en la Universidad Nacional del nordeste y a su vez
          profundizo mis habilidades en las herramientas actuales de forma
          autodidacta. Tengo interés en seguir desarrollandome y mejorar mis
          habilidades como Backend Developer.
        </p>
        <div className="py-2 flex items-center justify-center">
          <div className="flex space-x-2 ">
            <a
              href="https://github.com/agusacost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark rounded-full glow p-2"
            >
              <AiFillGithub className="text-[28px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-agustin-acosta-6840aa233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark rounded-full glow p-2"
            >
              <FaLinkedin className="text-[28px]" />
            </a>
            <a
              href="https://www.instagram.com/agustinacost_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark rounded-full glow p-2"
            >
              <FaInstagram className="text-[28px]" />
            </a>
            <div>
              <a
                href={curriculumm}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold text-primary-dark rounded-3xl  border-2 border-primary-dark p-1 mt-1 glow"
              >
                Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={img}
        width={290}
        height={290}
        className="rounded border-2 border-primary-dark img_glow"
        alt="profile image"
      />
    </div>
  );
};

export default Banner;
