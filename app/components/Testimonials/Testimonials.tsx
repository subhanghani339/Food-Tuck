"use client";

import React from "react";
import MultiHeading from "../MultiHeading/MultiHeading";
import { clientFeedbacks } from "@/app/data/dummyData";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

      <div className="max-w-4xl mx-auto my-14">
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
    </div>
  );
};

export default Testimonials;
