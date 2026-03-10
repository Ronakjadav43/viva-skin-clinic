import React from "react";
import Link from "next/link";
import SpecialistSidebar from "../components/SpecialistSidebar";
import SpecialistContent from "../components/SpecialistContent";

export default function TheSpecialistPage() {
  return (
    <div className="page-content">
      {/* section */}
      <div className="section mt-0">
        <div className="breadcrumbs-wrap">
          <div className="container">
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <Link href="/our-specialists">Our Specialists</Link>
              <span>Dr. Frank Bigham</span>
            </div>
          </div>
        </div>
      </div>
      {/* //section */}

      {/* section */}
      <div className="section page-content-first">
        <div className="container mt-6">
          <div className="row">
            <SpecialistSidebar />
            <SpecialistContent />
          </div>
        </div>
      </div>
      {/* //section */}
    </div>
  );
}
