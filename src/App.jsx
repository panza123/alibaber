import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./app/Home";
import About from "./app/About";
import Service from './app/Service';
import Pricing from './app/Pricing';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Ensure it catches all dynamically rendered elements
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Home />
      <About />
      <Service/>
      <Pricing/>
      <Footer />
    </main>
  );
}

export default App;
