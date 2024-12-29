"use client";

import React, { useState } from "react";

const ProductTab = () => {
  const tabs = [
    { id: 1, name: "Description", value: "description" },
    { id: 2, name: "Reviews", value: "reviews" },
  ];

  const [activeTab, setActiveTab] = useState<Number>(1);

  return (
    <div className="container">
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              tab.id === activeTab
                ? "bg-brand-500 text-white"
                : "bg-white text-grey-100"
            } px-6 py-2 helvetica`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}

        <div className="my-8 text-grey-300">
          <p className="mb-4">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
            Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </p>
          <p className="mb-4">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </p>

          <h6 className="font-bold text-grey-200 mb-2">Key Benefits</h6>
          <ul className="list-disc ps-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
