"use client";

import React, { useCallback, useEffect, useState } from "react";
import { BlogPost } from "./BlogPost";
import BlogSidebar from "@/app/components/BlogSidebar/BlogSidebar";
import { blogAuthorInfo } from "@/app/data/dummyData";
import { getBlogs } from "@/app/actions/getBlogsActions";
import { Blog } from "@/app/types/blog";

const AllBlogs: React.FC = () => { 
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleSearch = useCallback((query: string) => {
    console.log("Search query:", query);
  }, []);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, [])

  console.log("The blogs are", blogs);
  return (
    <div className="container py-8 lg:py-16">
      <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
        <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
          {blogs.map((blog) => (
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
