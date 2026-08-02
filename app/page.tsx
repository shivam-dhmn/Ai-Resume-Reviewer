import Feature from "@/components/landing/Feature";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import Testimonial from "@/components/landing/testimonial";


export default function Home() {
  return <>
  <Navbar />
  <Hero />
  <Feature />
  <HowItWorks />
  <Testimonial />
  <Footer />
  </>
}