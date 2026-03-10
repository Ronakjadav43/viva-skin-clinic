import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickLinks from "../components/QuickLinks";
import AboutClinic from "../components/AboutClinic";
import AboutAdvantages from "../components/AboutAdvantages";
import AboutCoreValues from "../components/AboutCoreValues";
import AboutSmileBanner from "../components/AboutSmileBanner";
import AboutOffice from "../components/AboutOffice";
import Modals from "../components/Modals";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-content">
        {/* Breadcrumbs Section */}
        <div className="section mt-0">
          <div className="breadcrumbs-wrap">
            <div className="container">
              <div className="breadcrumbs">
                <a href="index-2.html">Home</a>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>

        <AboutClinic />
        <AboutAdvantages />
        <AboutCoreValues />
        <AboutSmileBanner />
        <AboutOffice />
      </div>
      <Footer />
      <QuickLinks />
      <Modals />
    </>
  );
}
