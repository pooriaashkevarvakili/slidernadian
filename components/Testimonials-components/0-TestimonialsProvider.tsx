import { TestimonialsTestimonialsSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  Testimonials: any;
}
// ----------------------------------------------------
export const TestimonialsProvider: React.FunctionComponent<AppProps> = ({
  Testimonials,
}) => (
  <section id="testimonial" className="container client-testimonial">
    <TestimonialsTestimonialsSectionProvider Testimonials={Testimonials} />
  </section>
);
