import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const singleBlog = [
    {
      image: "/images/home/blog-1.svg",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022 ",
      url: "/",
    },
    {
      image: "/images/home/blog-2.svg",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022 ",
      url: "/",
    },
    {
      image: "/images/home/blog-3.svg",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022 ",
      url: "/",
    },
  ];

  return (
    <div className="container pb-16">
      <MultiHeading
        heading="Latest News And Blog"
        subheading="Blog Post"
        textAlignment={"text-center"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {singleBlog.map((blog, index) => (
          <BlogCard key={index} image={blog.image} title={blog.title} date={blog.date} url={blog.url} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
