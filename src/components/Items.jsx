import clasicaCarne from "../assets/img/ClasicaCarne.png";
import polloCrispy from "../assets/img/PolloCrispy.png";
import pepitoMixto from "../assets/img/PepitoMixto.png";
import perroPolaco from "../assets/img/PerroPolaco.png";
import papasMixtas from "../assets/img/PapasMixtas.png";
import cesticas from "../assets/img/Cesticas.png";
import paninis from "../assets/img/Paninis.png";

export default function Items() {
  const items = [
    {
      id: 1,
      name: "Pepito Mixto",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: pepitoMixto,
    },
    {
      id: 2,
      name: "Clasica de Carne",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: clasicaCarne,
    },
    {
      id: 3,
      name: "Perro Polaco",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: perroPolaco,
    },
    {
      id: 4,
      name: "Pollo Crispy",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: polloCrispy,
    },
    {
      id: 5,
      name: "Papas Mixtas",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: papasMixtas,
    },
    {
      id: 6,
      name: "Paninis",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: paninis,
    },
    {
      id: 7,
      name: "Cesticas",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: cesticas,
    },
  ];
  return (
    <>
      <article
        id="platos"
        className="flex flex-col items-center px-6 lg:px-16 mt-12 lg:mt-16"
      >
        <h1 className="text-emerald-600 tracking-wide font-semibold text-3xl lg:text-4xl font-sans drop-shadow-md mb-8">
          Nuestros Mejores Platos
        </h1>
        <div className="grid grid-flow-col gap-3 lg:gap-4 w-screen lg:w-[85%] overflow-x-auto px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center min-w-[200px] text-center bg-white shadow-lg rounded p-5 mb-3"
            >
              <img className="rounded-full w-32 lg:w-36" src={item.img} />
              <h1 className="mt-2 text-emerald-600 text-xl font-semibold">
                {item.name}
              </h1>
              <p className="text-sm text-zinc-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
