import React from "react";
import { allBlogs } from "@/app/data/dummyData";
import { BlogPost } from "./BlogPost";
 
const AllBlogs = () => (
  <div className="container py-10 md:py-16">
    <div className="grid grid-cols-12 gap-6 mt-5">
      <div className="col-span-12 lg:col-span-9">
        {allBlogs.map((blog) => (
          <BlogPost key={blog.slug} blog={blog} />
        ))}
      </div>

      <div className="col-span-12 lg:col-span-3">Sidebar</div>
    </div>
  </div>
);

export default AllBlogs;
