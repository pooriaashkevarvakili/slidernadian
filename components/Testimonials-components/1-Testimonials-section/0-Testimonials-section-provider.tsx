import React from "react";
import { TestimonialswithPicture } from "./1-Testimonials-catalog-withPicture";
interface AppProps {
  Testimonials: any;
}
export const TestimonialsTestimonialsSectionProvider: React.FunctionComponent<AppProps> = ({
  Testimonials: { testimonialswithPicture },
}) => {
  return (
    <>
      <TestimonialswithPicture
        testimonialswithPicture={testimonialswithPicture[0]}
      />
    </>
  );
};
