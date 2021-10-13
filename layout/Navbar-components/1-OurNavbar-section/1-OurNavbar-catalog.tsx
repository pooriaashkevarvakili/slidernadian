import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  navbarStrings: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurNavbarCatalog: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  const {
    FirstHeader,

    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,

    ChildLongDescription,
    ContentAttachment,
  } = navbarStrings;

  return (
    <>
      <div className="se-pre-con"></div>

      <section id="home" className="banner-slider-initial">
        <div className="banner-slide-show-wrapper">
          <div className="banner-slider" id="banner-slide-show">
            <div className="banner-slider-item">
              <div className="banner-slider-item-img img1">
                <div className="banner-text"></div>
              </div>
            </div>
            <div className="banner-slider-item">
              <div className="banner-slider-item-img img2">
                <div className="banner-text"></div>
              </div>
            </div>
            <div className="banner-slider-item">
              <div className="banner-slider-item-img img3">
                <div className="banner-text"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container slider-header">
          <div className="row">
            <div className="header">
              <div className="mobile-ic">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="responsive-menu">
                <ul>
                  <li className="active">
                    <a href="#home" title="Home">
                      {FirstHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#about" title="Aboutus">
                      {SecondHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#services" title="Services">
                      {ShortDescription}
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" title="Testimonials">
                      {LongDescription}
                    </a>
                  </li>
                  <li>
                    <a href="#our-team" title="Our Team">
                      {ChildFirstHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" title="Pricing">
                      {ChildSecondHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" title="contact">
                      contact
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" title="Gallery">
                      {ChildLongDescription}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="table-cell">
                <ul>
                  <li className="active">
                    <a href="#home" title="Home">
                      {FirstHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#about" title="Aboutus">
                      {SecondHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#services" title="Services">
                      {ShortDescription}
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" title="Testimonials">
                      {LongDescription}
                    </a>
                  </li>
                  <li>
                    <a href="#our-team" title="Our Team">
                      {ChildFirstHeader}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <a href="/" title="Barber Shop">
                  <img
                    src={ContentAttachment[0] + "?width=134&height=130"}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="table-cell">
                <ul>
                  <li>
                    <a href="#pricing" title="Pricing">
                      {ChildSecondHeader}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" title="contact">
                      contact
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" title="Gallery">
                      {ChildLongDescription}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
