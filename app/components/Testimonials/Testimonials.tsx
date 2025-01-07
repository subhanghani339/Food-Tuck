"use client";

import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import { clientFeedbacks } from "@/app/data/dummyData";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = ({ hasBoxShadow = false, changeHeadingColor = false }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container pb-10">
      <MultiHeading
        subheading="Testimonials"
        heading="What our client are saying"
        singleColorHeading={changeHeadingColor}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="max-w-4xl my-14">
          <Slider {...settings}>
            {clientFeedbacks.map((feedback, index) => (
              <TestimonialCard
                key={index}
                image={feedback.image}
                name={feedback.name}
                feedback={feedback.feedback}
                designation={feedback.designation}
                hasBoxShadow={hasBoxShadow}
              />
            ))}
          </Slider>
        </div>
        <div className="absolute top-8 right-3">
          <Image
            src="/images/home/fur.svg"
            alt="fur"
            width={396}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
