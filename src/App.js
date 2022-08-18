import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoIs from "./components/WhoIs";
import TrustUs from "./components/TrustUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-perso box-border">
      <Navbar />
      <Welcome />
      <WhoIs />
      <TrustUs />
      <Services />
    </div>
  );
}

export default App;
