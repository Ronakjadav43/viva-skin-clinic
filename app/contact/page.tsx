import React from "react";
import Link from "next/link";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="section mt-0">
        <div className="contact-map" id="googleMapContact"></div>
      </div>

      <ContactInfo />
      
      <ContactForm />
    </>
  );
}
