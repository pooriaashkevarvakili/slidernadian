import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { OurTeamCatalogWithPicture } from "./1-OurTeam-Catalog-withPicture";
// ------------------------------ ---------------------- -------
interface AppProps {
  OurTeam: any;
}

export const OurTeamSectionSectionProvider: React.FunctionComponent<AppProps> = ({
  OurTeam: {
    ourTeamCatalogHeader,
    ourTeamCatalogWithPicture1,
    ourTeamCatalogWithPicture2,
    ourTeamCatalogWithPicture3,
    ourTeamCatalogWithPicture4,
    ourTeamCatalogWithPicture5,
    ourTeamCatalogWithPicture6,
    ourTeamCatalogWithPicture7,
    ourTeamCatalogWithPicture8,
    ourTeamCatalogWithPicture9,
    ourTeamCatalogWithPicture10,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <section id="our-team" className="container our-team">
      <OurTeamCatalogWithPicture
        ourTeamCatalogWithPicture9={ourTeamCatalogWithPicture9[0]}
        ourTeamCatalogWithPicture8={ourTeamCatalogWithPicture8[0]}
        ourTeamCatalogWithPicture7={ourTeamCatalogWithPicture7[0]}
        ourTeamCatalogWithPicture6={ourTeamCatalogWithPicture6[0]}
        ourTeamCatalogWithPicture5={ourTeamCatalogWithPicture5[0]}
        ourTeamCatalogWithPicture4={ourTeamCatalogWithPicture4[0]}
        ourTeamCatalogWithPicture3={ourTeamCatalogWithPicture3[0]}
        ourTeamCatalogWithPicture2={ourTeamCatalogWithPicture2[0]}
        ourTeamCatalogWithPicture1={ourTeamCatalogWithPicture1[0]}
        ourTeamCatalogHeader={ourTeamCatalogHeader[0]}
        ourTeamCatalogWithPicture10={ourTeamCatalogWithPicture10}
      />
    </section>
  );
};
