import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: null | number;
  inStock: boolean;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  originalPrice,
  discountedPrice,
  inStock,
  imageUrl,
}) => {
  return (
    <Link href={`shop-details/${id}`} className="col-span-4">
      <div>
        <Image src={imageUrl} alt={name} width={800} height={800} priority />
      </div>
      <div className="mt-2 text-lg">
        <h2 className="font-bold text-grey-100 text-lg">{name}</h2>
        {discountedPrice && (
          <span className="text-brand-500">${discountedPrice.toFixed(2)}</span>
        )}
        <span
          className={`${
            !discountedPrice
              ? "text-brand-500"
              : "text-grey-300 line-through ml-2"
          }`}
        >
          ${originalPrice.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
