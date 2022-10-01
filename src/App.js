import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoIs from "./components/WhoIs";
import TrustUs from "./components/TrustUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { FadeLoader } from "react-spinners";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-perso box-border">
      {loading ? (
        <div className="fixed h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center bg-primary text-center">
          <FadeLoader size={30} color="#ffffff" loading={loading} />
          {/* <p className="mt-2 text-white">Je me charge...</p> */}
        </div>
      ) : (
        <div>
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Welcome />
          <WhoIs />
          <TrustUs />
          <Services />
          <Contact />
          <Footer />
          <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      )}
    </div>
  );
}

export default App;
