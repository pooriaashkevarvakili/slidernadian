import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { OurPricingCatalogHeader } from "./1-ourPricing-ourPricing-Catalog-Header";
import { OurPricingCatalogItem1 } from "./1-ourPricing-ourPricing-Catalog-Item1";
import { OurPricingCatalogItem2 } from "./2-ourPricing-ourPricing-Catalog-Item2";
import { OurPricingCatalogItem3 } from "./3-ourPricing-ourPricing-Catalog-Item3";
import { OurPricingCatalogItem4 } from "./4-ourPricing-ourPricing-Catalog-Item4";
import { OurPricingCatalogItem5 } from "./5-ourPricing-ourPricing-Catalog-Item5";
import { OurPricingCatalogItem6 } from "./6-ourPricing-ourPricing-Catalog-Item6";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourPricingCatalogHeader: OneCatalogData;
  ourPricingCatalogItemDiscount1: OneCatalogData;
  ourPricingCatalogItem1: OneCatalogData;
  ourPricingCatalogItem2: OneCatalogData;
  ourPricingCatalogItem3: OneCatalogData;
  ourPricingCatalogItemDiscount2: OneCatalogData;
  ourPricingCatalogItemDiscount3: OneCatalogData;
  ourPricingCatalogItem4: OneCatalogData;
  ourPricingCatalogItemDiscount4: OneCatalogData;
  ourPricingCatalogItem5: OneCatalogData;
  ourPricingCatalogItemDiscount5: OneCatalogData;
  ourPricingCatalogItem6: OneCatalogData;
  ourPricingCatalogItemDiscount6: OneCatalogData;
}

type AppProps = PassingProps;

// ------------------------------ ---------------------- --------
export const OurPricingCatalogItem: React.FunctionComponent<AppProps> = ({
  ourPricingCatalogHeader,
  ourPricingCatalogItemDiscount1,
  ourPricingCatalogItemDiscount2,
  ourPricingCatalogItem1,
  ourPricingCatalogItem2,
  ourPricingCatalogItem3,
  ourPricingCatalogItemDiscount3,
  ourPricingCatalogItemDiscount4,
  ourPricingCatalogItemDiscount5,
  ourPricingCatalogItem4,
  ourPricingCatalogItem5,
  ourPricingCatalogItem6,
  ourPricingCatalogItemDiscount6,
}) => {
  return (
    <section id="pricing" className="container our-pricing">
      <div className="row">
        <OurPricingCatalogHeader
          ourPricingCatalogHeader={ourPricingCatalogHeader}
        />

        <div className="our-pricing-wrapper clearfix">
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem1
                ourPricingCatalogItem1={ourPricingCatalogItem1}
              />
              <div className="our-price-box-right">
                <div className="price-discount">
                  <span>{ourPricingCatalogItemDiscount1.FirstHeader}</span>
                </div>
                <div className="start-price">
                  <span>{ourPricingCatalogItemDiscount1.ShortDescription}</span>
                  <b>{ourPricingCatalogItemDiscount1.SecondHeader}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem2
                ourPricingCatalogItem2={ourPricingCatalogItem2}
              />
              <div className="our-price-box-right">
                <div className="table">
                  <div className="table-cell">
                    <div className="start-price">
                      <span>{ourPricingCatalogItemDiscount2.FirstHeader}</span>
                      <b>{ourPricingCatalogItemDiscount2.SecondHeader}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem3
                ourPricingCatalogItem3={ourPricingCatalogItem3}
              />
              <div className="our-price-box-right">
                <div className="table">
                  <div className="table-cell">
                    <div className="start-price">
                      <span>{ourPricingCatalogItemDiscount3.FirstHeader}</span>
                      <b>{ourPricingCatalogItemDiscount3.SecondHeader}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem4
                ourPricingCatalogItem4={ourPricingCatalogItem4}
              />
              <div className="our-price-box-right">
                <div className="price-discount">
                  <span>{ourPricingCatalogItemDiscount4.FirstHeader}</span>
                </div>
                <div className="start-price">
                  <span>{ourPricingCatalogItemDiscount4.SecondHeader}</span>
                  <b>{ourPricingCatalogItemDiscount4.ShortDescription}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem5
                ourPricingCatalogItem5={ourPricingCatalogItem5}
              />
              <div className="our-price-box-right">
                <div className="table">
                  <div className="table-cell">
                    <div className="start-price">
                      <span>{ourPricingCatalogItemDiscount5.FirstHeader}</span>
                      <b>{ourPricingCatalogItemDiscount5.SecondHeader}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-price-box">
            <div className="our-price-box-inner clearfix">
              <OurPricingCatalogItem6
                ourPricingCatalogItem6={ourPricingCatalogItem6}
              />
              <div className="our-price-box-right">
                <div className="table">
                  <div className="table-cell">
                    <div className="start-price">
                      <span>{ourPricingCatalogItemDiscount6.FirstHeader}</span>
                      <b>{ourPricingCatalogItemDiscount6.SecondHeader}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
