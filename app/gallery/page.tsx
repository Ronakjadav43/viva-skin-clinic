import React from "react";
import Link from "next/link";
import GalleryGrid from "../components/GalleryGrid";
import GalleryCallUs from "../components/GalleryCallUs";

export default function GalleryPage() {
  return (
    <>
      <div className="section mt-0">
        <div className="breadcrumbs-wrap">
          <div className="container">
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>Smiles Gallery</span>
            </div>
          </div>
        </div>
      </div>

      <GalleryGrid />
      
      <GalleryCallUs />
    </>
  );
}
