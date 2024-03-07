import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Content from "./components/content/Content";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
