import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  aboutusCatalogWithPicture: OneCatalogData;
}

type AppProps = PassingProps;

export const AboutusCatalogWithPicture: React.FunctionComponent<AppProps> = ({
  aboutusCatalogWithPicture,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ContentAttachment,
  } = aboutusCatalogWithPicture;
  return (
    <div className="experience-right">
      <h6
        style={{
          fontFamily: "IRANSansWeb",
        }}
      >
        {FirstHeader}
      </h6>
      <h2
        style={{
          fontFamily: "IRANSansWeb",
        }}
      >
        {SecondHeader}
      </h2>
      <span className="line"></span>
      <div className="story-text">
        <div className="story-text-left">
          <p
            style={{
              fontFamily: "IRANSansWeb",
            }}
            className="big-text"
          >
            {ShortDescription}
          </p>
          <p
            style={{
              fontFamily: "IRANSansWeb",
            }}
          >
            {LongDescription}
          </p>
          <a
            style={{
              fontFamily: "IRANSansWeb",
            }}
            href="#"
            title="read more"
            className="read-more-btn"
          >
            {ChildFirstHeader}
          </a>
        </div>
        <div className="story-text-right">
          <img src={ContentAttachment[0] + "?width=268&height=434"} alt="" />
        </div>
      </div>
    </div>
  );
};
