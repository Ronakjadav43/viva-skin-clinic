import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickLinks from "../components/QuickLinks";
import ServicesList from "../components/ServicesList";
import Modals from "../components/Modals";

export default function ServicesPage() {
  return (
    <>


      {/* Breadcrumbs Section */}
      <div className="section mt-0">
        <div className="breadcrumbs-wrap">
          <div className="container">
            <div className="breadcrumbs">
              <a href="index-2.html">Home</a>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>

      <ServicesList />

    </>
  );
}
