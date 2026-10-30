import About from "@/componenets/home/About";
import Cta from "@/componenets/home/Cta";
import Hero from "@/componenets/home/Hero";
import Logos from "@/componenets/home/Logos";
import Projects from "@/componenets/home/Projects";
import Services from "@/componenets/home/Services";
import WhyChooseUs from "@/componenets/home/WhyChooseUs";
import Footer from "@/componenets/ui/Footer";
import Header from "@/componenets/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Logos/>
      <Cta/>
      <Footer/>
    </>
  );
}
