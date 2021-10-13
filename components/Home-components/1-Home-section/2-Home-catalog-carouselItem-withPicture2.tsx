import { GetStaticProps } from "next";

import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  homeCatalogCarouselItemWithPicture2: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const HomeCatalogCarouselItemWithPicture2: React.FunctionComponent<AppProps> = ({
  homeCatalogCarouselItemWithPicture2,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
  } = homeCatalogCarouselItemWithPicture2;

  return (
    <>
    <div className="banner-slider-item">
              <div className="banner-slider-item-img img1">
                <div className="banner-text">
            <span
              style={{fontFamily: "IRANSansWeb"}}
            >{FirstHeader}</span>
            <h1
            style={{fontFamily: "IRANSansWeb"}}
            >{SecondHeader}</h1>
            <p
            style={{fontFamily: "IRANSansWeb"}}
            >
                    {ShortDescription}
                  </p>
                  <span className="much-img">
                    <img src={ContentAttachment[1]+"?width=44&height=14"} alt="" />
                  </span>
                </div>
              </div>
      </div>
      <style jsx>{`
          .img1 {
            background-image: url(${ContentAttachment[0]+"?width=1108&height=657"});
          }
          
        `}</style>
      </>
  );
};
