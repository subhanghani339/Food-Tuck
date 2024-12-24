"use client";

import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeFilter: React.FC = () => {
    const [values, setValues] = useState<number[]>([100, 500]);

    const STEP = 10;
    const MIN = 0;
    const MAX = 8000;

    return (
        <div className="p-2">

            {/* Price Range Slider */}
            <Range
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(values: number[]) => setValues(values)} // Explicit type
                renderTrack={({ props, children }: { props: any; children: React.ReactNode }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            background: "orange",
                            borderRadius: "4px",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }: { props: any; index: number }) => (
                    <div
                        key={index}
                        {...props}
                        style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            border: "2px solid orange",
                        }}
                    />
                )}

            />

            {/* Display Selected Price Range */}
            <p className="mt-4 text-[#1E1E1E]">
                From ${values[0]} - ${values[1]}
            </p>
        </div>
    );
};

export default PriceRangeFilter;
