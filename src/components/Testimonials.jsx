import testimonial from "../assets/img/Testimonial.png";
import testimonial2 from "../assets/img/Testimonial2.png";
import testimonial3 from "../assets/img/Testimonial3.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ingrid Ramos",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis, quia necessitatibus in molestias, reiciendis, quam.",
      img: testimonial,
      since: 2022,
    },
    {
      id: 2,
      name: "Helena Silva",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea quas magni error voluptates nisi facere officiis impedit itaque,",
      img: testimonial2,
      since: 2021,
    },
    {
      id: 3,
      name: "Airton Souza",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eius, repudiandae facere autem deleniti ipsam, eos laborum iure quos.",
      img: testimonial3,
      since: 2020,
    },
  ];

  return (
    <>
      <article
        id="testigos"
        className="mt-16 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-12 px-4 lg:p-18 shadow-2xl"
      >
        <h1 className="text-white text-center tracking-wide font-semibold text-3xl lg:text-4xl font-sans drop-shadow-md mb-12">
          Testigos
        </h1>
        <div className="flex flex-wrap justify-around gap-6 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center text-white w-[350px]"
            >
              <img
                className="w-40 lg:w-44 h-auto border-solid border-4 border-yellow-500 rounded-full shadow-lg"
                src={testimonial.img}
                alt=""
              />
              <h1 className="text-xl lg:text-2xl tracking-wide font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mt-3">
                {testimonial.name}
              </h1>
              <p className="text-sm text-gray-200">
                cliente desde {testimonial.since}
              </p>
              <p className="text-sm lg:text-base leading-6 mt-3">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
