import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";
import TrustUs from "./components/TrustUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PopUp from "./components/PopUp";
import { BarLoader } from "react-spinners";

import FloatingWhatsApp from "react-floating-whatsapp";
import whatsappAvatar from "./assets/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, [success]);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      mirror: true,
      // disable: "mobile",
    });
  }, []);

  return (
    <div className="font-perso box-border overflow-hidden">
      {loading ? (
        <div className="fixed h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center bg-primary text-center">
          <BarLoader size={30} color="#ffffff" loading={loading} />
          {/* <p className="mt-2 text-white">Je me charge...</p> */}
        </div>
      ) : (
        <div>
          <PopUp success={success} errorMessage={errorMessage} />
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Welcome />
          <AboutUs />
          <TrustUs />
          <Services />
          <Contact />
          <Form
            success={success}
            setSuccess={setSuccess}
            setErrorMessage={setErrorMessage}
          />
          <Footer />
          <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <FloatingWhatsApp
            phoneNumber="+221764755226"
            accountName="DevAlot Digital"
            avatar={whatsappAvatar}
            statusMessage="Répond rapidement"
            chatMessage="Bonjour, comment pouvons-nous vous aidez ?"
            placeholder="Envoyez un message"
            darkMode="true"
            allowEsc="true"
            allowClickAway="true"
            notificationSound="true"
            height={330}
            className="z-50"
          />
        </div>
      )}
    </div>
  );
}

export default App;
