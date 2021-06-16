import React from "react";
import style from "../Home.module.css";
import "./transition.css"
import TestimonialCard from "../../../cards/testimonial/TestimonialCard";
import { CSSTransition } from "react-transition-group";
import { Request } from "../.../../../../../utils/Request"
import { IP_ADDRESS } from "../../../../utils/constants";
import { testimonials as fallBackData } from "../../../../data/Dammy/home.data";

function TestimonialSection() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(0);
  const [testimonials, setTestinonials] = React.useState(fallBackData);
  React.useEffect(() => {
    const init = async () => {
      const { testimonies, status } = await Request(
        `${IP_ADDRESS}/testimonial`
      );
      if (status === 200) {
        setTestinonials(testimonies);
      }
    }
    init()
  }, [])
  const next = () => {
    let currentIndex = activeTestimonialIndex + 1;
    if (currentIndex > testimonials.length - 1) {
      currentIndex = 0;
    }
    setActiveTestimonialIndex(currentIndex);
  };
  const prev = () => {
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
        {testimonials.map((testimonial, index) => (
          <CSSTransition
            classNames="fade"
            in={index === activeTestimonialIndex}
            unmountOnExit
            timeout={200}
            key={index}
          >
            <TestimonialCard testimonial={testimonial} />
          </CSSTransition>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
