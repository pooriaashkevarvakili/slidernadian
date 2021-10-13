import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { AboutusCatalogWithPicture } from "./2-Aboutus-Aboutus-Catalog-withPicture";
import { AboutusCatalogHeader } from "./1-Aboutus-Aboutus-Catalog-Header";
// ------------------------------ ---------------------- --------

interface PassingProps {
  aboutusCatalogWithPicture1: OneCatalogData;
  aboutusCatalogWithPicture: OneCatalogData;
  aboutusCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps;

export const AboutusCatalogWithPicture1: React.FunctionComponent<AppProps> = ({
  aboutusCatalogWithPicture1,
  aboutusCatalogWithPicture,
  aboutusCatalogHeader,
}) => {
  return (
    <div className="row">
      <AboutusCatalogHeader aboutusCatalogHeader={aboutusCatalogHeader} />
      <AboutusCatalogWithPicture
        aboutusCatalogWithPicture={aboutusCatalogWithPicture}
      />
    </div>
  );
};
