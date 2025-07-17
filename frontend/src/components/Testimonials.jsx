import React from "react";
import jsonData from "../restApi.json"; // Adjust path based on your structure
import "./Testimonials.css"; // Optional: custom styles

const Testimonials = () => {
  const testimonials = jsonData.data[0].testimonials;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">WHAT OUR CUSTOMERS SAY</h1>
          <p>Real stories from real food lovers!</p>
        </div>

        <div className="testimonial_container">
          {testimonials.map(({ id, image, description, rating, userName }) => (
            <div className="testimonial_card" key={id}>
              <img src={image} alt={userName} />
              <p className="description">“{description}”</p>
              <h3>{userName}</h3>
              <p className="rating">⭐ {rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
