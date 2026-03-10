import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import servicesData from "../../services.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuickLinks from "../../components/QuickLinks";
import Modals from "../../components/Modals";
import ServiceSidebar from "../../components/ServiceSidebar";
import ServiceContent from "../../components/ServiceContent";

export async function generateStaticParams() {
  const pages = Object.keys(servicesData.ServiceDetails.pages);
  return pages.map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // @ts-ignore
  const pageData = servicesData.ServiceDetails.pages[slug];

  if (!pageData) {
    notFound();
  }

  const { sidebar } = servicesData.ServiceDetails;

  return (
    <>

      <div className="section mt-0">
        <div className="breadcrumbs-wrap">
          <div className="container">
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <span>{pageData.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section page-content-first">
        <div className="container mt-6">
          <div className="row">
            <ServiceSidebar data={sidebar} activeSlug={slug} />
            <ServiceContent page={pageData} />
          </div>
        </div>
      </div>

    </>
  );
}
