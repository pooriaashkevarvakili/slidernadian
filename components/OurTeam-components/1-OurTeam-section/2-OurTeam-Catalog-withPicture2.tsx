import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourTeamCatalogWithPicture2: OneCatalogData;
}

type AppProps = PassingProps;

export const OurTeamCatalogWithPicture2: React.FunctionComponent<AppProps> = ({
  ourTeamCatalogWithPicture2,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = ourTeamCatalogWithPicture2;

  return (
    <div className="our-team-box">
      <div className="our-team-inner">
        <div className="our-team-img">
          <img src={ContentAttachment[0] + "?width=278&height=373"} alt="" />
        </div>
        <div className="our-team-text">
          <h5
            style={{
              fontFamily: "IRANSansWeb",
            }}
          >
            {FirstHeader}
          </h5>
          <span style={{ fontFamily: "IRANSansWeb" }}>{SecondHeader}</span>
        </div>
      </div>
    </div>
  );
};
