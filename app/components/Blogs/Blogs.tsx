import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import BlogCard from "./BlogCard";
import { getFeaturedBlogs } from "@/app/actions/getBlogsActions";
import { Blog } from "@/app/types/blog";

const Blogs = async () => {
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

  const featuredBlogs = await getFeaturedBlogs();

  console.log("THe featured blogs are", featuredBlogs);
  return (
    <div className="container pb-16">
      <MultiHeading
        heading="Latest News And Blog"
        subheading="Blog Post"
        textAlignment={"text-center"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuredBlogs?.map((blog:Blog, index:number) => (
          <BlogCard key={index} image={blog.featuredImage} title={blog.title} date={blog.date} url={`/blog/${blog.slug}`} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
