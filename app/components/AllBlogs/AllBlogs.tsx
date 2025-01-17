"use client";

import React, { useCallback } from "react";
import { allBlogs } from "@/app/data/dummyData";
import { BlogPost } from "./BlogPost";
import BlogSidebar from "@/app/components/BlogSidebar/BlogSidebar";
import { blogAuthorInfo } from "@/app/data/dummyData";

const AllBlogs: React.FC = () => {
  const handleSearch = useCallback((query: string) => {
    console.log("Search query:", query);
  }, []);

  return (
    <div className="container py-8 lg:py-16">
      <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
        <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
          {allBlogs.map((blog) => (
            <BlogPost key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* Blog Sidebar */}
        <BlogSidebar authorInfo={blogAuthorInfo} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default AllBlogs;
