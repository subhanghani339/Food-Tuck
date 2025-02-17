"use client";

import React, { useEffect, useState } from "react";
import { BlogPost } from "./BlogPost";
import BlogSidebar from "@/app/components/BlogSidebar/BlogSidebar";
import { blogAuthorInfo } from "@/app/data/dummyData";
import { getBlogs } from "@/app/actions/getBlogsActions";
import { Blog } from "@/app/types/blog";
import { BlogSkeleton } from "@/app/components/Skeleton/BlogSkeleton";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  // Function to handle search
  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    setQuery(searchQuery);

    try {
      const data = await getBlogs(searchQuery);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-8 lg:py-16">
      <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
        <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
          {loading ? (
            <BlogSkeleton />
          ) : (
            filteredBlogs.map((blog: Blog) => (
              <BlogPost key={blog.slug} blog={blog} />
            ))
          )}
        </div>

        {/* Blog Sidebar */}
        <BlogSidebar authorInfo={blogAuthorInfo} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default AllBlogs;
