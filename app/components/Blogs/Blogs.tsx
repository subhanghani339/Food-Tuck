import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import BlogCard from "./BlogCard";
import { getFeaturedBlogs } from "@/app/actions/getBlogsActions";
import { Blog } from "@/app/types/blog";
import { formatDate } from "@/app/helpers/date";

const Blogs = async () => {
  
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <div className="container pb-16">
      <MultiHeading
        heading="Latest News And Blog"
        subheading="Blog Post"
        textAlignment={"text-center"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuredBlogs?.map((blog:Blog, index:number) => (
          <BlogCard key={index} image={blog.featuredImage} title={blog.title} date={formatDate(blog.date)} url={`/blog/${blog.slug}`} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
