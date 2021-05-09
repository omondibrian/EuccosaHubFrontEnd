import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/Dammy/home.data";

export default {
  title: "components/cards/testimonial",
  argTypes: {
    testimonial: {
      description: "testimonial object",
      type: { required: true },
    },
  },
};

export const testimonial = (args) => <TestimonialCard {...args} />;

testimonial.args = {
  testimonial: testimonials[0],
};
testimonial.parameters = {
  docs: {
    source: {
      code: `import 'TestimonialCard' from "./cards/TestimonialCard";\n<TestimonialCard testmonial={${JSON.stringify(testimonials[0], null, "\t")}}/>`,
    },
  },
};
