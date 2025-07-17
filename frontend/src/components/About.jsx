import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At Cooking Healthy Food, we believe that delicious meals don’t
              have to come at the cost of your health. Our passion is creating
              flavorful dishes using fresh ingredients, authentic recipes, and a
              touch of love. Whether you're craving traditional favorites or
              exploring new tastes, every bite we serve is crafted with care to
              nourish your body and delight your senses.
            </p>

            <Link to="/" className="explore-btn">
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>

          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
