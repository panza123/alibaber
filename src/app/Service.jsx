import { FaScissors } from "react-icons/fa6";
import { GiComb } from "react-icons/gi";
import { TbBladeFilled } from "react-icons/tb";

const Service = () => {
  return (
    <section
      id="service"
      className="min-h-screen px-4 py-14 bg-black text-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-bottom opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/barber-bg.png')",
          backgroundSize: "auto",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#C0A062] leading-snug">
            Our Barbers Have Talent
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Professional. Stylish. Trusted. We redefine grooming with passion and precision.
          </p>
        </div>

        {/* Icon Services */}
        <div className="flex flex-col sm:flex-row justify-center items-center 
        gap-6 sm:gap-10 mb-10">
          {[FaScissors, GiComb, TbBladeFilled].map((Icon, i) => (
            <div
              key={i}
              className="p-5 bg-[#C0A062] rounded-xl 
              shadow-md hover:rotate-3 hover:scale-105 transition-transform 
              duration-300 cursor-pointer"
            >
              <Icon size={60} className="text-black" />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center px-2 sm:px-6 max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#C0A062]">
            Cutting Excellence
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed">
            Step into a world where style meets precision. From modern fades to classic trims,
            we offer an experience that blends tradition with trend. Our barbers are not just
            skilled—they’re artists.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            With premium tools, expert hands, and a welcoming vibe, we guarantee confidence
            with every cut. Let your style speak louder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
