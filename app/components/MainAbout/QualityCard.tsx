import Image from "next/image";
import React from "react";

interface QualityCardProps {
  image: string;
  title: string;
  para: string;
}

const QualityCard: React.FC<QualityCardProps> = ({ image, title, para }) => {
  return (
    <div className="px-8 text-center">
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        priority
        className="mx-auto"
      />
      <h4 className="font-bold my-2">{title}</h4>
      <p className="text-grey-200 helvetica">{para}</p>
    </div>
  );
};

export default QualityCard;
