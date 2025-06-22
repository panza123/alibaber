import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { ImScissors } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
         <div className="flex items-center gap-2">
                 <ImScissors className="text-4xl text-white" />
                 <b className="text-xl">ALI BARBER</b>
               </div>
          <p className="text-sm text-gray-400 pt-3">
            Clean cuts, sharp style. Experience premium grooming services with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-300">123 Groom Lane, Lagos, NG</p>
          <p className="text-sm text-gray-300">Phone: +234 800 000 0000</p>
          <p className="text-sm text-gray-300">Email: info@barberpro.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white">
              <FaFacebook  size={40} className="text-[#1877F2]"/>
            </a>
            <a href="#" className="hover:text-white">
              <CiInstagram size={40} className="text-[#E1306C]" />
            </a>
            <a href="#" className="hover:text-white">
             <RiTwitterXLine  size={40}/> 
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Alibarber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
