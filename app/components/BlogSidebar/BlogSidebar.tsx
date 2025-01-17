import React from "react";
import SearchInput from "./SearchInput";
import AuthorCard from "./AuthorCard";

interface BlogSidebarProps {
  authorInfo: {
    name: string;
    title: string;
    rating: number;
    reviewCount: number;
    description: string;
    avatarUrl?: string;
  };
  onSearch: (query: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ authorInfo, onSearch }) => (
  <div className="col-span-12 lg:col-span-3">
    <SearchInput onSearch={onSearch} />
    <AuthorCard {...authorInfo} />
  </div>
);

export default BlogSidebar;
