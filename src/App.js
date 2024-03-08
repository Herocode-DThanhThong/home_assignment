import "./App.css";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "@fontsource/montserrat/500.css"; // Specify weight
function App() {
  return (
    <div className="mx-auto max-w-[1440px] font-montserrat">
      <Navbar />
      <Banner />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
