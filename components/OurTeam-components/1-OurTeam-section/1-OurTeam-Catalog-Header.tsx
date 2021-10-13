import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourTeamCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps;

export const OurTeamCatalogHeader: React.FunctionComponent<AppProps> = ({
  ourTeamCatalogHeader,
}) => {
  const { FirstHeader, ContentAttachment } = ourTeamCatalogHeader;
  return (
    <>
      <h2 className="heading-title">{FirstHeader}</h2>
      <style jsx>{`
        .heading-title:before {
          background: url(${
            ContentAttachment[0] + "?width=145&height=14"
          }) no-repeat scroll center center;        
      `}</style>
    </>
  );
};
