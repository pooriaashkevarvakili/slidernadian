import React from "react";
import { OurPricingCatalogItem } from "./1-ourPricing-ourPricing-Catalog-Item";
interface AppProps {
  ourPricingProvider: any;
}
export const OurPricingOurpricingSectionProvider: React.FunctionComponent<AppProps> = ({
  ourPricingProvider: {
    ourPricingCatalogItemDiscount1,
    ourPricingCatalogItem1,
    ourPricingCatalogHeader,
    ourPricingCatalogItem2,
    ourPricingCatalogItem3,
    ourPricingCatalogItemDiscount2,
    ourPricingCatalogItemDiscount3,
    ourPricingCatalogItem4,
    ourPricingCatalogItemDiscount4,
    ourPricingCatalogItem5,
    ourPricingCatalogItemDiscount5,
    ourPricingCatalogItem6,
    ourPricingCatalogItemDiscount6,
  },
}) => {
  return (
    <section id="pricing" className="container our-pricing">
      <OurPricingCatalogItem
        ourPricingCatalogHeader={ourPricingCatalogHeader[0]}
        ourPricingCatalogItemDiscount1={ourPricingCatalogItemDiscount1[0]}
        ourPricingCatalogItem1={ourPricingCatalogItem1[0]}
        ourPricingCatalogItem2={ourPricingCatalogItem2[0]}
        ourPricingCatalogItem3={ourPricingCatalogItem3[0]}
        ourPricingCatalogItemDiscount2={ourPricingCatalogItemDiscount2[0]}
        ourPricingCatalogItemDiscount3={ourPricingCatalogItemDiscount3[0]}
        ourPricingCatalogItem4={ourPricingCatalogItem4[0]}
        ourPricingCatalogItemDiscount4={ourPricingCatalogItemDiscount4[0]}
        ourPricingCatalogItem5={ourPricingCatalogItem5[0]}
        ourPricingCatalogItemDiscount5={ourPricingCatalogItemDiscount5[0]}
        ourPricingCatalogItem6={ourPricingCatalogItem6[0]}
        ourPricingCatalogItemDiscount6={ourPricingCatalogItemDiscount6[0]}
      />
    </section>
  );
};
