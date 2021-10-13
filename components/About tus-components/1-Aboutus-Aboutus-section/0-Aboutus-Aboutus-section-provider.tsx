import { AboutusCatalogWithPicture1 } from "./1-Aboutus-Aboutus-Catalog-withPicture";
import React from "react";
interface AppProps {
  AboutusAboutusSection: any;
}
export const AboutusAboutusSectionProvider: React.FunctionComponent<AppProps> = ({
  AboutusAboutusSection: {
    aboutusCatalogHeader,
    aboutusCatalogWithPicture,
    aboutusCatalogWithPicture1,
  },
}) => {
  return (
    <section id="about" className="container experience-section">
      <AboutusCatalogWithPicture1
        aboutusCatalogHeader={aboutusCatalogHeader[0]}
        aboutusCatalogWithPicture1={aboutusCatalogWithPicture1}
        aboutusCatalogWithPicture={aboutusCatalogWithPicture[0]}
      />
    </section>
  );
};
