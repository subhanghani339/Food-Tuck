"use client";

import React, { useCallback } from 'react'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import { blogAuthorInfo } from "@/app/data/dummyData";
import { BlogPost } from '../AllBlogs/BlogPost';

interface SingleBlogProps {
    singleBlog: any
}

const SingleBlog: React.FC<SingleBlogProps> = ({ singleBlog }) => {

    const handleSearch = useCallback((query: string) => {
        console.log("Search query:", query);
    }, []);

    return (
        <div className="container py-8 lg:py-16">
            <div className="grid grid-cols-12 gap-6 mt-0 lg:mt-5">
                <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
                    <BlogPost key={singleBlog.slug} blog={singleBlog} hasReadMore={false} />
                </div>

                {/* Blog Sidebar */}
                <BlogSidebar authorInfo={blogAuthorInfo} onSearch={handleSearch} />
            </div>
        </div>
    )
}

export default SingleBlog