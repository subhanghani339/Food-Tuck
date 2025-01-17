import React from "react";
import Image from "next/image";
import StarRatings from "../StarRatings/StarRatings";
import SocialIcons from "./SocialIcons";

interface AuthorCardProps {
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  avatarUrl?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  title,
  rating,
  reviewCount,
  description,
  avatarUrl = "/images/blog/author-avatar.svg",
}) => (
  <div className="flex flex-col border text-center p-8 my-6">
    <Image
      src={avatarUrl}
      alt="author image"
      width={148}
      height={129}
      priority
      className="rounded-full mx-auto mb-4"
    />
    <h2 className="text-grey-100 font-bold">{name}</h2>
    <h3 className="text-grey-300 my-1">{title}</h3>
    <div className="flex gap-2 justify-center items-center mb-2">
      <StarRatings ratings={rating} />
      <span className="text-grey-300">({reviewCount} Review{reviewCount > 1 ? "s" : ""})</span>
    </div>
    <p className="text-grey-300">{description}</p>
    <SocialIcons size={20} />
  </div>
);

export default AuthorCard;
