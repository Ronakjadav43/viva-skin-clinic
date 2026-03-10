"use client";
import React, { useEffect, useState } from "react";
import galleryData from "../gallery.json";

export default function GalleryGrid() {
  const { Header, Filters, Grid } = galleryData;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let isComponentMounted = true;

    // A polling function that waits for React to mount the DOM AND for Next.js to load jQuery plugins
    const initGallery = () => {
      if (!isComponentMounted) return;
      // @ts-ignore
      const $ = window.jQuery;
      
      // Wait for scripts to load safely on the window object and the DOM elements to be injected
      if (typeof $ === "undefined" || !$.fn || !$.fn.isotope || !$.fn.twentytwenty || !$.fn.imagesLoaded || !$(".gallery-isotope").length) {
        setTimeout(initGallery, 100);
        return;
      }

      // Process Isotope and TwentyTwenty after images load
      const $gallery = $(".gallery-isotope");
      const $wrap = $gallery.parent('.gallery-wrap');
      
      // @ts-ignore
      $gallery.imagesLoaded(function () {
        // Re-initialize Isotope
        $gallery.isotope({
          itemSelector: ".gallery-item",
          masonry: {
            columnWidth: ".gallery-item",
            gutter: 30
          },
        });
        
        setTimeout(function () {
          if (!isComponentMounted) return;
          $gallery.isotope("layout");
          $wrap.addClass("loaded"); // Hides the loader

          // Re-initialize Twentytwenty Sliders after layout is settled
          if ($(".twentytwenty-container").length) {
            $(".twentytwenty-container").twentytwenty({
              before_label: 'before',
              after_label: 'after',
              default_offset_pct: 0.5
            });
          }
        }, 500);
      });
      
      $(".filters-by-category").off("click", "a").on("click", "a", (e: any) => {
        e.preventDefault();
        const target = $(e.currentTarget);
        const filterValue = target.attr("data-option-value");
        $gallery.isotope({ filter: filterValue });
        target.closest("ul").find("a.selected").removeClass("selected");
        target.addClass("selected");
      });
    };

    initGallery();

    return () => { isComponentMounted = false; };
  }, []);

  return (
    <div className="section page-content-first">
      <div className="container">
        <div className="text-center mb-2 mb-md-3 mb-lg-4">
          <div className="h-sub theme-color">{Header.subTitle}</div>
          <h1>{Header.title}</h1>
          <div className="h-decor"></div>
        </div>
      </div>
      <div className="container">
        <div className="text-center mb-3 mb-md-4 max-900">
          <div dangerouslySetInnerHTML={{ __html: Header.description }}></div>
        </div>
        <div className="filters-by-category mb-2 mb-lg-4">
          <ul
            className="option-set justify-content-center"
            data-option-key="filter"
          >
            {Filters.map((filter, index) => (
              <li key={index}>
                <a
                  href="#filter"
                  data-option-value={filter.value}
                  className={filter.value === "*" ? "selected" : ""}
                >
                  {filter.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery-wrap">
          <div className="loading-content">
            <div className="inner-circles-loader"></div>
          </div>
          {isMounted && (
            <div className="gallery-smiles gallery-isotope" id="gallery">
              {Grid.map((item, index) => (
                <div className={item.classes} key={index}>
                  <div className="twentytwenty-container">
                    <img src={item.img1} alt="" />
                    <img src={item.img2} alt="" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
