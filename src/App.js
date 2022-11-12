import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoIs from "./components/WhoIs";
import TrustUs from "./components/TrustUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PopUp from "./components/PopUp";
import { BarLoader } from "react-spinners";

import FloatingWhatsApp from "react-floating-whatsapp";
import whatsappAvatar from "./assets/avatar.png";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-perso box-border">
      {loading ? (
        <div className="fixed h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center bg-primary text-center">
          <BarLoader size={30} color="#ffffff" loading={loading} />
          {/* <p className="mt-2 text-white">Je me charge...</p> */}
        </div>
      ) : (
        <div>
          {/* <PopUp success={success} /> */}
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Welcome />
          <WhoIs />
          <TrustUs />
          <Services />
          <Contact />
          <Form success={success} setSuccess={setSuccess} />
          <Footer />
          <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <FloatingWhatsApp
            phoneNumber="+221771276922"
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
