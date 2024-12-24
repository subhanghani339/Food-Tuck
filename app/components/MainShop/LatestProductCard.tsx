"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";

interface LatestProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
  ratings: number;
  originalPrice: number;
}

const LatestProductCard: React.FC<LatestProductCardProps> = ({
  id,
  imageUrl,
  name,
  ratings,
  originalPrice,
}) => {
  const router = useRouter();
  return (
    <div
      className="flex gap-4 mb-4 cursor-pointer w-max"
      onClick={() => router.push(`/shop-details/${id}`)}
    >
      <div className="relative w-20 h-20">
        <Image
          alt="Product Image"
          src={imageUrl}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <div className="flex flex-col justify-between text-grey-200">
        <h5>{name}</h5>
        <div className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((__, i) => (
              <FaStar key={i} fill={i < ratings ? "orange" : "#E0E0E0"} />
            ))}
        </div>
        <h6>${originalPrice.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default LatestProductCard;
