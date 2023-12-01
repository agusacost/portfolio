import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className=" lg:hidden block absolute top-16 w-full left-0 right- bg-primary-dark transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Banner">
            <li className="my-4 py-4">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4">Servicios</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4">Proyectos</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4">Contacto</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="bg-primary-dark fixed w-full z-10 top-0">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1 cursor-pointer">
          <Link spy={true} smooth={true} to="Banner">
            <span className="text-3xl font-bold">Logo</span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className=" flex-10 ">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Banner">
                <li className="hover:border-b-2 hover:text-gray-100 transition hover:border-gray-100 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:border-b-2 hover:text-gray-100 transition hover:border-gray-100 cursor-pointer">
                  Servicios
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:border-b-2 hover:text-gray-100 transition hover:border-gray-100 cursor-pointer">
                  Proyectos
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:border-b-2 hover:text-gray-100 transition hover:border-gray-100 cursor-pointer">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className=" block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
