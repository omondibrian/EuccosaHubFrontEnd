import React from "react";
import style from "../Home.module.css";
import anime from "animejs/lib/anime.es";
import TestimonialCard from "../../../cards/testimonial/TestimonialCard";

function TestimonialSection({
  testimonials,
  activeTestimonialIndex,
  setActiveTestimonialIndex,
}) {
  const next = () => {
    let currentIndex = activeTestimonialIndex + 1;
    if (currentIndex > testimonials.length - 1) {
      currentIndex = 0;
    }
    anime({
      targets: ".testimonial_card",
      duration: 500,
      opacity: [0.2, 1],
    });
    setActiveTestimonialIndex(currentIndex);
  };
  const prev = () => {
    anime({
      targets: ".testimonial_card",
      duration: 500,
      opacity: [0.2, 1],
    });
    let currentIndex = activeTestimonialIndex - 1;
    if (currentIndex < 0) {
      currentIndex = testimonials.length - 1;
    }
    setActiveTestimonialIndex(currentIndex);
  };
  return (
    <section className={style.testimonial}>
      <h3 className={style.sub_header}>Testimonials</h3>
      <div className={style.testimonial__slider}>
        <div className={style.testimonial__slider__controls}>
          <button
            className={style.prev}
            title="previous testimonial"
            onClick={prev}
          >
            &lsaquo;
          </button>
          <button
            className={style.next}
            title="next testimonial"
            onClick={next}
          >
            &rsaquo;
          </button>
        </div>
        <TestimonialCard testimonial={testimonials[activeTestimonialIndex]} />
      </div>
    </section>
  );
}

export default TestimonialSection;
