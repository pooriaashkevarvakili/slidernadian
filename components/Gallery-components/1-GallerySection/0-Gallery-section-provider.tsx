import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { GalleryCatalogPicture } from "./1-Gallery-Gallery-Catalog-Picture";

// ------------------------------ ---------------------- -------
interface AppProps {
  GallerySection: any;
}

export const GallerySectionSectionProvider: React.FunctionComponent<AppProps> = ({
  GallerySection: {
    galleryCatalogPicture3,
    galleryCatalogHeader,
    galleryCatalogPicture1,
    galleryCatalogPicture2,
    galleryCatalogPicture4,
    galleryCatalogPicture5,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <section id="gallery" className="container our-gallery">
      <GalleryCatalogPicture
        galleryCatalogPicture5={galleryCatalogPicture5[0]}
        galleryCatalogPicture4={galleryCatalogPicture4[0]}
        galleryCatalogPicture3={galleryCatalogPicture3[0]}
        galleryCatalogHeader={galleryCatalogHeader[0]}
        galleryCatalogPicture1={galleryCatalogPicture1[0]}
        galleryCatalogPicture2={galleryCatalogPicture2[0]}
      />
    </section>
  );
};
