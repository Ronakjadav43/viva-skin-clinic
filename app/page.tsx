"use client";
import Header from "./components/Header";
import QuickLinks from "./components/QuickLinks";
import HeroSlider from "./components/HeroSlider";
import Welcome from "./components/Welcome";
import OurTreatments from "./components/OurTreatments";
import ClinicFigures from "./components/ClinicFigures";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import GeneralServices from "./components/GeneralServices";
import BestSkinTreatments from "./components/BestSkinTreatments";
import SpecialOffers from "./components/SpecialOffers";
import Testimonials from "./components/Testimonials";
import FromBlog from "./components/FromBlog";
import TrustYourAppearance from "./components/TrustYourAppearance";
import FAQ from "./components/FAQ";
import CallUs from "./components/CallUs";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

export default function Home() {
  return (
    <>
      <QuickLinks />
      <HeroSlider />
      <Welcome />
      <OurTreatments />
      <ClinicFigures />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <AboutUs />
      <GeneralServices />
      <BestSkinTreatments />
      <SpecialOffers />
      <Testimonials />
      <FromBlog />
      <TrustYourAppearance />
      <FAQ />
      <CallUs />
    </>

  );
}
