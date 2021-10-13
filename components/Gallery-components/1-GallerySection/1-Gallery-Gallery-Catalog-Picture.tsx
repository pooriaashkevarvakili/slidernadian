import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { GalleryCatalogPicture1 } from "./1-Gallery-Gallery-Catalog-PictureHeader";
import { GalleryCatalogHeader } from "./1-Gallery-Catalog-Header";
import { GalleryCatalogPicture2 } from "./2-Gallery-Gallery-Catalog-PictureHeader2";
import { GalleryCatalogPicture3 } from "./3-Gallery-Gallery-Catalog-Picture3";
import { GalleryCatalogPicture4 } from "./4-Gallery-Gallery-Catalog-Picture4";
import { GalleryCatalogPicture5 } from "./5-Gallery-Gallery-Catalog-Picture5";
// ------------------------------ ---------------------- --------

interface PassingProps {
  galleryCatalogPicture3: OneCatalogData;
  galleryCatalogHeader: OneCatalogData;
  galleryCatalogPicture1: OneCatalogData;
  galleryCatalogPicture2: OneCatalogData;
  galleryCatalogPicture4: OneCatalogData;
  galleryCatalogPicture5: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const GalleryCatalogPicture: React.FunctionComponent<AppProps> = ({
  galleryCatalogPicture3,
  galleryCatalogHeader,
  galleryCatalogPicture1,
  galleryCatalogPicture2,
  galleryCatalogPicture4,
  galleryCatalogPicture5,
}) => {
  return (
    <section id="gallery" className="container our-gallery">
      <GalleryCatalogPicture1 galleryCatalogPicture1={galleryCatalogPicture1} />
      <div className="row">
        <GalleryCatalogHeader galleryCatalogHeader={galleryCatalogHeader} />
        <GalleryCatalogPicture2
          galleryCatalogPicture2={galleryCatalogPicture2}
        />
        <ul className="tabs">
          <li
            style={{
              fontFamily: "IRANSansWeb",
            }}
            className="tab-link current"
            data-tab="tab-1"
          >
            {galleryCatalogPicture3.FirstHeader}
          </li>

          <li
            style={{
              fontFamily: "IRANSansWeb",
              marginLeft: 40,
            }}
            className="tab-link"
            data-tab="tab-2"
          >
            {galleryCatalogPicture3.SecondHeader}
          </li>
          <li
            style={{
              fontFamily: "IRANSansWeb",
              marginLeft: 50,
            }}
            className="tab-link"
            data-tab="tab-3"
          >
            {galleryCatalogPicture3.ShortDescription}
          </li>
        </ul>

        <GalleryCatalogPicture3
          galleryCatalogPicture3={galleryCatalogPicture3}
        />
        <GalleryCatalogPicture4
          galleryCatalogPicture4={galleryCatalogPicture4}
        />

        <GalleryCatalogPicture5
          galleryCatalogPicture5={galleryCatalogPicture5}
        />
      </div>
    </section>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
