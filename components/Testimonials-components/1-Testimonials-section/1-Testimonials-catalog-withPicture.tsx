import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  testimonialswithPicture: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;
export const TestimonialswithPicture: React.FunctionComponent<AppProps> = ({
  testimonialswithPicture,
}) => {
  return (
    <section id="testimonial" className="container client-testimonial">
      <div className="row">
        <div className="testimonial-logo clearfix">
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[0] +
                  "?width=115&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[1] +
                  "?width=103&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[2] +
                  "?width=115&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[3] +
                  "?width=103&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[0] +
                  "?width=115&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[1] +
                  "?width=118&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[2] +
                  "?width=118&height=79"
                }
                alt=""
              />
            </a>
          </div>
          <div className="testi-logo-img">
            <a href="#" title="">
              <img
                src={
                  testimonialswithPicture.ContentAttachment[3] +
                  "?width=103&height=79"
                }
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
