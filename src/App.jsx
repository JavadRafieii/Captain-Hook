import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <main className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Parallax />
      <Footer />
    </main>
  );
}

export default App;