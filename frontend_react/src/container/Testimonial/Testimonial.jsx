import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const query = "*[_type == 'testimonials']";
    const brandsQuery = "*[_type == 'brands']";
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imageurl)} alt="personImage" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.compnay}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            {/* if we are at 0 go to last and traverse backwords */}
            {}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            {/* if we are at  last go to 0 and traverse forward */}

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
          <div className="app__testimonial-brands">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand._id}
              >
                <img
                  data-tip={brand.name}
                  src={urlFor(brand.imgUrl)}
                  alt={brand.name}
                />
                <ReactToolTip />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
