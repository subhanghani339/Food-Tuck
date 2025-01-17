"use client";

import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import AuthorCard from "./AuthorCard";
import { FaBars, FaTimes } from "react-icons/fa";

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

const BlogSidebar: React.FC<BlogSidebarProps> = ({ authorInfo, onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Lock/unlock the body scroll when sidebar is open/closed
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isSidebarOpen]);

  return (
    <div className="col-span-12 lg:col-span-3 order-1 lg:order-2">
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl text-brand-500 block lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black-100 bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 w-4/5 md:w-2/5 lg:w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "-translate-x-0" : "translate-x-full"
        } lg:relative lg:translate-x-0 lg:block`}
      >
        {/* Sidebar Content */}
        <div className="h-full overflow-y-auto p-5 lg:p-0">
          <SearchInput onSearch={onSearch} />
          <AuthorCard {...authorInfo} />
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
