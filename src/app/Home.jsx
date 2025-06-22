import home from '../../public/assets/home.webp'
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Text Section */}
      <div
        className="flex-[1] text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-4xl text-white md:text-5xl font-extrabold leading-tight">
          Where Every Cut Tells a Story.
        </h1>
        <p className="text-lg text-gray-300">
          Experience sharp fades, flawless trims, and unmatched grooming by
          skilled hands. Style, precision, and confidence—delivered.
        </p>

        <button className="mt-4 px-6 py-3 bg-[#C0A062] text-white rounded-full shadow 
        hover:bg-[#e7ca8f] transition">
          Book an Appointment
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-[1.5] w-full max-w-md md:max-w-lg lg:max-w-[500px]">
        <img
          src={home}
          alt="Barber Shop"
          className="w-full h-full object-cover rounded-xl shadow-xl"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default Home;
