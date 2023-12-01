import img1 from "../public/images/portfolio.png";
import img2 from "../public/images/gestionBiblioteca.jpg";
import img3 from "../public/images/GestorTickets/gestor1.jpg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-bold mb-10 leading-normal uppercase text-primary-dark"
      >
        Proyectos
      </h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 justify-around gap-4 border-2 border-primary-dark rounded p-3">
          <img className="h-52 border" src={img1} alt="" />
          <h1 className="font-semibold text-primary-dark text-2xl text-center">Portfolio</h1>
          <p className="text-[16px] text-justify">
            Proyecto creado para promocionar mi perfil como desarrollador hecho en react, implementando diversas librerias. 
          </p>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 justify-around gap-4 border-2 border-primary-dark rounded p-3">
          <img className="h-52 border" src={img3} alt="gestor tickets" />
          <h1 className="font-semibold text-primary-dark text-2xl text-center">Gestor Tickets</h1>
          <p className=" text-justify"> 
            Proyecto CRUD creado para el programa incluir futuro a modo de gestion de comprobantes para la recepcion de netbooks.
          </p>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 justify-around gap-4 border-2 border-primary-dark rounded p-3">
          <img className=" h-52 border items-center" src={img2} alt="gestor biblioteca" />
          <h1 className="font-semibold text-primary-dark text-2xl text-center">Gestor Biblioteca</h1>
          <p className="text-justify">
            Proyecto integrador para la facultad, para la materia de programacion orientada a objetos hecho con
            java usando BlueJ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
