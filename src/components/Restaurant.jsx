import restaurant from "../assets/img/Restaurant.png";

export default function Restaurant() {
  return (
    <>
      <article
        id="sobreNosotros"
        className="flex mx-auto gap-12 w-screen lg:w-[80%] px-6 mt-12 lg:mt-24"
      >
        <div className="grid grid-flow-row lg:grid-flow-col gap-6 lg:gap-12">
          <div className="order-last lg:order-first">
            <img
              className="w-full h-auto rounded-2xl"
              src={restaurant}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-emerald-600 text-3xl lg:text-4xl font-semibold !leading-tight">
              Nuestro restaurante
            </h1>
            <p className="mt-6 leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              vel molestiae! Quam saepe perspiciatis quod? Modi, vel quia
              architecto, dolor et quisquam porro eius ipsum at odit
              reprehenderit quae autem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero minima officia amet! Aut debitis
              reprehenderit possimus commodi dignissimos totam cumque, inventore
              doloribus voluptates, rerum accusamus laudantium pariatur,
              repudiandae voluptatibus consequatur.
            </p>
            <h1 className="font-semibold text-2xl mt-2">
              Calle Merida, Guasipati, Bolívar, Venezuela
            </h1>
          </div>
        </div>
      </article>
    </>
  );
}
