import { GetStaticProps } from "next";
import Slider from "react-slick";
import { OurTeamCatalogWithPicture1 } from "./1-OurTeam-Catalog-withPicture1";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { OurTeamCatalogHeader } from "./1-OurTeam-Catalog-Header";
import { OurTeamCatalogWithPicture2 } from "./2-OurTeam-Catalog-withPicture2";
import { OurTeamCatalogWithPicture3 } from "./3-OurTeam-Catalog-withPicture3";
import { OurTeamCatalogWithPicture4 } from "./4-OurTeam-Catalog-withPicture4";
import { OurTeamCatalogWithPicture5 } from "./5-OurTeam-Catalog-withPicture5";
import { OurTeamCatalogWithPicture6 } from "./6-OurTeam-Catalog-withPicture6";
import { OurTeamCatalogWithPicture7 } from "./7-OurTeam-Catalog-withPicture7";
import { OurTeamCatalogWithPicture8 } from "./8-OurTeam-Catalog-withPicture8";
import { OurTeamCatalogWithPicture9 } from "./9-OurTeam-Catalog-withPicture9";
import React from "react";

// ------------------------------ ---------------------- --------

interface PassingProps {
  ourTeamCatalogWithPicture7: OneCatalogData;
  ourTeamCatalogWithPicture9: OneCatalogData;
  ourTeamCatalogWithPicture6: OneCatalogData;
  ourTeamCatalogWithPicture10: OneCatalogData;
  ourTeamCatalogWithPicture4: OneCatalogData;
  ourTeamCatalogWithPicture1: OneCatalogData;
  ourTeamCatalogWithPicture3: OneCatalogData;
  ourTeamCatalogHeader: OneCatalogData;
  ourTeamCatalogWithPicture2: OneCatalogData;
  ourTeamCatalogWithPicture5: OneCatalogData;
  ourTeamCatalogWithPicture8: OneCatalogData;
}

type AppProps = PassingProps;
export const OurTeamCatalogWithPicture: React.FunctionComponent<AppProps> = ({
  ourTeamCatalogWithPicture10,
  ourTeamCatalogWithPicture8,
  ourTeamCatalogWithPicture1,
  ourTeamCatalogWithPicture4,
  ourTeamCatalogWithPicture6,
  ourTeamCatalogHeader,
  ourTeamCatalogWithPicture5,
  ourTeamCatalogWithPicture2,
  ourTeamCatalogWithPicture3,
  ourTeamCatalogWithPicture9,
  ourTeamCatalogWithPicture7,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    //slidesToShow: 1,
    //slidesToScroll: 1,
  };
  return (
    <section id="our-team" className="container our-team">
      <div className="row">
        <OurTeamCatalogHeader ourTeamCatalogHeader={ourTeamCatalogHeader} />
        <Slider {...settings}>
          <div>
            <OurTeamCatalogWithPicture1
              ourTeamCatalogWithPicture1={ourTeamCatalogWithPicture1}
            />
            <OurTeamCatalogWithPicture2
              ourTeamCatalogWithPicture2={ourTeamCatalogWithPicture2}
            />
            <OurTeamCatalogWithPicture3
              ourTeamCatalogWithPicture3={ourTeamCatalogWithPicture3}
            />
          </div>
          <div>
            <OurTeamCatalogWithPicture4
              ourTeamCatalogWithPicture4={ourTeamCatalogWithPicture4}
            />
            <OurTeamCatalogWithPicture5
              ourTeamCatalogWithPicture5={ourTeamCatalogWithPicture5}
            />
            <OurTeamCatalogWithPicture6
              ourTeamCatalogWithPicture6={ourTeamCatalogWithPicture6}
            />
          </div>
          <div>
            <OurTeamCatalogWithPicture7
              ourTeamCatalogWithPicture7={ourTeamCatalogWithPicture7}
            />
            <OurTeamCatalogWithPicture8
              ourTeamCatalogWithPicture8={ourTeamCatalogWithPicture8}
            />
            <OurTeamCatalogWithPicture9
              ourTeamCatalogWithPicture9={ourTeamCatalogWithPicture9}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};
