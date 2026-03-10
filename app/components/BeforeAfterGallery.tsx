import React from "react";

const galleryData = [
  {
    id: 1,
    style: 1,
    before: "/images/b&a/ba1.jpeg",
    after: "/images/b&a/ba2.jpeg",
  },
  {
    id: 2,
    style: 2,
    before: "/images/b&a/ba3.jpeg",
    after: "/images/b&a/ba4.jpeg",
  },
  {
    id: 3,
    style: 3,
    before: "/images/b&a/ba5.jpeg",
    after: "/images/b&a/ba6.jpeg",
  },
  {
    id: 4,
    style: 1,
    before: "/images/b&a/ba7.jpeg",
    after: "/images/b&a/ba7.jpeg",
  },
  {
    id: 5,
    style: 1,
    before: "/images/b&a/ba8.jpeg",
    after: "/images/b&a/ba8.jpeg",
  },
];

export default function BeforeAfterGallery() {
  return (
    <div className="section">
      <div className="container-fluid px-auto">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Our Succes Storeies</div>
          <h2 className="h1">Before and After Gallery</h2>
          <div className="h-decor" />
        </div>
        <div className="blog-grid-full gallery-hover gallery-hover-carousel js-gallery-hover-carousel mt-3 mb-0 row">
          {galleryData.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className={`gallery-hover-item style-${item.style}`}>
                <div
                  className="gallery-hover-item-before"
                  data-bg={item.before}
                ></div>
                <div
                  className="gallery-hover-item-after"
                  data-bg={item.after}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
