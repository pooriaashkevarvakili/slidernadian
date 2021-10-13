import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------

interface PassingProps {
  ourservicesCatalogItemHeader: OneCatalogData;
}

type AppProps = PassingProps;
export const OurservicesCatalogItemHeader: React.FunctionComponent<AppProps> = ({
  ourservicesCatalogItemHeader,
}) => {
  const { FirstHeader, ContentAttachment } = ourservicesCatalogItemHeader;
  return (
    <>
      <h2
        style={{
          fontFamily: "IRANSansWeb",
        }}
        className="heading-title"
      >
        {FirstHeader}
      </h2>
      <style jsx>{`
        .heading-title:before {
          background: url(${
            ContentAttachment[0] + "?width=145&height=14"
          }) no-repeat scroll center center;        
      `}</style>
    </>
  );
};
