import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------

interface PassingProps {
  galleryCatalogPicture2: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const GalleryCatalogPicture2: React.FunctionComponent<AppProps> = ({
  galleryCatalogPicture2,
}) => {
  return (
    <div className="g1-ic">
      <img src={galleryCatalogPicture2.ContentAttachment[0]} alt="" />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
