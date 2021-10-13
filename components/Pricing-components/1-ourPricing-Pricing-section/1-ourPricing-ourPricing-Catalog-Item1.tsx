import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourPricingCatalogItem1: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const OurPricingCatalogItem1: React.FunctionComponent<AppProps> = ({
  ourPricingCatalogItem1,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
  } = ourPricingCatalogItem1;

  return (
    <div className="our-price-box-left">
      <div className="our-price-ic">
        <img src={ContentAttachment[0] + "?width=43&height=46"} alt="" />
      </div>
      <div className="our-price-text">
        <h4
          style={{
            fontFamily: "IRANSansWeb",
          }}
        >
          {FirstHeader}
        </h4>
        <p
          style={{
            fontFamily: "IRANSansWeb",
          }}
        >
          {ShortDescription}
        </p>
        <a
          style={{
            fontFamily: "IRANSansWeb",
          }}
          href="#"
          title="more"
          className="more"
        >
          {SecondHeader}
        </a>
      </div>
    </div>
  );
};
