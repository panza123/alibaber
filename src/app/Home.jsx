import home from '../../public/assets/home.webp';

const Home = () => {
  return (
    <section
      id="home"
       className="min-h-screen bg-black px-4 sm:px-6 md:px-10 py-12 pt-24 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Text Section */}
      <div
        className="flex-1 text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
          Where Every Cut Tells a Story.
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          Experience sharp fades, flawless trims, and unmatched grooming by
          skilled hands. Style, precision, and confidence—delivered.
        </p>

        <div>
          <button className="mt-4 px-6 py-3 text-sm sm:text-base bg-[#C0A062] text-white rounded-full shadow 
          hover:bg-[#e7ca8f] transition duration-300 ease-in-out">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img
          src={home}
          alt="Barber Shop"
          className="w-full h-auto object-cover rounded-xl shadow-xl"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default Home;
