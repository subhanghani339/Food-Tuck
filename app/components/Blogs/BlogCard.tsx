import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, url }) => {
  return (
    <div className="border">
      <Image src={image} alt={title} width={800} height={400} priority />
      <div className="px-6 py-4">
        <p>{date}</p>

        <h4 className="font-bold text-2xl mt-4 mb-8">{title}</h4>
      </div>
    </div>
  );
};

export default BlogCard;
