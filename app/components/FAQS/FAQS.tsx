"use client";

import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQs } from "@/app/data/dummyData";

const FAQS = () => {
  const [activeFaq, setActiveFaq] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5, 6])
  );

  const toggleFaq = (id: number) => {
    setActiveFaq((prevState) => {
      const updatedFaqs = new Set(prevState);
      updatedFaqs.has(id) ? updatedFaqs.delete(id) : updatedFaqs.add(id);
      return updatedFaqs;
    });
  };

  return (
    <div className="container max-w-5xl py-20">
      <h2 className="text-3xl md:text-4xl text-grey-100 font-bold text-center">
        Questions Looks Here
      </h2>
      <p className="text-grey-200 text-center text-sm mt-1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {FAQs.map((faq) => (
          <FaqItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            onClick={() => toggleFaq(faq.id)}
            activeFaq={activeFaq}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQS;
