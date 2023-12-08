import pandaLogo from "../assets/img/pandaLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-flow-row lg:grid-flow-col justify-around mt-16 bg-emerald-600 p-12 text-white gap-12">
        <div
          className="grid place-items-center col-span-2 lg:col-span-1
        "
        >
          <img className="w-44 rounded-xl" src={pandaLogo} alt="" />
          <div className="flex justify-center gap-3 text-4xl mt-3">
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
        <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
          <h1>Weebly Themes</h1>
          <h1>Pre-Sales FAQ</h1>
          <h1>Submit a ticket</h1>
        </div>
        <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
          <h1>Weebly Themes</h1>
          <h1>Pre-Sales FAQ</h1>
          <h1>Submit a ticket</h1>
        </div>
        <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
          <h1>Weebly Themes</h1>
          <h1>Pre-Sales FAQ</h1>
          <h1>Submit a ticket</h1>
        </div>
        <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
          <h1>Weebly Themes</h1>
          <h1>Pre-Sales FAQ</h1>
          <h1>Submit a ticket</h1>
        </div>
      </footer>
    </>
  );
}
