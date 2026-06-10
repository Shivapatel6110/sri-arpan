import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedPujas from "../components/FeaturedPujas";
import AstrologerBanner from "../components/AstrologerBanner";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Link to="/admin/chadhava">Admin</Link>
      <Hero />
      <Services />
      <FeaturedPujas />
      <AstrologerBanner />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <AppDownload />
      <Footer />
    </>
  );
}

export default Home;
