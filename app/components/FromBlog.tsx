import React from "react";

import data from "../data.json";

const blogPosts = data.FromBlog;

export default function FromBlog() {
  return (
    <div className="section">
      <div className="container">
        <div className="title-wrap text-center">
          <h2 className="h1">From the Blog</h2>
          <div className="h-decor" />
        </div>
        <div className="blog-grid-full blog-grid-carousel-full js-blog-grid-carousel-full mt-3 mb-0 row">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className={`blog-post ${post.bgClass}`}>
                <div className="post-image">
                  <a href={post.link}>
                    <img src={post.img} alt="" />
                  </a>
                </div>
                <div className="blog-post-info">
                  <div className="post-date">
                    {post.day}
                    <span>{post.month}</span>
                  </div>
                  <div>
                    <h2 className="post-title">
                      <a href={post.link}>{post.title}</a>
                    </h2>
                  </div>
                </div>
                <div className="post-teaser">{post.teaser}</div>
                <div className="mt-2">
                  <a
                    href={post.link}
                    className="btn btn-sm btn-hover-fill"
                  >
                    {post.hasIcon ? (
                      <>
                        <i className="icon-right-arrow" />
                        <span>Read more</span>
                        <i className="icon-right-arrow" />
                      </>
                    ) : (
                      "Read more"
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
