import { ImScissors } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center text-white justify-between shadow-sm
     bg-[#1C1C1E] fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <ImScissors className="text-4xl text-[#C0A062]" />
        <b className="text-xl text-[#C0A062]">ALI BARBER</b>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-white text-[15px]">
        <li className="hover:text-[#FFD700] cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-[#FFD700] cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-[#FFD700] cursor-pointer">
          <a href="#service">Service</a>
        </li>
        <li className="hover:text-[#FFD700] cursor-pointer">
          <a href="#pricing">Pricing</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl cursor-pointer text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute top-[50px] left-0 w-full h-screen flex flex-col items-center gap-10 
          bg-[#1C1C1E] py-4 md:hidden text-xl font-medium text-white 
          transform transition-all duration-500 ease-in-out 
          ${menuOpen ? 'opacity-100 translate-y-0 delay-75' : 
              'opacity-0 -translate-y-5 pointer-events-none delay-75'}
        `}
      >
        <ul className="space-y-6 text-1xl">
          <li className="hover:text-[#FFD700] cursor-pointer">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer">
            <a href="#service" onClick={() => setMenuOpen(false)}>Service</a>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer">
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
