import React from 'react'

export const BlogSkeleton = () => {
    return (
        <div className="mb-6 animate-pulse">
            <div className="h-80 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-10 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-4 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md my-4 w-48"></div>
        </div>
    );
};