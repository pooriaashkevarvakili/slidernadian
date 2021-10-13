import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourTeamCatalogWithPicture6: OneCatalogData;
}

type AppProps = PassingProps;
export const OurTeamCatalogWithPicture6: React.FunctionComponent<AppProps> = ({
  ourTeamCatalogWithPicture6,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
  } = ourTeamCatalogWithPicture6;

  return (
    <div className="our-team-box">
      <div className="our-team-inner">
        <div className="our-team-img">
          <img src={ContentAttachment[0] + "?width=278&height=373"} alt="" />
        </div>
        <div className="our-team-text">
          <h5
          style={{ fontFamily: "IRANSansWeb" }}
          >{FirstHeader}</h5>
          <span
          style={{fontFamily: "IRANSansWeb" }}
          >{SecondHeader}</span>
        </div>
      </div>
    </div>
  );
};
