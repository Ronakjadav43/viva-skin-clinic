import React from "react";

const blogPosts = [
  {
    id: 1,
    img: "images/content/news-01.jpg",
    day: "17",
    month: "JAN",
    title: "The Simpler Solution That Lasts",
    teaser:
      "When patients visit our practice from places like Saratoga Springs, NY, they often express that laser hair removal can sound daunting or excessive ...",
    link: "blog-post-page.html",
    bgClass: "",
    hasIcon: true,
  },
  {
    id: 2,
    img: "images/content/news-02.jpg",
    day: "22",
    month: "JAN",
    title: "Trending Now: Thighlighting",
    teaser:
      "No longer is liposuction just used on the abdomen. Patients who come to us from Albany and beyond appreciate the versatility of liposuction — and it can also treat...",
    link: "blog-post-page.html",
    bgClass: "bg-grey",
    hasIcon: true,
  },
  {
    id: 3,
    img: "images/content/news-03.jpg",
    day: "26",
    month: "JAN",
    title: "Our Spa One Bridal Packages",
    teaser:
      "There is no one more interested in looking beautiful than a bride. Photographs from a wedding day are designed to be timeless, cherished in frames in the homes of...",
    link: "blog-post-page.html",
    bgClass: "",
    hasIcon: true,
  },
  {
    id: 4,
    img: "images/content/news-01.jpg",
    day: "17",
    month: "JAN",
    title: "The Simpler Solution That Lasts",
    teaser:
      "When patients visit our practice from places like Saratoga Springs, NY, they often express that laser hair removal can sound daunting or excessive ...",
    link: "blog-post-page.html",
    bgClass: "bg-grey",
    hasIcon: false,
  },
  {
    id: 5,
    img: "images/content/news-02.jpg",
    day: "22",
    month: "JAN",
    title: "Trending Now: Thighlighting",
    teaser:
      "No longer is liposuction just used on the abdomen. Patients who come to us from Albany and beyond appreciate the versatility of liposuction — and it can also treat...",
    link: "blog-post-page.html",
    bgClass: "",
    hasIcon: false,
  },
  {
    id: 6,
    img: "images/content/news-03.jpg",
    day: "26",
    month: "JAN",
    title: "Our Spa One Bridal Packages",
    teaser:
      "There is no one more interested in looking beautiful than a bride. Photographs from a wedding day are designed to be timeless, cherished in frames in the homes of...",
    link: "blog-post-page.html",
    bgClass: "bg-grey",
    hasIcon: false,
  },
];

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
