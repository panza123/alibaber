import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import shop from "../../public/assets/shop.avif";
import ass from "../../public/assets/ass.avif";
import barber from "../../public/assets/barber.webp";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // Optional refresh in case of layout shifts
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-12 bg-[#1E1E1E] md:flex flex-row justify-between items-center gap-8 max-w-7xl mx-auto"
    >
      {/* Text Content */}
      <div className="md:max-w-lg">
        <h2 className="text-[#C0A062] text-3xl mb-6 font-medium">About Us</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          At Ali Barber, we're more than just a barbershop — we're a lifestyle.
          Founded on tradition and driven by style, our shop is a place where
          precision meets passion. Whether you're looking for a clean fade, a
          sharp beard trim, or a full grooming experience, our team of skilled
          barbers is here to deliver top-tier service in a laid-back, welcoming
          environment.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          With years of experience and an eye for detail, we take pride in every
          cut. Each visit is more than just a haircut — it's a moment to relax,
          reset, and walk out feeling your absolute best. We cater to the modern
          gentleman, blending classic barbering techniques with today's freshest
          trends. From the moment you walk through our doors, it's all about
          craftsmanship, comfort, and confidence. Come in, kick back, and let us
          take care of the rest.
        </p>
        <p className="text-gray-300 leading-relaxed">
          We believe grooming is about more than just looking good — it’s about
          feeling great. That’s why we take time to understand your style goals
          and provide tailored advice to keep you looking your best between
          visits.
        </p>
      </div>

      {/* Image Grid */}
      <div
        className="w-full md:w-auto mt-10 md:mt-0"
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Top Row - Two images */}
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={shop}
              alt="Barbershop interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={barber}
              alt="Barber at work"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom - Single image */}
          <div className="col-span-2 aspect-video overflow-hidden rounded-lg">
            <img
              src={ass}
              alt="Barber tools"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
