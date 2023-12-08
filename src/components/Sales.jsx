import sale from "../assets/img/Sale.png";
import sale2 from "../assets/img/Sale2.png";
import sale3 from "../assets/img/Sale3.png";
import sale4 from "../assets/img/Sale4.png";
import sale5 from "../assets/img/Sale5.png";
import sale6 from "../assets/img/Sale6.png";
import sale7 from "../assets/img/Sale7.png";
import sale8 from "../assets/img/Sale8.png";

export default function Sales() {
  const sales = [
    { id: 1, img: sale },
    { id: 2, img: sale2 },
    { id: 3, img: sale3 },
    { id: 4, img: sale4 },
    { id: 5, img: sale5 },
    { id: 6, img: sale6 },
    { id: 7, img: sale7 },
    { id: 8, img: sale8 },
  ];

  return (
    <>
      <article
        id="promociones"
        className="flex flex-col items-center px-6 lg:px-16 mt-12 lg:mt-16"
      >
        <h1 className="text-emerald-600 tracking-wide font-semibold text-3xl lg:text-4xl font-sans drop-shadow-md mb-8">
          Promociones Atuales
        </h1>
        <div className="grid grid-flow-col gap-3 lg:gap-4 w-screen lg:w-[85%] overflow-x-auto px-4">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="flex flex-col items-center min-w-[200px] shadow-lg rounded mb-3"
            >
              <img className="w-64 lg:w-96" src={sale.img} />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
