import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white lg:px-36 px-4 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-3 gap-1 mb-4">
          <a
            href="https://github.com/agusacost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-agustin-acosta-6840aa233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/agustinacost_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="">
          <span>@2023 Agustin Acosta. Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
