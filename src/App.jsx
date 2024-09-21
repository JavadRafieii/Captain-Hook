import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";
import RailSlider from "./components/railSlider/RailSlider";
import Play from "./components/play/Play";
import Gear from "/gear.png";
import Gear2 from "/gear-2.png";
import Gear3 from "/gear-3.png";
import Gear4 from "/gear-4.png";
import About from "./components/about/AboutCH";
import Presale from "./components/presale/Presale";
import Capt from "./components/capt/Capt";
import Roadmap from "./components/roadmap/Roadmap";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <main className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Parallax />
      <RailSlider images={{ src1: Gear, src2: Gear, src3: Gear, }} />
      <Play />
      <About />
      <RailSlider images={{ src1: Gear2, src2: Gear3, src3: Gear4, }} />
      <Presale />
      <Capt />
      <Roadmap />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;