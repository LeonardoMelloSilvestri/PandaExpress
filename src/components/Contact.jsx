import contactUs from "../assets/img/ContactUs.png";

export default function Contact() {
  return (
    <>
      <article
        id="contacto"
        className="flex justify-center w-screen px-6 mt-12 lg:mt-24"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div>
            <h1 className="text-emerald-600 tracking-wide text-4xl font-semibold !leading-tight">
              Hable Con Nosotros
            </h1>
            <p className="font-semibold mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit?
            </p>

            <form className="flex flex-col gap-4 mt-8" action="">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="name">
                  Nombre:
                </label>
                <input
                  className="border-solid border-2 border-yellow-500 focus:border-emerald-600 outline-none p-2 rounded-xl"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="correo">
                  Correo:
                </label>
                <input
                  className="border-solid border-2 border-yellow-500 focus:border-emerald-600 outline-none p-2 rounded-xl mt-1"
                  id="correo"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="mensage">
                  Mensage:
                </label>
                <textarea
                  rows="4"
                  className="border-solid border-2 border-yellow-500 focus:border-emerald-600 outline-none p-2 rounded-xl mt-1"
                  id="mensage"
                />
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl mt-2">
                Enviar
              </button>
            </form>
          </div>
          <div>
            <img
              className="w-auto lg:w-[600px] h-auto rounded-2xl"
              src={contactUs}
              alt=""
            />
          </div>
        </div>
      </article>
    </>
  );
}
