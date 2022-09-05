import { useState } from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoIs from "./components/WhoIs";
import TrustUs from "./components/TrustUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="font-perso box-border overflow-x-hidden">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Welcome className="overflow-x-hidden" />
      <WhoIs className="overflow-x-hidden" />
      <TrustUs className="overflow-x-hidden" />
      <Services className="overflow-x-hidden" />
      <Contact className="overflow-x-hidden" />
      <Footer className="overflow-x-hidden" />
      <Sidebar
        className="overflow-x-hidden"
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </div>
  );
}

export default App;