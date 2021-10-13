import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";

import { HomeCatalogCarouselItemWithPicture } from "./1-Home-catalog-carouselitem-withpicture";
// ------------------------------ ---------------------- -------
interface AppProps {
  homeSection: any;
}

export const HomeSectionSectionProvider: React.FunctionComponent<AppProps> = ({
  homeSection: {
    homeCatalogCarouselItemWithPicture,
    homeCatalogCarouselItemWithPicture2,
    homeCatalogCarouselItemWithPicture3,
    homeCatalogCarouselItemWithPicture4,
    homeCatalogCarouselItemWithPicture5,
    homeCatalogCarouselItemWithPicture6,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <section id="home">
    
      <HomeCatalogCarouselItemWithPicture
        homeCatalogCarouselItemWithPicture2={homeCatalogCarouselItemWithPicture2[0]}
        homeCatalogCarouselItemWithPicture3={homeCatalogCarouselItemWithPicture3[0]}
        homeCatalogCarouselItemWithPicture4={homeCatalogCarouselItemWithPicture4[0]}
        homeCatalogCarouselItemWithPicture={
          homeCatalogCarouselItemWithPicture
        }
      />
    </section>
  );
};
