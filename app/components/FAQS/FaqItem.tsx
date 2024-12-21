import React from "react";
import { PiMinusLight, PiPlusLight } from "react-icons/pi";

interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  onClick: (Event: React.MouseEvent) => void;
  activeFaq: Set<number>;
}

const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  onClick,
  activeFaq,
}) => {
  return (
    <div className="bg-brand-700 h-max p-4">
      <div onClick={onClick} className="cursor-pointer flex justify-between items-center">
        <h2 className="font-bold">{question}</h2>
        {activeFaq.has(id) ? <PiMinusLight /> : <PiPlusLight />}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
          activeFaq.has(id) ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="mt-1 text-grey-200">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
