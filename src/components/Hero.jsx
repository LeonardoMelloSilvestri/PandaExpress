import hero from "../assets/img/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <article className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 flex justify-center py-2 lg:py-12">
        <div className="flex justify-center px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
            <div className="flex flex-col gap-6 text-white drop-shadow-lg">
              <h1 className="font-bold text-5xl sm:text-6xl font-serif max-w-lg !leading-snug">
                La mejor comida rápida en Guasipati
              </h1>
              <h1 className="text-2xl">
                Come rico, come diferente, come en Panda Express!
              </h1>
              <div className="flex gap-6 text-5xl">
                <FontAwesomeIcon
                  className="cursor-pointer hover:scale-125"
                  icon={faWhatsapp}
                />
                <FontAwesomeIcon
                  className="cursor-pointer hover:scale-125"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="cursor-pointer hover:scale-125"
                  icon={faFacebook}
                />
              </div>
            </div>
            <div className="grid justify-items-center">
              <img className="w-64 lg:w-96" src={hero} alt="" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
