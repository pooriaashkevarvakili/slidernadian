import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourPricingCatalogItem6: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const OurPricingCatalogItem6: React.FunctionComponent<AppProps> = ({
  ourPricingCatalogItem6,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = ourPricingCatalogItem6;
  return (
    <div className="our-price-box-left">
      <div className="our-price-ic">
        <img src={ContentAttachment[0] + "?width=49&height=14"} alt="" />
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
