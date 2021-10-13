import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourTeamCatalogWithPicture3: OneCatalogData;
}

type AppProps = PassingProps;

export const OurTeamCatalogWithPicture3: React.FunctionComponent<AppProps> = ({
  ourTeamCatalogWithPicture3,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = ourTeamCatalogWithPicture3;

  return (
    <div className="our-team-box">
      <div className="our-team-inner">
        <div className="our-team-img">
          <img src={ContentAttachment[0] + "?width=278&height=373"} alt="" />
        </div>
        <div className="our-team-text">
          <h5 style={{ fontFamily: "IRANSansWeb" }}>{FirstHeader}</h5>
          <span style={{ fontFamily: "IRANSansWeb" }}>{SecondHeader}</span>
        </div>
      </div>
    </div>
  );
};
