"use client";

import React, { useCallback } from "react";
import { allBlogs } from "@/app/data/dummyData";
import { BlogPost } from "./BlogPost";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

const AllBlogs: React.FC = () => {
  const handleSearch = useCallback((query: string) => {
    console.log("Search query:", query);
  }, []);

  const authorInfo = {
    name: "Muhammad Subhan",
    title: "Blogger / Developer",
    rating: 5,
    reviewCount: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.",
    avatarUrl: "/images/blog/author-avatar.svg",
  };

  return (
    <div className="container py-10 md:py-16">
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-9">
          {allBlogs.map((blog) => (
            <BlogPost key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* Blog Sidebar */}
        <BlogSidebar authorInfo={authorInfo} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default AllBlogs;
