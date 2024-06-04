import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimony from "./components/Testimony";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimony />
      <Cta />
      <Footer />
      <BackToTopBtn />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
