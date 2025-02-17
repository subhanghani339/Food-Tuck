import React from "react";
import { BlogPost } from "./BlogPost";
import BlogSidebar from "@/app/components/BlogSidebar/BlogSidebar";
import { blogAuthorInfo } from "@/app/data/dummyData";
import { getBlogs } from "@/app/actions/getBlogsActions";
import { BlogSkeleton } from "@/app/components/Skeleton/BlogSkeleton";
import { Blog } from "@/app/types/blog";

const AllBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container py-8 lg:py-16">
      <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
        <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
          {blogs.map((blog: Blog) => (
            <BlogPost key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* Blog Sidebar */}
        <BlogSidebar authorInfo={blogAuthorInfo} />
      </div>
    </div>
  );
};

export default AllBlogs;
