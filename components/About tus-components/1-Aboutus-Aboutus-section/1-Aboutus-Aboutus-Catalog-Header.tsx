import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { AboutusCatalogWithPicture } from "./2-Aboutus-Aboutus-Catalog-withPicture";
// ------------------------------ ---------------------- --------

interface PassingProps {
  aboutusCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const AboutusCatalogHeader: React.FunctionComponent<AppProps> = ({
  aboutusCatalogHeader,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildLongDescription,
  } = aboutusCatalogHeader;

  return (
    <div className="experience-left">
      <div className="brush-image-big">
        <div className="brush-inner-big-img">
          <img src={ContentAttachment[3] + "?width=381&height=770"} alt="" />
        </div>
        <div className="brush-over-text-main">
          <div className="brush-over-text">
            <div className="timing-text">
              <img src={ContentAttachment[0] + "?width=34&height=37"} alt="" />
              <h5
                style={{
                  fontFamily: "IRANSansWeb",
                }}
              >
                {FirstHeader}
              </h5>
            </div>
            <div className="days-text">
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="day"
              >
                {SecondHeader}
              </span>
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="time"
              >
                {ShortDescription}
              </span>
            </div>
            <div className="days-text saturday-text">
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="day"
              >
                {LongDescription}
              </span>
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="time"
              >
                {" "}
                {ShortDescription}
              </span>
            </div>
            <div className="days-text sunday-text">
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="day"
              >
                {ChildFirstHeader}
              </span>
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
                className="time"
              >
                {ChildSecondHeader}
              </span>
            </div>
            <div className="location-text">
              <img src={ContentAttachment[2] + "?width=20&height=30"} alt="" />
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
              >
                {ChildShortDescription}
              </span>
            </div>
            <div className="phone-text">
              <img src={ContentAttachment[1] + "?width=30&height=23"} alt="" />
              <span
                style={{
                  fontFamily: "IRANSansWeb",
                }}
              >
                {ChildLongDescription}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
