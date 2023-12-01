import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import secret from "../../Config";

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
    <div>
      {!isSent ? (
        <div id="Contact" className="lg:p-40 md:p-20 px-20 flex flex-col items-center">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-bold mb-10 leading-normal uppercase text-primary-dark"
          >
            Contacto
          </h1>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 lg:w-1/2"
          >
            <div className="lg:flex gap-6">
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
              rows={10}
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
        </div>
      ) : (
        <p>Enviado correctamente!</p>
      )}
    </div>
  );
};

export default Contact;
