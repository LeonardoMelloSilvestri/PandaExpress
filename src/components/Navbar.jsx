import { useState } from "react";
import logoPanda from "../assets/img/PandaLogo.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function openNav() {
    setNav(!nav);
  }
  return (
    <>
      <nav className="z-20 relative flex justify-between lg:justify-around p-6 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500">
        <div>
          <img className="w-32 lg:w-40 h-auto rounded-2xl" src={logoPanda} />
        </div>
        <div className="max-[900px]:hidden flex gap-8 text-lg text-white drop-shadow-lg font-semibold">
          <a
            href="#platos"
            className="hover:scale-110 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Platos
          </a>
          <a
            href="#promociones"
            className="hover:scale-110 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Promociones
          </a>
          <a
            href="#sobreNosotros"
            className="hover:scale-110 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Sobre Nosotros
          </a>
          <a
            href="#testigos"
            className="hover:scale-110 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Testigos
          </a>
          <a
            href="#contacto"
            className="hover:scale-110 hover:text-yellow-500 transition-all duration-200 cursor-pointer"
          >
            Contacto
          </a>
        </div>
        <div className="min-[900px]:hidden">
          <i
            onClick={() => openNav()}
            className={`${
              nav == false ? "fa-solid fa-bars" : "fa-solid fa-x"
            } text-2xl text-yellow-400 cursor-pointer hover:scale-125 transition-all`}
          ></i>
        </div>
      </nav>

      <div
        className={`${
          nav == false ? "hidden" : ""
        } mobile-menu flex flex-col gap-8 items-center justify-center z-30 absolute bg-yellow-600 h-screen w-screen top-0 text-3xl text-white drop-shadow-lg`}
      >
        <a onClick={() => openNav()} href="#platos">
          Platos
        </a>
        <a onClick={() => openNav()} href="#promociones">
          Promociones
        </a>
        <a onClick={() => openNav()} href="#sobreNosotros">
          Sobre Nosotros
        </a>
        <a onClick={() => openNav()} href="#testigos">
          Testigos
        </a>
        <a onClick={() => openNav()} href="#contacto">
          Contacto
        </a>
        <i
          onClick={() => openNav()}
          className="fa-solid fa-x absolute top-0 right-0 p-6"
        ></i>
      </div>
    </>
  );
}
