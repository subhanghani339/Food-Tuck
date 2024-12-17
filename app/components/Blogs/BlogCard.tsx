import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { LiaCommentDotsSolid } from "react-icons/lia";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, url }) => {
  return (
    <div className="border hover:scale-105 transition-all duration-700">
      <Image src={image} alt={title} width={800} height={400} priority />
      <div className="px-8 py-8">
        <p className="text-brand-500">{date}</p>

        <h4 className="font-bold text-2xl mt-4 mb-8">{title}</h4>

        <div className="flex justify-between">
          <Link href={url}>
            Learn More
          </Link>

          <div className="flex gap-3">
            <AiOutlineLike fontSize={'20px'} cursor={'pointer'} className="transition-colors duration-300 hover:fill-brand-500" />
            <LiaCommentDotsSolid fontSize={'20px'} cursor={'pointer'} className="transition-colors duration-300 hover:fill-brand-500" />
            <AiOutlineShareAlt fontSize={'20px'} cursor={'pointer'} className="transition-colors duration-300 hover:fill-brand-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
