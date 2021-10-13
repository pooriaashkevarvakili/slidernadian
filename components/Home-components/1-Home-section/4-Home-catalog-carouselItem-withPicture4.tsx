import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  homeCatalogCarouselItemWithPicture4: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const HomeCatalogCarouselItemWithPicture4: React.FunctionComponent<AppProps> = ({
  homeCatalogCarouselItemWithPicture4,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = homeCatalogCarouselItemWithPicture4;

  return (
    <>
      
    <div className="banner-slider-item">
    <div className="banner-slider-item-img img3">
      <div className="banner-text">
            <span
              style={{
                fontFamily: "IRANSansWeb"
            }}
            >{FirstHeader}</span>
            <h1
              style={{
                fontFamily: "IRANSansWeb"
              }}
            >{SecondHeader}</h1>
        <p>
          {ShortDescription}
        </p>
        <span className="much-img">
          <img src={ContentAttachment[1]+"?width=44&height=14"} alt="" />
        </span>
      </div>
    </div>
      </div>
      <style jsx>{`
          
          .img3 {
            background-image: url(${ContentAttachment[0]+"?width=1108&height=657"});
          }
        `}</style>
      </>
  );
};
