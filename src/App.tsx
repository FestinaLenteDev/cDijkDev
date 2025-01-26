import { Route, Routes } from "react-router-dom";
import Advies from "./components/advies";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Hr from "./components/hr";
import Navbar from "./components/navbar";
import Slots from "./components/slots";
import Toezicht from "./components/toezicht";
import WhoAmI from "./components/who-am-i";
import Coaching from "./components/coaching";

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WhoAmI />
              <Slots />
            </>
          }
        />
        <Route path="advies" element={<Advies />} />
        <Route path="hr" element={<Hr />} />
        <Route path="toezicht" element={<Toezicht />} />
        <Route path="coaching" element={<Coaching />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
