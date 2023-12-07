import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import secret from "../../Config";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = secret;

  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("*Por favor, introduce un correo electrónico válido.");
      return;
    }

    if (!name) {
      setError("*Por favor introduce tu nombre");
      return;
    }

    if (!message) {
      setError("*Por favor introduce un mensaje");
      return;
    }
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section
      id="Contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 mx-10 relative"
    >
      <div className="z-10">
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center my-4 mx-8">
      <h5
        className="text-[22px] font-bold mt-0 text-primary-dark"
      >
        Contactemos!
      </h5> 
      <p className="mb-4 max-w-md text-justify">Siempre estoy abierto a nuevas probuestas, no dudes en enviarme un mensaje. Intento comunicarme con vos lo antes posible!</p>
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
            </div>
    </div>
    </div>
      <div>
        {!isSent ? (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            <div className="gap-6">
              <input
                className="w-full my-3 rounded-lg p-4 border-2 border-primary-dark"
                placeholder="Nombre"
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full my-3 rounded-lg p-4 border-2 border-primary-dark"
                placeholder="Correo"
                type="email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className="w-full my-3 rounded-lg p-4 border-2 border-primary-dark"
              placeholder="Escribi tu mensaje..."
              name="message"
              cols={30}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button
              className="neno-button bg-primary-dark text-white text-[16px] font-semibold rounded hover:bg-slate-700  py-2 px-8 my-6 relative overflow-hidden"
              type="submit"
              value="Send"
            >
              Enviar Mensaje
            </button>
          </form>
        ) : (
          <p className="text-green-500 text-sm mt-6 flex flex-col justify-center items-center">*Enviado correctamente!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
