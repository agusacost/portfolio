import { FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";

const Services = () => {
  return (
    <div
      data-aos="fade-right"
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px]  font-bold mb-20 leading-normal uppercase text-primary-dark"
      >
        Servicios
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 justify-around gap-20">
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <FaJs className="text-[28px]" />
          <h2> Javascript</h2>
        </div>
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark  rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <FaNodeJs className="text-[28px] " />
          <h2> Node.Js</h2>
        </div>
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <FaReact className="text-[28px] " />
          <h2> React</h2>
        </div>
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <FaJava className="text-[28px] " />
          <h2> Java</h2>
        </div>
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <DiMongodb className="text-[28px] " />
          <h2> MongoDB</h2>
        </div>
        <div className="text-[26px] flex items-center justify-center font-semibold text-primary-dark rounded-3xl h-36 w-44 border-2 border-primary-dark b_glow">
          <DiMysql className="text-[28px]" />
          <h2> MySQL</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
