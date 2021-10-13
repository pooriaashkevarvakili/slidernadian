 
import { CountersCatalogItem } from "./1-counter-section/1-Counters-catalog-Item1";
import { OneCatalogData } from "../../../types/OneCatalogData";
 
import React from "react";
import {OurServicesCatalogItem} from "./1-OurServices-Catalog-item"
import { OurservicesCatalogItemHeader } from "./1-OurServices-catalog-Header";
interface AppProps {
  OurService: any;
}
export const OurServicesOurServicesSectionProvider: React.FunctionComponent<AppProps> = ({
  OurService: {
    ourservicesCatalogItem,
    ourservicesCatalogItem2,
    ourservicesCatalogItem3,
    ourservicesCatalogItem4,
    ourservicesCatalogItem5,
    ourservicesCatalogItem6,
    ourservicesCatalogItem7,
    countersCatalogItem,
    countersCatalogItem2,
    countersCatalogItem3,
    countersCatalogItem4,
    ourservicesCatalogItemHeader,
    ourservicesCatalogItem8,
    ourservicesCatalogItem9
  },
}) => {
  return (
    <>
      <section id="services" className="container our-service">
        
        <OurServicesCatalogItem
          ourservicesCatalogItem7={ourservicesCatalogItem7[0]}
          ourServicesCatalogItem6={ourservicesCatalogItem6[0]}
          ourServicesCatalogItem5={ourservicesCatalogItem5[0]}
          ourservicesCatalogItem4={ourservicesCatalogItem4[0]}
          ourservicesCatalogItem3={ourservicesCatalogItem3[0]}
           ourservicesCatalogItem2={ ourservicesCatalogItem2[0]}
          ourservicesCatalogItemHeader={ourservicesCatalogItemHeader[0]}
        ourservicesCatalogItem9={ourservicesCatalogItem9}
        />
        <div style={{marginTop:50}}>
        <section
          
          className="container counter-banner"
        >
          <CountersCatalogItem
            countersCatalogItem={countersCatalogItem[0]}
            countersCatalogItem2={countersCatalogItem2[0]}
            countersCatalogItem3={countersCatalogItem3[0]}
            countersCatalogItem4={countersCatalogItem4[0]}
          />
          </section>
          </div>
      </section>
    </>
  );
};
