import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------

interface PassingProps {
  ourPricingCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const OurPricingCatalogHeader: React.FunctionComponent<AppProps> = ({
  ourPricingCatalogHeader,
}) => {
  const { FirstHeader } = ourPricingCatalogHeader;
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
            ourPricingCatalogHeader.ContentAttachment[0] +
            "?width=145&height=14"
          }) no-repeat scroll center center;        
      `}</style>
    </>
  );
};
